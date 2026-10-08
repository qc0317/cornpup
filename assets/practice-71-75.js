window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "71": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "“嘀”表示0、“嗒”表示1，“嘀嘀嗒嗒嗒”表示哪项？",
        "options": [
          "10101",
          "01010",
          "10100",
          "00111"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "依次把嘀嘀嗒嗒嗒转换为0、0、1、1、1。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\n    int i;string a[3]={\"comp\",\"uter lan\",\"guage\"};\n    string ans=\"\";\n    for(i=0;i<3;i++) ans=ans+a[i];\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "computer language",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "三个字符串依次连接，其中第二个字符串含一个空格。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "输入0–9中的一个数，输出数字对应的莫尔斯电码。原程序用字符0代表点、字符1代表横线；输入不合法时重新读取。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\n    int i,n;string a[10];\n    a[0]=\"11111\";\n    a[1]=\"01111\";\n    a[2]=\"00111\";\n    a[3]=\"00011\";\n    a[4]=\"00001\";\n    a[5]=\"00000\";\n    a[6]=\"10000\";\n    a[7]=\"11000\";\n    a[8]=\"11100\";\n    a[9]=\"11110\";\n    cout<<\"请输入0-9中的某个数： \";\n    do{\n        {{0}};\n    }while(n<0 || n>9);\n    for(i=0;a[n][i]!='\\0';i++){\n        if(a[n][i]{{1}}) cout<<\".\";\n        else cout<<\"-\";\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取数字（分号已给出）"
          },
          {
            "label": "第二处：补全判断当前字符是0的比较"
          }
        ],
        "tests": [
          {
            "input": "0",
            "output": "请输入0-9中的某个数： -----"
          },
          {
            "input": "1",
            "output": "请输入0-9中的某个数： .----"
          },
          {
            "input": "5",
            "output": "请输入0-9中的某个数： ....."
          },
          {
            "input": "7",
            "output": "请输入0-9中的某个数： --..."
          },
          {
            "input": "9",
            "output": "请输入0-9中的某个数： ----."
          },
          {
            "input": "10 -1 3",
            "output": "请输入0-9中的某个数： ...--"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n、=='0'。这里的0是字符，不是数值0。"
      }
    ]
  },
  "72": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 9,
        "prompt": "解释程序和编译程序的区别是哪项？",
        "options": [
          "解释程序是应用软件，编译程序是系统软件",
          "解释程序生成目标程序，编译程序逐条解释执行源语句",
          "编译程序将源程序翻译为目标程序，解释程序逐条解释执行源语句",
          "解释程序解释执行汇编语言，编译程序解释执行源程序"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "按原课件概念，编译先翻译为目标程序，解释逐条执行。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 10,
        "prompt": "输入5，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nvoid fun(int n)\n{\n    for(int i=1;i<n;i++) cout<<i;\n}\nint main()\n{\n    int x;cin>>x;fun(x);\n    return 0;\n}",
        "expected": "1234",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "函数输出1至n-1，数字之间没有空格。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 11,
        "prompt": "输入行数及每行星号个数，调用自定义函数输出图形。如3 4 7 12表示3行，分别输出4、7、12个星号。保留原程序提示文字；“输入第i个行数”处实际读取本行星号个数。",
        "code": "#include <iostream>\nusing namespace std;\nvoid show(int geshu)\n{\n    int i;\n    for(i=1;i<=geshu;i++) cout<<\"*\";\n    cout<<endl;\n}\nint main()\n{\n    int i,hangshu,a[101];\n    cout<<\"输入行数： \";\n    {{0}};\n    for(i=1;i<=hangshu;i++){\n        cout<<\"输入第\"<<i<<\"个行数： \";\n        cin>>a[i];\n    }\n    for(i=1;i<=hangshu;i++) {{1}};\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读入总行数（分号已给出）"
          },
          {
            "label": "第二处：调用函数输出当前行（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "3 4 7 12",
            "output": "输入行数： 输入第1个行数： 输入第2个行数： 输入第3个行数： ****\n*******\n************\n"
          },
          {
            "input": "1 1",
            "output": "输入行数： 输入第1个行数： *\n"
          },
          {
            "input": "3 0 3 0",
            "output": "输入行数： 输入第1个行数： 输入第2个行数： 输入第3个行数： \n***\n\n"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>hangshu、show(a[i])。函数每次负责输出一行。",
        "figure": {
          "type": "text",
          "text": "****\n*******\n************"
        }
      }
    ]
  },
  "73": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "算法与程序的关系是哪项？",
        "options": [
          "算法决定程序，是程序设计的核心",
          "算法是对程序的描述",
          "算法与程序无关系",
          "程序决定算法，是算法设计的核心"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "程序实现解决问题的算法，算法是程序设计的核心。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入4，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint fun(int a)\n{\n    int sum=1;\n    for(int i=1;i<a;i++) sum=sum*a;\n    return sum;\n}\nint main()\n{\n    int n,ans;cin>>n;ans=fun(n);cout<<ans<<endl;\n    return 0;\n}",
        "expected": "64",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "输入4，循环乘4共3次，结果4³=64。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "自定义fun(a)统计自然数a的约数个数，输出1–100中恰好有3个约数的数。",
        "code": "#include <iostream>\nusing namespace std;\nint fun(int a)\n{\n    int num=0;\n    for(int i=1;i<=a;i++)\n        if({{0}}) num++;\n    return num;\n}\nint main()\n{\n    int a;\n    for(a=1;a<=100;a++)\n        if({{1}}) cout<<a<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：i为a的约数的条件"
          },
          {
            "label": "第二处：a恰好有3个约数的条件"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "4\n9\n25\n49"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填a%i==0、fun(a)==3。这些数是质数的平方。"
      }
    ]
  },
  "74": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "x、y、z依次入栈，操作为入栈、入栈、出栈、入栈、出栈、出栈。x是第几个出栈的？",
        "options": [
          "1",
          "2",
          "3",
          "4"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "先出y，再出z，最后出x，体现后进先出。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nbool wanshu(int n)\n{\n    int sum=0;\n    for(int i=1;i<n;i++) if(n%i==0) sum+=i;\n    return (sum==n);\n}\nint main()\n{\n    int ans=0;\n    for(int i=1;i<8;i++) if(wanshu(i)) ans++;\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "1",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "1至7中只有6等于其真因子1、2、3之和。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 7,
        "prompt": "用函数判断回文数，输出100–1000范围中的所有回文数及总数。按原程序每个数占6列、每10个数换行，保留总数提示。",
        "reference": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nbool huiwen(int m)\n{\n    int temp=m,n=0;\n    while(temp){n=n*10+temp%10;temp/=10;}\n    return (m==n);\n}\nint main()\n{\n    int num=0;\n    for(int i=100;i<=1000;i++)\n        if(huiwen(i)){\n            cout<<setw(6)<<i;num++;\n            if(!(num%10)) cout<<endl;\n        }\n    cout<<\"回文个数： \"<<num<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "   101   111   121   131   141   151   161   171   181   191\n   202   212   222   232   242   252   262   272   282   292\n   303   313   323   333   343   353   363   373   383   393\n   404   414   424   434   444   454   464   474   484   494\n   505   515   525   535   545   555   565   575   585   595\n   606   616   626   636   646   656   666   676   686   696\n   707   717   727   737   747   757   767   777   787   797\n   808   818   828   838   848   858   868   878   888   898\n   909   919   929   939   949   959   969   979   989   999\n回文个数： 90\n"
          }
        ],
        "hint": "逆序各位数字后比较原数与逆序数；注意setw(6)和每10个换行。",
        "explanation": "原图片提供完整函数与循环，这里补齐头文件。共有90个三位回文数；1000不为回文。"
      }
    ]
  },
  "75": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "网址www.tsinghua.edu.cn的国家域名cn表示哪个国家？",
        "options": [
          "中国",
          "法国",
          "英国",
          "美国"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "cn是中国的国家域名标识。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入5，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint fun(int n)\n{\n    int i,sum=0;\n    for(i=1;i<=n;i++) sum+=i;\n    return sum;\n}\nint main()\n{\n    int i,n,ans=0;cin>>n;\n    for(i=1;i<n;i++) ans+=fun(i);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "20",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "输入5时，累加fun(1)、fun(2)、fun(3)、fun(4)：1+3+6+10=20。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 7,
        "prompt": "三位超级素数的前1位、前2位和前3位都为素数。利用函数输出全部三位超级素数，每行一个。",
        "reference": "#include <iostream>\nusing namespace std;\nbool prime(int n)\n{\n    int i;\n    if(n==1) return false;\n    for(i=2;i<=n-1;i++) if(n%i==0) return false;\n    return true;\n}\nbool superprime(int n)\n{\n    while(n>0){\n        if(prime(n)) n=n/10;\n        else return false;\n    }\n    return true;\n}\nint main()\n{\n    int i;\n    for(i=100;i<=999;i++)\n        if(superprime(i)) cout<<i<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "233\n239\n293\n311\n313\n317\n373\n379\n593\n599\n719\n733\n739\n797"
          }
        ],
        "hint": "每次检查当前前缀是否为素数，再除以10去掉最后一位。",
        "explanation": "保留原图片的prime与superprime函数逻辑；必须检查全部三个前缀，不能只检查三位数本身。"
      }
    ]
  }
});
