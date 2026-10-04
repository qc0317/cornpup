const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('assets/courses.js', 'utf8'), context);
const latest = context.window.CPP_COURSES.filter(c => c.video).at(-1);
(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
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
    console.log(JSON.stringify({lesson: latest.number, status: 'passed', ...result}));
  } finally {
    await browser.close();
  }
})().catch(e => { console.error(e); process.exit(1); });
