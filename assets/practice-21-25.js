window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "21": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 10,
        "prompt": "下列关于算法的叙述，哪一项不正确？",
        "options": [
          "每一步必须没有歧义",
          "算法必须有输入",
          "同一问题可能存在多种算法",
          "同一算法可以用多种形式描述"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "算法可以没有输入，例如直接输出固定信息。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 10,
        "prompt": "输入100 10 200，写出全部程序输出，不含输入回显。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,c,max;\n    cout<<\"a,b,c=\";\n    cin>>a>>b>>c;\n    if(a>b) max=a; else max=b;\n    if(c>max) max=c;\n    cout<<\"max=\"<<max<<endl;\n    return 0;\n}",
        "expected": "a,b,c=max=200",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "先比较100与10，再与200比较，最大值200。输入提示也属于输出。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 11,
        "prompt": "输入4个数，输出最大的数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    float a,b,c,d,max;\n    cout<<\"a,b,c,d=\";\n    cin>>a>>b>>c>>d;\n    {{0}};\n    if(b>max) max=b;\n    if({{1}}) max=c;\n    if(d>max) max=d;\n    cout<<\"max=\"<<max<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：初始化最大值（分号已给出）"
          },
          {
            "label": "第二处：比较第三个数"
          }
        ],
        "tests": [
          {
            "input": "1 2 9 4",
            "output": "a,b,c,d=max=9"
          },
          {
            "input": "-2 -8 -3 -4",
            "output": "a,b,c,d=max=-2"
          },
          {
            "input": "5 5 5 5",
            "output": "a,b,c,d=max=5"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填max=a和c>max。不能简单把max初始化为0，否则全负数时出错。"
      }
    ]
  },
  "22": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "计算机突然停电，下面哪一项的信息不会丢失？",
        "options": [
          "ROM和RAM",
          "CPU",
          "ROM",
          "RAM"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "ROM中的内容不因断电消失，普通RAM是易失存储器。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入3，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x,y;\n    y=0; cin>>x;\n    if(x<0) y=x;\n    else { y=x*x; y+=(x+1)*(x+1); }\n    cout<<y;\n    return 0;\n}",
        "expected": "25",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "输入3执行else，y=3²+4²=25。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 8,
        "prompt": "输入4个字母，按字典顺序从小到大输出。原课件给出了比较交换的思路，请编写完整程序。字母均为小写，可重复。",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "d c b a",
            "output": "abcd"
          },
          {
            "input": "a c a b",
            "output": "aabc"
          },
          {
            "input": "z a m b",
            "output": "abmz"
          }
        ],
        "hint": "先让第1个字母依次和其余字母比较交换，再确定第2、第3个位置。输出字母之间不加空格。",
        "explanation": "比较交换依次确定最小、第二小、第三小的字母；等价的正确排序程序也能通过。"
      }
    ]
  },
  "23": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 9,
        "prompt": "一个字节（Byte）由几个二进制位组成？",
        "options": [
          "8",
          "4",
          "2",
          "16"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本课采用8位一个字节的约定。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 9,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\n#include <ctime>\n#include <cstdlib>\nusing namespace std;\nint main()\n{\n    int x;\n    srand(time(0));\n    x=rand()%10;\n    if(x<10) x=10;\n    if(x>10) x--;\n    if(x!=10) x--;\n    cout<<x;\n    return 0;\n}",
        "expected": "10",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "rand()%10在0到9之间，所以第一条if总把x改为10，后两条条件都不满足。原课件#inlclude已改为#include。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 10,
        "checker": "random-addition",
        "prompt": "完善程序：随机产生两个两位数，输出加法题，输入答案并判断对错。检查器会读取你生成的题目，分别提交正确和错误答案；不用猜随机数。",
        "code": "#include <iostream>\n#include <ctime>\n#include <cstdlib>\nusing namespace std;\nint main()\n{\n    int n,a,b;\n    srand(time(0));\n    a={{0}};\n    b={{1}};\n    cout<<a<<'+'<<b<<'=';\n    cin>>n;\n    if({{2}}) cout<<\"对\";\n    else cout<<\"错\";\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：随机生成第一个两位数"
          },
          {
            "label": "第二处：随机生成第二个两位数"
          },
          {
            "label": "第三处：检查答案是否正确"
          }
        ],
        "tests": [
          {
            "input": {
              "strategy": "addition-prompt",
              "correct": true
            }
          },
          {
            "input": {
              "strategy": "addition-prompt",
              "correct": false
            }
          },
          {
            "input": {
              "strategy": "addition-prompt",
              "correct": true
            }
          }
        ],
        "hint": "两位数范围是10到99；rand()%90+10覆盖这个范围。再比较输入的n与两个数之和。",
        "explanation": "前两处可填rand()%90+10，第三处可填n==a+b。原课件头文件拼写已修正。"
      }
    ]
  },
  "24": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "下面哪一项是字符型数据？",
        "options": [
          "a",
          "'3'",
          "\"good\"",
          "3"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "单引号内一个字符的字面量是字符型。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入10，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x; cin>>x;\n    if(x==10) x++; else x--;\n    if(x>10) x++; else x--;\n    if(x<10) x++; else x--;\n    if(x!=10) x++; else x--;\n    cout<<\"x=\"<<x<<endl;\n    return 0;\n}",
        "expected": "x=12",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "x依次变化10→11→12→11→12。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "购物金额前50元按原价，50至150元的超出部分打9折，超过150元的部分打8折。完善分段计费程序。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    float n,m;\n    cout<<\"请输入消费金额：\";\n    {{0}};\n    if(n<50) m=n;\n    else if(n<=150) {{1}};\n    else {{2}};\n    cout<<m;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：输入消费金额（分号已给出）"
          },
          {
            "label": "第二处：50至150元的计费（分号已给出）"
          },
          {
            "label": "第三处：超过150元的计费（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "40",
            "output": "请输入消费金额：40"
          },
          {
            "input": "100",
            "output": "请输入消费金额：95"
          },
          {
            "input": "200",
            "output": "请输入消费金额：180"
          },
          {
            "input": "150",
            "output": "请输入消费金额：140"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n、m=50+(n-50)*0.9、m=50+100*0.9+(n-150)*0.8。原课件中文引号改为英文引号。"
      }
    ]
  },
  "25": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "原课件所指全球第一枚商用微处理器CPU，由下面哪家公司制造？",
        "options": [
          "腾讯",
          "英特尔",
          "威盛",
          "AMD"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "原课件所指的是英特尔4004商用微处理器。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入10 5 1，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,c; cin>>a>>b>>c;\n    if(b!=0)\n        if(a/b>c) cout<<a<<'/'<<b<<'-'<<c<<'='<<a/b-c<<endl;\n        else cout<<c<<'-'<<a<<'/'<<b<<'='<<c-a/b<<endl;\n    return 0;\n}",
        "expected": "10/5-1=1",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "10/5=2>1，执行第一条输出。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "洗衣机代码E1排水故障、E2未关好门、E4进水异常、E8超过报警水位。完善查询程序，兼容大小写。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\n    string n;\n    cout<<\"海尔洗衣机故障代码查询系统：\"<<endl;\n    cout<<\"请输入代码：\";\n    {{0}};\n    if(n==\"e1\" || n==\"E1\") cout<<\"排水故障\"<<endl;\n    else if({{1}}) cout<<\"未关好门\"<<endl;\n    else if(n==\"e4\" || n==\"E4\") cout<<\"进水异常\"<<endl;\n    else if(n==\"e8\" || n==\"E8\") cout<<\"超过报警水位\"<<endl;\n    else cout<<\"未查询到此错误代码，请联系当地经销商\"<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取代码（分号已给出）"
          },
          {
            "label": "第二处：判断E2或e2"
          }
        ],
        "tests": [
          {
            "input": "e2",
            "output": "海尔洗衣机故障代码查询系统：\n请输入代码：未关好门"
          },
          {
            "input": "E2",
            "output": "海尔洗衣机故障代码查询系统：\n请输入代码：未关好门"
          },
          {
            "input": "E1",
            "output": "海尔洗衣机故障代码查询系统：\n请输入代码：排水故障"
          },
          {
            "input": "e8",
            "output": "海尔洗衣机故障代码查询系统：\n请输入代码：超过报警水位"
          },
          {
            "input": "E9",
            "output": "海尔洗衣机故障代码查询系统：\n请输入代码：未查询到此错误代码，请联系当地经销商"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n和n==\"e2\" || n==\"E2\"。原课件中文引号已修正。"
      }
    ]
  }
});
