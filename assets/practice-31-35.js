window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "31": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "显示器的彩色由红色、蓝色和哪种色光混合？",
        "options": [
          "紫色",
          "橙色",
          "黑色",
          "绿色"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "RGB三原色是红、绿、蓝。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入1 10，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int m,n,i; long long ans=0;\n    cin>>m>>n;\n    for(i=m;i<=n;i=i+2) ans+=i;\n    cout<<ans<<\" \";cout<<i;\n    return 0;\n}",
        "expected": "25 11",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "累加1、3、5、7、9得到25，退出时i=11。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "假设年收益率20%，投资10万元。完善程序，按原课件逐年输出第1到20年的投资额（单位万元）。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i;float s=10.0;\n    for(i=1;i<=20;{{0}}){\n        {{1}};\n        cout<<i<<\"  \"<<s<<endl;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：年份更新"
          },
          {
            "label": "第二处：计算下一年的金额（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "1  12\n2  14.4\n3  17.28\n4  20.736\n5  24.8832\n6  29.8598\n7  35.8318\n8  42.9982\n9  51.5978\n10  61.9174\n11  74.3008\n12  89.161\n13  106.993\n14  128.392\n15  154.07\n16  184.884\n17  221.861\n18  266.233\n19  319.48\n20  383.376"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i++和s=s*1.2。金额使用原程序float和默认输出格式；这是原题的假设计算。"
      }
    ]
  },
  "32": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "断电后会丢失数据的存储器是哪一项？",
        "options": [
          "RAM",
          "U盘",
          "硬盘",
          "光盘"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "普通RAM是易失存储器。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    for(int i=7;i>=1;i--){\n        if(i%2==0) continue;\n        cout<<i;\n        if(i==1) continue;\n        cout<<',';\n    }\n    return 0;\n}",
        "expected": "7,5,3,1",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "偶数被跳过；1输出后又continue，所以末尾没有逗号。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "按原程序从2开始，输出100以内的所有正偶数，包含100。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i;\n    for(i=2;i<=100;{{0}}){\n        cout<<{{1}}<<endl;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：循环更新"
          },
          {
            "label": "第二处：输出变量"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40\n42\n44\n46\n48\n50\n52\n54\n56\n58\n60\n62\n64\n66\n68\n70\n72\n74\n76\n78\n80\n82\n84\n86\n88\n90\n92\n94\n96\n98\n100"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i+=2和i。"
      }
    ]
  },
  "33": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "字符n初始为'a'，表达式n+3的值是什么？（采用ASCII编码）",
        "options": [
          "65",
          "68",
          "'a'",
          "100"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "字符参与加法会提升为整数，97+3=100。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x,y;char i,ans;\n    for(i='a';i<'f';i++){\n        x=i-'a'+1;\n        if(x%2==1) y=i+1;else y=i-1;\n        ans=y;cout<<ans;\n    }\n    return 0;\n}",
        "expected": "badcf",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "a→b、b→a、c→d、d→c、e→f，依次连接输出。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "按字典顺序输出大小写字母对照表，每对先大写后小写。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n;char i,j;\n    n='a'-'A';\n    for(i='A';{{0}};i++){\n        cout<<i;j=i+n;\n        {{1}};\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：包含Z的循环条件"
          },
          {
            "label": "第二处：输出小写字母（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i<='Z'和cout<<j。原课件没有换行，字母对连续输出。"
      }
    ]
  },
  "34": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "冯·诺依曼体系结构的核心内容是什么？",
        "options": [
          "采用键盘输入",
          "采用半导体器件",
          "采用存储程序和程序控制原理",
          "采用开关电路"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本课考查存储程序和程序控制。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    long long i,ans=20;\n    i=2;\n    for(;i<ans;){ans-=i;i+=3;}\n    cout<<\"i=\"<<i<<\" ans=\"<<ans<<endl;\n    return 0;\n}",
        "expected": "i=11 ans=5",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "(i,ans)依次(2,20)→(5,18)→(8,13)→(11,5)，退出循环。代码由原课件图片逐字还原。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输入n个数，输出最小的数，n为正整数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    float min,x;int i,n;\n    cout<<\"n=\";cin>>n;\n    cout<<\"请输入第1个数： \";cin>>x;min=x;\n    for(i=2;{{0}};i++){\n        cout<<\"请输入第\"<<i<<\"个数:\";cin>>x;\n        if({{1}}) min=x;\n    }\n    cout<<\"最小的数： \"<<min;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读完n个数的条件"
          },
          {
            "label": "第二处：更新最小值的条件"
          }
        ],
        "tests": [
          {
            "input": "3 7 -2 5",
            "output": "n=请输入第1个数： 请输入第2个数:请输入第3个数:最小的数： -2"
          },
          {
            "input": "1 8",
            "output": "n=请输入第1个数： 最小的数： 8"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i<=n和x<min。代码和空格由原课件图片还原，包含n=1的边界。"
      }
    ]
  },
  "35": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "Pentium、Core、赛扬等在本课中指的是什么？",
        "options": [
          "显示器型号",
          "硬盘型号",
          "CPU型号",
          "生产厂家名称"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "这些是处理器系列名称。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,p,ans=0;p=1;\n    for(i=1;i<400;i+=3){\n        p*=i;ans+=p;\n        if(ans>=25) break;\n    }\n    cout<<\"ans=\"<<ans<<endl;\n    return 0;\n}",
        "expected": "ans=33",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "p依次1、4、28，ans依次1、5、33，达到25后break。代码由原课件图片还原。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输入一个整数，判断是否素数。原图片的count==0判断会误把1当素数，这里补充n>=2边界条件；原来的两处填空保留。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int count=0;long long i,n;\n    {{0}};\n    for(i=2;i<n;i++)\n        if({{1}}) count++;\n    if(n>=2 && count==0) cout<<\"素数\";\n    else cout<<\"不是素数\";\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取整数（分号已给出）"
          },
          {
            "label": "第二处：发现整除因子的条件"
          }
        ],
        "tests": [
          {
            "input": "2",
            "output": "素数"
          },
          {
            "input": "13",
            "output": "素数"
          },
          {
            "input": "49",
            "output": "不是素数"
          },
          {
            "input": "1",
            "output": "不是素数"
          },
          {
            "input": "0",
            "output": "不是素数"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n和n%i==0。素数必须大于1，且只有1与自身两个正因子。"
      }
    ]
  }
});
