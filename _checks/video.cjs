const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('assets/courses.js', 'utf8'), context);
const latest = context.window.CPP_COURSES.filter(c => c.video).at(-1);
const batch = fs.existsSync('_checks/video-batch.json') ? JSON.parse(fs.readFileSync('_checks/video-batch.json', 'utf8')) : {start: latest.number, end: latest.number};
const targets = context.window.CPP_COURSES.filter(c => c.number >= batch.start && c.number <= batch.end);
assert.equal(targets.length, batch.end - batch.start + 1);
assert(targets.every(c => c.video));
(async () => {
  const browser = await chromium.launch();
  try {
    const results = [];
    for (const latest of targets) {
    const page = await browser.newPage();
    try {
    page.on('console', msg => console.log('browser:', msg.text()));
    const url = `https://qc0317.github.io/cornpup/lessons/lesson-${latest.id}.html?check=${process.env.CHECK_SHA}`;
    let deployed = false;
    for (let attempt = 0; attempt < 20; attempt++) {
      await page.goto(url + `&attempt=${attempt}`, {waitUntil: 'domcontentloaded', timeout: 60000});
      const src = await page.evaluate(() => document.getElementById('lessonVideo')?.getAttribute('src'));
      if (src === latest.video) { deployed = true; break; }
      await new Promise(resolve => setTimeout(resolve, 15000));
    }
    assert(deployed, 'Newest lesson video has not deployed');
    await page.evaluate(() => {
      const v = document.getElementById('lessonVideo');
      v.addEventListener('error', () => console.error('video error', v.error?.code, v.error?.message));
      v.preload = 'auto';
      v.load();
    });
    await page.waitForFunction(() => {
      const v = document.getElementById('lessonVideo');
      return v && v.readyState >= 2 && Number.isFinite(v.duration) && v.duration > 0;
    }, null, {timeout: 120000});
    const result = await page.evaluate(async () => {
      const v = document.getElementById('lessonVideo');
      v.muted = true;
      await v.play();
      return {duration: v.duration, src: v.currentSrc};
    });
    await page.waitForFunction(() => document.getElementById('lessonVideo').currentTime > 1, null, {timeout: 30000});
    await page.evaluate(() => {
      const v = document.getElementById('lessonVideo');
      v.pause();
      v.currentTime = Math.min(30, v.duration / 2);
    });
    await page.waitForFunction(() => {
      const v = document.getElementById('lessonVideo');
      return !v.seeking && v.readyState >= 2;
    }, null, {timeout: 30000});
    assert(result.src.includes(`lesson-${latest.id}.mp4`));
    results.push({lesson: latest.number, status: 'passed', ...result});
    console.log(JSON.stringify(results.at(-1)));
    } catch (error) {
      results.push({lesson: latest.number, status: 'failed', error: error.message});
      console.error(JSON.stringify(results.at(-1)));
    } finally { await page.close(); }
    }
    fs.writeFileSync('_checks/video-results.json', JSON.stringify(results, null, 2));
    assert(results.every(r => r.status === 'passed'), 'Batch has failed lessons; inspect per-lesson results');
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
