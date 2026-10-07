window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "36": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "计算机的“计算”功能主要在哪里完成？",
        "options": [
          "内存",
          "CPU中央处理器",
          "硬盘",
          "显卡"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本课考查CPU中央处理器。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入5，逐行写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a0=0,a1=1,a2,i,n;\n    cin>>n;\n    for(i=2;i<n;i++){\n        a2=a0+a1;cout<<a2<<endl;\n        a0=a1;a1=a2;\n    }\n    return 0;\n}",
        "expected": "1\n2\n3",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "i=2、3、4时依次输出1、2、3，不会输出最初的0和1。代码由原课件图片还原。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "找出三位数中个位、十位、百位数字相同的数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int ge,shi,bai,i;\n    for(i=100;i<1000;i++){\n        {{0}};\n        shi=(i/10)%10;ge=i%10;\n        if({{1}}) cout<<i<<endl;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：求百位（分号已给出）"
          },
          {
            "label": "第二处：判断三位数字都相等"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "111\n222\n333\n444\n555\n666\n777\n888\n999"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填bai=i/100和bai==shi && shi==ge。注意C++中不能用bai==shi==ge表示三者相等。"
      }
    ]
  },
  "37": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "哪一种扩展名是声音文件格式？",
        "options": [
          "doc",
          "wav",
          "exe",
          "txt"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "wav是一种音频文件格式。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,bai,ge,ans=0;\n    for(i=100;i<=130;i++){\n        bai=i/100;ge=i%10;\n        if(bai==ge) ans++;\n    }\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "3",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "符合条件的是101、111、121，共3个。代码由原课件图片还原。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输入一个正整数，判断是否为完全数：所有真因子之和等于自身。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,i,sum=0;\n    cout<<\"n=\";cin>>n;\n    for(i=1;i<n;i++){\n        if(n%i==0) {{0}};\n    }\n    if({{1}}) cout<<\"是完全数\";\n    else cout<<\"不是完全数\";\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：累加真因子（分号已给出）"
          },
          {
            "label": "第二处：判断完全数"
          }
        ],
        "tests": [
          {
            "input": "6",
            "output": "n=是完全数"
          },
          {
            "input": "28",
            "output": "n=是完全数"
          },
          {
            "input": "12",
            "output": "n=不是完全数"
          },
          {
            "input": "1",
            "output": "n=不是完全数"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填sum+=i和sum==n。循环不包含n本身。"
      }
    ]
  },
  "38": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "最初为小写输入状态，反复按CapsLock、A、S，屏幕上第3个字符是什么？",
        "options": [
          "A",
          "S",
          "a",
          "s"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "第一轮输出AS，第二轮切回小写，第三个字符是a。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入8，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,i;cin>>a;b=1;\n    for(i=1;i<a;i++){\n        b*=i;\n        if(b%3==0) b/=3;\n        if(b%5==0) b/=5;\n    }\n    cout<<b<<endl;\n    return 0;\n}",
        "expected": "112",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "每次先乘i，再根据整除条件分别除3、除5，i最终只处理到7。代码由原课件图片还原。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输出数列1、3、7、15、31、63…的前30项。按原课件用n表示本轮要增加的数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    long long a,n;n=2;a=1;\n    for(int i=1;i<=30;i++){\n        cout<<a<<endl;\n        {{0}};\n        {{1}};\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：计算下一个数（分号已给出）"
          },
          {
            "label": "第二处：更新下一轮增量（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "1\n3\n7\n15\n31\n63\n127\n255\n511\n1023\n2047\n4095\n8191\n16383\n32767\n65535\n131071\n262143\n524287\n1048575\n2097151\n4194303\n8388607\n16777215\n33554431\n67108863\n134217727\n268435455\n536870911\n1073741823"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填a+=n和n*=2。增量依次2、4、8…，使用long long避免范围问题。"
      }
    ]
  },
  "39": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "原课件所指的普通计算机，缺少哪项将无法正常启动？",
        "options": [
          "内存",
          "鼠标",
          "U盘",
          "摄像头"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本课考查内存是启动和执行程序所需部件。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入15，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,n;char ans;cin>>n;ans='0';\n    for(i=1;i<n;i++)\n        if((i%3==0)+(i%5==0)+(i%2==0)==2) ans++;\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "3",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "1到14中，6、10、12恰好能被2、3、5中的两个整除。字符从'0'增加三次得到'3'。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "可可老师说“是明明做的”，明明说“不是我”，美美说“不是我”。恰有一人说真话，判断是谁做的。1代表老师、2代表明明、3代表美美。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    {{0}};\n    for(i=1;i<=3;i++)\n        if((i==2)+(i!=2)+({{1}})==1) break;\n    switch(i){\n        case 1:cout<<\"可可老师老师做的\"<<endl;break;\n        case 2:cout<<\"明明做的\"<<endl;break;\n        case 3:cout<<\"美美做的\"<<endl;break;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明循环变量（分号已给出）"
          },
          {
            "label": "第二处：美美的话为真的条件"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "美美做的"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填int i和i!=3。老师与明明的话恰有一句为真，因此美美的话必须为假。原课件头文件和cout排版错误已修正。"
      }
    ]
  },
  "40": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "原课件所介绍的Intel、AMD，是下面哪类产品的厂商？",
        "options": [
          "显示器",
          "CPU",
          "内存",
          "鼠标"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本课考查CPU厂商。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,x,y,n,ans=0;\n    for(i=50;i<=60;i++){\n        x=i%10;y=i/10;n=x*10+y;\n        if(i+n<100) ans++;\n    }\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "6",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "50、51、52、53、54、60与倒序数之和小于100，共6个。代码由原课件图片还原。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 6,
        "harness": "rps-sequence",
        "prompt": "根据原课件程序，模拟与计算机玩10局石头、剪刀、布，并统计双方赢的局数。1剪刀、2石头、3布；无效输入不计胜负。输入完整程序，可依据下方原程序修改。检查时计算机固定按1、2、3循环出招，用来验证胜负与计数；原程序仍保留随机出招语句。",
        "reference": "#include <iostream>\n#include <ctime>\n#include <cstdlib>\nusing namespace std;\nint main()\n{\n    const int MAX=10;\n    srand(time(0));\n    int m,n,countm,countn;\n    countm=countn=0;\n    for(int i=0;i<MAX;i++){\n        m=rand()%3+1;\n        cout<<\"请你出招\"<<endl;\n        cout<<\"1:剪刀  2: 石头   3布\"<<endl;\n        cin>>n;\n        if(n<1 || n>3)\n            cout<<\"请输入1-3的数，此局无效！ \"<<endl;\n        else {\n            switch(m-n){\n                case -2:\n                case 1:cout<<\"计算机赢! \"<<endl;countm++;break;\n                case 0:cout<<\"平局\"<<endl;break;\n                default:cout<<\"你赢！ \"<<endl;countn++;break;\n            }\n        }\n    }\n    cout<<\"计算机赢： \"<<countm<<endl;\n    cout<<\"你赢： \"<<countn<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++石头剪刀布程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "1 1 1 1 1 1 1 1 1 1",
            "output": "请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n计算机赢! \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n计算机赢! \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n计算机赢! \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n平局\n计算机赢： 3\n你赢： 3"
          },
          {
            "input": "1 2 3 1 2 3 1 2 3 1",
            "output": "请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n请你出招\n1:剪刀  2: 石头   3布\n平局\n计算机赢： 0\n你赢： 0"
          },
          {
            "input": "0 4 1 2 3 1 2 3 1 2",
            "output": "请你出招\n1:剪刀  2: 石头   3布\n请输入1-3的数，此局无效！ \n请你出招\n1:剪刀  2: 石头   3布\n请输入1-3的数，此局无效！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n请你出招\n1:剪刀  2: 石头   3布\n你赢！ \n计算机赢： 0\n你赢： 8"
          }
        ],
        "hint": "m-n为-2或1时计算机赢，0时平局，其余有效情况是你赢。分别增加countm或countn。",
        "explanation": "保留10局循环，并检查双方计数、平局和无效输入。完整程序由原课件两张代码图片还原；固定出招仅用于检查，不要求删掉rand。"
      }
    ]
  }
});
