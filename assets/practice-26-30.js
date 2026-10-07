window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "26": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "计算机集成电路制作的主要原材料，可从沙子中提炼的物质是什么？",
        "options": [
          "铜",
          "硅",
          "锗",
          "铝"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本课考查硅。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "输入5 3，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int m,n,ans; cin>>m>>n;\n    switch(n){\n        case 0:ans=1;break;\n        case 1:ans=m;break;\n        case 2:ans=m*m;break;\n        case 3:ans=m*m*m;break;\n        case 4:ans=m*m*m*m;break;\n        default:ans=-1;break;\n    }\n    if(ans==-1) cout<<\"???\"<<endl;\n    else cout<<ans<<endl;\n    return 0;\n}",
        "expected": "125",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "n为3，执行m*m*m，5³=125。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "选择题号1、2、3，输出对应的诗词填空题。完善switch程序。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n;\n    cout<<\"诗词大赛\"<<endl;\n    cout<<\"请选题（1,2,3）：\";\n    {{0}};\n    switch(n){\n        case 1:cout<<\"(    )带雨晚来急，野渡无人舟自横。\";break;\n        case 2:cout<<\"忽如一夜（  ）来，千树万树梨花开。\";break;\n        {{1}}:cout<<\"（  ）满园关不住，一枝红杏出墙来。\";break;\n        default:cout<<\"输入不正确.\";break;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取题号（分号已给出）"
          },
          {
            "label": "第二处：3号题分支标签（冒号已给出）"
          }
        ],
        "tests": [
          {
            "input": "3",
            "output": "诗词大赛\n请选题（1,2,3）：（  ）满园关不住，一枝红杏出墙来。"
          },
          {
            "input": "1",
            "output": "诗词大赛\n请选题（1,2,3）：(    )带雨晚来急，野渡无人舟自横。"
          },
          {
            "input": "9",
            "output": "诗词大赛\n请选题（1,2,3）：输入不正确."
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n和case 3。"
      }
    ]
  },
  "27": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "Windows是一种什么系统？",
        "options": [
          "字处理系统",
          "操作系统",
          "数据库系统",
          "图文处理系统"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "Windows是操作系统。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入2018 8 8，写出全部程序输出（不含输入回显）。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int day,month,year,sum,leap;\n    cout<<\"请输入年、月、日：\"; cin>>year>>month>>day;\n    switch(month){\n        case 1:sum=0;break;\n        case 2:sum=31;break;\n        case 3:sum=59;break;\n        case 4:sum=90;break;\n        case 5:sum=120;break;\n        case 6:sum=151;break;\n        case 7:sum=181;break;\n        case 8:sum=212;break;\n        case 9:sum=243;break;\n        case 10:sum=273;break;\n        case 11:sum=304;break;\n        case 12:sum=334;break;\n        default:cout<<\"输入有误\";break;\n    }\n    sum+=day;\n    if(year%400==0||(year%4==0&&year%100!=0)) leap=1; else leap=0;\n    if(leap==1&&month>2) sum++;\n    cout<<sum<<endl;\n    return 0;\n}",
        "expected": "请输入年、月、日：220",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "2018是平年。8月前有212天，加8得到220。原课件展示程序片段，这里补齐头文件和main。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输入两个数和四则运算符，完善简单计算器；除数为0时提示错误。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    float x,y,ans; char f;\n    cout<<\"请输入两个数：\"; cin>>x>>y;\n    cout<<\"请输入一个符号(+-*/):\"; cin>>f;\n    ans=0;\n    switch({{0}}){\n        case '+':ans=x+y;break;\n        case '-':ans=x-y;break;\n        case '*':ans=x*y;break;\n        case '/':if({{1}}) ans=x/y;\n                  else cout<<\"除数不能为0\"<<endl;\n                  break;\n    }\n    if(f!='/'||y!=0) cout<<ans<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：switch判断的变量"
          },
          {
            "label": "第二处：除法可以执行的条件"
          }
        ],
        "tests": [
          {
            "input": "8 2 /",
            "output": "请输入两个数：请输入一个符号(+-*/):4"
          },
          {
            "input": "8 0 /",
            "output": "请输入两个数：请输入一个符号(+-*/):除数不能为0"
          },
          {
            "input": "5 3 +",
            "output": "请输入两个数：请输入一个符号(+-*/):8"
          },
          {
            "input": "5 3 -",
            "output": "请输入两个数：请输入一个符号(+-*/):2"
          },
          {
            "input": "5 3 *",
            "output": "请输入两个数：请输入一个符号(+-*/):15"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填f和y!=0。"
      }
    ]
  },
  "28": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "i初始为0，哪条语句可使i在1、0两个值间交替？",
        "options": [
          "i=i+1",
          "i=1-i",
          "i=-i",
          "i=i-1"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "1-0=1，1-1=0。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i;\n    for(i=1;i<=5;i++){cout<<'*';}\n    cout<<i<<endl;\n    return 0;\n}",
        "expected": "*****6",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "循环输出5个星号，退出时i已经为6。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "完善程序，逐行输出1到100的所有整数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i;\n    for(i=1;{{0}};{{1}})\n        cout<<i<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：循环继续条件"
          },
          {
            "label": "第二处：循环变量更新"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i<=100和i++。注意包含100，不能少一项。"
      }
    ]
  },
  "29": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "结构化程序设计的三种基本逻辑结构是什么？",
        "options": [
          "顺序、选择、循环",
          "选择、嵌套、循环",
          "顺序、循环、模块",
          "顺序、递归、循环"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "三种基本结构是顺序、选择和循环。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入5，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,n; cin>>n;\n    for(i=n;i>1;i--) cout<<i;\n    return 0;\n}",
        "expected": "5432",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "循环从5到2，条件i>1不包含1；没有输出空格。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "全班43人，老师报2到10的数，分别计算分组后剩余几人表演节目。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,n;\n    for({{0}};i<=10;i++){\n        n=43%i;\n        cout<<i<<\"  \"<<{{1}}endl;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：从2开始初始化"
          },
          {
            "label": "第二处：输出余数并连接endl（需含末尾<<）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "2  1\n3  1\n4  3\n5  3\n6  1\n7  1\n8  3\n9  7\n10  3"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i=2和n<<。每行两数间保留原代码的两个空格。"
      }
    ]
  },
  "30": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "键盘的Shift键在原课件中称为什么？",
        "options": [
          "退格键",
          "上档键",
          "空格键",
          "键盘类型"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "Shift是上档键。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,sum=0;\n    for(i=1;i<=5;i++) sum+=i*i;\n    cout<<sum<<endl;\n    return 0;\n}",
        "expected": "55",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "累加1²+2²+3²+4²+5²=55。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "求1×2+2×3+…+99×100+100×101的和。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int sum,i;\n    {{0}}\n    for(i=1;i<=100;i++){\n        {{1}};\n    }\n    cout<<sum<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：初始化累加器的完整语句"
          },
          {
            "label": "第二处：加入本轮乘积（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "343400"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填sum=0;和sum+=i*(i+1)。共100项，总和343400。"
      }
    ]
  }
});
