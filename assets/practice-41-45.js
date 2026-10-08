window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "41": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "16GB的SD卡，大约能存储多少张大小2MB的相片？",
        "options": [
          "4000",
          "8000",
          "1600",
          "16000"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "按十进制容量约8000张；按1024换算约8192张，最接近的选项仍是8000。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i=0;\n    while(i<=8){cout<<i<<\" \";i=i+4;}\n    cout<<i<<endl;\n    return 0;\n}",
        "expected": "0 4 8 12",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "循环中输出0、4、8，退出后还输出i=12。代码由原图片还原。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "求6+12+18+24+…+180的和。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i=6,sum=0;\n    while(i<=180){\n        {{0}};\n        {{1}};\n    }\n    cout<<\"sum=\"<<sum<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：累加当前项（分号已给出）"
          },
          {
            "label": "第二处：更新下一项（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "sum=2790"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填sum+=i和i+=6，共30项，和2790。"
      }
    ]
  },
  "42": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "原课件关于死循环的题目中，哪一项准确给出了“死循环”的定义？（B涉及部分循环检测能力，此处明确按定义作答。）",
        "options": [
          "无法靠自身的控制终止的循环称为死循环",
          "有些编译系统可以检测出死循环",
          "死循环属于语法错误，编译系统能检查各种语法错误，也能检查出死循环",
          "死循环与死锁差不多，死锁可以检测，因此死循环可以检测"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "A是定义。原题B的“检测”表述可能有歧义；识别部分简单循环，不等于能判断所有程序是否结束。死循环也不一定是语法错误。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入5，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i=10,n;cin>>n;\n    while(true){\n        cout<<i;\n        if(i<=n) break;\n        i-=3;\n    }\n    return 0;\n}",
        "expected": "1074",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "依次输出10、7、4；4<=5时break。没有输出分隔符。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "求平均分，以-1表示输入结束；若一开始就输入-1，则不输出平均分。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i=0;float n,pjfen,sum=0.0;\n    cin>>n;\n    while({{0}}){\n        i++;\n        {{1}};\n        cin>>n;\n    }\n    if(i!=0){pjfen=sum/i;cout<<\"平均分： \"<<pjfen;}\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：未到结束标记的条件"
          },
          {
            "label": "第二处：累加当前分数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "90 80 100 -1",
            "output": "平均分： 90"
          },
          {
            "input": "0 100 -1",
            "output": "平均分： 50"
          },
          {
            "input": "-1",
            "output": ""
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填n!=-1和sum+=n。-1不作为分数计入，0分要正常计入。原图片未展示头文件，这里补齐。"
      }
    ]
  },
  "43": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "十进制14转换为二进制是多少？",
        "options": [
          "1001",
          "1110",
          "1011",
          "1100"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "14=8+4+2，所以二进制1110。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "输入2，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int s,n,a;s=0;a=10;cin>>n;\n    while(a>n){s++;a-=2;}\n    cout<<s<<endl;\n    return 0;\n}",
        "expected": "4",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "a依次10、8、6、4、2，前4次满足a>2。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "本次比赛98分时全部比赛平均92分，78分时平均87分。完善程序，求包括本次在内的比赛总次数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int {{0}};\n    x=2;\n    //前x-1次的总分在两种情况下应相等\n    while(92*x-98 != 87*x-78){\n        {{1}};\n    }\n    cout<<x<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明次数变量"
          },
          {
            "label": "第二处：尝试下一次数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "4"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填x和x++。两种总分差20，平均差5，所以总次数4。"
      }
    ]
  },
  "44": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "21和14的最大公约数，用二进制表示是哪一项？",
        "options": [
          "00000101",
          "00000111",
          "00001000",
          "10001110"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "最大公约数7，二进制111，补齐前导零为00000111。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入28 7，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x,y,temp,ans;cin>>x>>y;\n    if(x<y){temp=x;x=y;y=temp;}\n    while(x!=y){\n        x-=y;\n        if(x<y){temp=x;x=y;y=temp;}\n    }\n    ans=x;cout<<ans<<endl;\n    return 0;\n}",
        "expected": "7",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "用减法计算最大公约数，最终x=y=7。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "中班36人、小班30人，按班分组且每组人数相同，求每组最多人数。按原题给定的36和30初始化两班人数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x,y,n,temp;\n    {{0}};\n    if(x>y){temp=x;x=y;y=temp;}\n    n=x;\n    while({{1}}) n--;\n    cout<<\"每组人数最多为： \"<<n<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：给两班人数赋值（末尾分号已给出，可包含多条语句）"
          },
          {
            "label": "第二处：n尚不能同时整除两班人数的条件"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "每组人数最多为： 6"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填x=36;y=30和x%n!=0 || y%n!=0。不能把“同时整除”的否定误写成两个余数都非零。"
      }
    ]
  },
  "45": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 4,
        "prompt": "原课件场景中，通过因特网与他人即时讨论交流，哪个工具最合适？",
        "options": [
          "E-mail",
          "BBS",
          "QQ",
          "博客"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "给定选项中，QQ提供即时通信；其他选项通常用于异步交流。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 4,
        "prompt": "输入8，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,x,s=0;cin>>n;x=n;\n    while(x>=1){if(n%x==0) ++s;--x;}\n    cout<<s<<endl;\n    return 0;\n}",
        "expected": "4",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "8的正因子1、2、4、8，共4个。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 5,
        "prompt": "输入非负整数n，计算2020-1+2-3+4-5+…±n。依据下方原课件程序输入或完善完整C++程序，奇数项减，偶数项加。",
        "reference": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,sum,n;sum=2020;\n    cout<<\"n=\";cin>>n;i=1;\n    while(i<=n){\n        if(i%2==1) sum-=i;\n        else sum+=i;\n        i++;\n    }\n    cout<<sum<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "0",
            "output": "n=2020"
          },
          {
            "input": "1",
            "output": "n=2019"
          },
          {
            "input": "4",
            "output": "n=2022"
          },
          {
            "input": "5",
            "output": "n=2017"
          }
        ],
        "hint": "从i=1开始，i<=n时根据奇偶加减，并记得i++。输出保留原代码的n=提示。",
        "explanation": "原课件图片提供了完整while版本，等价且输出一致的程序也能通过。"
      }
    ]
  }
});
