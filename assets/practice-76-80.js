window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "76": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "下列因特网功能中，错误的是哪项？",
        "options": [
          "远程教育",
          "穿越时空",
          "购物",
          "查询天气"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "远程教育、购物和查询天气属于网络应用。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入1 2 3 -4 5，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint fun(int b[])\n{\n    int max,sum;sum=max=b[0];\n    for(int i=1;i<5;i++){sum+=b[i];if(sum>max) max=sum;}\n    return max;\n}\nint main()\n{\n    int a[5],ans;for(int i=0;i<5;i++) cin>>a[i];\n    ans=fun(a);cout<<ans<<endl;\n    return 0;\n}",
        "expected": "7",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "前缀和依次1、3、6、2、7，最大为7。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "输入5位同学的跳绳成绩，按输入顺序输出成绩和名次。排名等于比自己成绩高的人数加1，同分名次相同。",
        "code": "#include <iostream>\nusing namespace std;\nint max(int x,int a[])\n{\n    int num=1;\n    for(int j=0;j<5;j++)\n        if({{0}}) num++;\n    return num;\n}\nint main()\n{\n    int a[5],i;for(i=0;i<5;i++) cin>>a[i];\n    for(i=0;i<5;i++) cout<<a[i]<<\"----\"<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：他人成绩比x高的条件"
          },
          {
            "label": "第二处：调用函数取得当前成绩名次"
          }
        ],
        "tests": [
          {
            "input": "126 80 98 158 204",
            "output": "126----3\n80----5\n98----4\n158----2\n204----1"
          },
          {
            "input": "10 10 8 8 5",
            "output": "10----1\n10----1\n8----3\n8----3\n5----5"
          },
          {
            "input": "0 1 2 3 4",
            "output": "0----5\n1----4\n2----3\n3----2\n4----1"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填a[j]>x、max(a[i],a)。不要按输入顺序直接分配名次。"
      }
    ]
  },
  "77": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "512个有序整数采用顺序查找，最坏情况下需要查找多少次？",
        "options": [
          "128",
          "64",
          "512",
          "10"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "顺序查找最坏需检查所有512项；有序不意味着自动改为二分查找。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 9,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint search(int b[],int n)\n{\n    int sum=0;\n    for(int i=0;i<4;i++){\n        if(b[i]<n) continue;\n        if(b[i]==n) break;\n        sum+=b[i];\n    }\n    return sum;\n}\nint main()\n{\n    int a1[4]={8,2,-3,-4};int a2[4]={90,-1,10,100};\n    int ans=0;ans+=search(a1,0);ans+=search(a2,10);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "100",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "第一组累加8和2；第二组累加90，遇10停止，100不再处理。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 10,
        "prompt": "输入姓名，在原名单nike、make、mani、boli、glair中查找。找到输出姓名加“是小播音员”，否则输出姓名加“不是小播音员”。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nconst int MAX=5;\nbool search(string b[],string key)\n{\n    int i;bool f=false;\n    for(i=0;i<MAX;i++)\n        if(key==b[i]){f=true;break;}\n    return {{0}};\n}\nint main()\n{\n    string name;string a[MAX]={\"nike\",\"make\",\"mani\",\"boli\",\"glair\"};\n    cin>>name;\n    if(search(a,name)) cout<<name<<\"是小播音员\";\n    else cout<<name<<\"不是小播音员\";\n    return 0;\n}",
        "fields": [
          {
            "label": "返回值：是否查找到姓名"
          }
        ],
        "tests": [
          {
            "input": "nike",
            "output": "nike是小播音员"
          },
          {
            "input": "glair",
            "output": "glair是小播音员"
          },
          {
            "input": "Max",
            "output": "Max不是小播音员"
          },
          {
            "input": "mani",
            "output": "mani是小播音员"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "填写f，找到后置true并结束循环，没有找到则保持false。"
      }
    ]
  },
  "78": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "函数递归调用通过哪种结构实现？",
        "options": [
          "线性表",
          "链表",
          "队列",
          "栈"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "调用与返回按后进先出的栈顺序管理。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint fun(int n)\n{\n    if(n==1) return 0;\n    else return fun(n-1)+2;\n}\nint main()\n{\n    cout<<fun(10)<<endl;\n    return 0;\n}",
        "expected": "18",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "fun(1)=0，每增加1加2，fun(10)=18。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "第1位投进0球，第2、3、4位分别比前一位多5球。用递归toulan(n)计算，输出第4位小风投进的球数。",
        "code": "#include <iostream>\nusing namespace std;\nint toulan(int n)\n{\n    int t;\n    if(n!=1) {{0}};\n    else {{1}};\n    return t;\n}\nint main()\n{\n    cout<<toulan(4)<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：由前一位得到本人的球数（分号已给出）"
          },
          {
            "label": "第二处：第1位的球数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "15"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填t=toulan(n-1)+5、t=0。递归必须有第1位的终止条件。"
      }
    ]
  },
  "79": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 4,
        "prompt": "队列按88、79、65、10、100排列，88第一个出队，第四个出队的是？",
        "options": [
          "79",
          "65",
          "10",
          "100"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "队列先进先出，第四项是10。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint fun(int n);\nint main()\n{\n    cout<<fun(fun(4))<<endl;\n    return 0;\n}\nint fun(int n)\n{\n    if(n==0 || n==1) return 1;\n    else return fun(n-1)+fun(n-2);\n}",
        "expected": "8",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "fun(0)=fun(1)=1，fun(4)=5，再计算fun(5)=8。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输入自然数，以原递归程序逐位输出倒序。123输出321；原函数逐字符输出，因此1200输出0021，保留开头的0。",
        "code": "#include <iostream>\nusing namespace std;\nvoid fun(int n);\nint main()\n{\n    int n;cin>>n;\n    {{0}};\n    return 0;\n}\nvoid fun(int n)\n{\n    if(n<10) cout<<n;\n    else{\n        cout<<n%10;\n        {{1}};\n    }\n}",
        "fields": [
          {
            "label": "第一处：调用倒序输出函数（分号已给出）"
          },
          {
            "label": "第二处：继续输出剩余数字（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "123",
            "output": "321"
          },
          {
            "input": "1200",
            "output": "0021"
          },
          {
            "input": "7",
            "output": "7"
          },
          {
            "input": "0",
            "output": "0"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填fun(n)、fun(n/10)。先输出个位，然后递归处理除10后的剩余数。"
      }
    ]
  },
  "80": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "微软发布、面向对象并运行于.NET Framework上的高级语言是哪项？",
        "options": [
          "Java",
          "C#",
          "Pascal",
          "Python"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "原题描述对应C#。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入36 6 18，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint gcd(int a,int b)\n{\n    if(a==b) return a;\n    else if(a>b) return gcd(a-b,b);\n    else return gcd(a,b-a);\n}\nint main()\n{\n    int x,y,z;cin>>x>>y>>z;\n    x=gcd(x,y);x=gcd(x,z);cout<<x<<endl;\n    return 0;\n}",
        "expected": "6",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "先求36与6的最大公约数6，再求6与18的最大公约数仍为6。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 7,
        "prompt": "输入两个不同时为0的自然数，用递归辗转相除法输出最大公约数。保留原程序的a,b=和结果提示。",
        "reference": "#include <iostream>\nusing namespace std;\nint gcd(int a,int b)\n{\n    if(b==0) return a;\n    else return gcd(b,a%b);\n}\nint main()\n{\n    int a,b;cout<<\"a,b=\";cin>>a>>b;\n    cout<<\"最大公约数： \"<<gcd(a,b)<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "36 30",
            "output": "a,b=最大公约数： 6"
          },
          {
            "input": "17 13",
            "output": "a,b=最大公约数： 1"
          },
          {
            "input": "0 42",
            "output": "a,b=最大公约数： 42"
          },
          {
            "input": "42 0",
            "output": "a,b=最大公约数： 42"
          },
          {
            "input": "81 27",
            "output": "a,b=最大公约数： 27"
          }
        ],
        "hint": "余数为0时返回a，否则递归调用gcd(b,a%b)。",
        "explanation": "原图片提供完整递归函数，零作为第二个数是递归终止条件。"
      }
    ]
  }
});
