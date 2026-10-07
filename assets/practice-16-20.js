window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "16": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 9,
        "prompt": "下面信息中，一般定义为string类型的是哪一项？",
        "options": [
          "姓名",
          "体重",
          "年龄",
          "身高"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "姓名是文本，适合string。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 9,
        "prompt": "输入10，写出全部程序输出（不包含输入回显）。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x,y=0;\n    cout<<\"x=\";\n    cin>>x;\n    if(x<10) y=1;\n    else if(x<100) y=2;\n    else y=3;\n    cout<<y;\n    return 0;\n}",
        "expected": "x=2",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "10不小于10，但小于100，y=2。提示x=也是程序输出的一部分。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 10,
        "prompt": "输入一个数，大于0输出“正数”，等于0输出“零”，小于0输出“负数”。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    float x;\n    cout<<\"x=\";\n    cin>>x;\n    if({{0}}) cout<<\"零\";\n    else if({{1}}) cout<<\"正数\";\n    else cout<<\"负数\";\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：判断零"
          },
          {
            "label": "第二处：判断正数"
          }
        ],
        "tests": [
          {
            "input": "0",
            "output": "x=零"
          },
          {
            "input": "2.5",
            "output": "x=正数"
          },
          {
            "input": "-3",
            "output": "x=负数"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填x==0和x>0。"
      }
    ]
  },
  "17": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "表达式(5==6)的值是什么？",
        "options": [
          "true",
          "false",
          "1",
          "2"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "5不等于6，结果为false。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入12，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    bool flag;\n    int n;\n    cin>>n;\n    if(n%2==0) flag=true;\n    else flag=false;\n    if(flag) cout<<\"yes\";\n    else cout<<\"no\";\n    return 0;\n}",
        "expected": "yes",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "12是偶数，flag=true。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "7扇门开始全部打开。妈妈反转2的倍数，随后美美反转3的倍数。完善程序，输出开门总数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    bool door1,door2,door3,door4,door5,door6,door7;\n    int s=0;\n    door1=door2=door3=door4=door5=door6=door7=true;\n    door2=!door2; door4=!door4; door6=!door6;\n    {{0}};\n    door6=!door6;\n    if(door1) s++; if(door2) s++; if(door3) s++;\n    {{1}};\n    if(door5) s++; if(door6) s++; if(door7) s++;\n    cout<<{{2}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：反转3号门（分号已给出）"
          },
          {
            "label": "第二处：统计4号门（分号已给出）"
          },
          {
            "label": "第三处：输出总数"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "4"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填door3=!door3、if(door4) s++、s。1、5、6、7号门打开。原课件声明doo7的拼写已修正为door7。"
      }
    ]
  },
  "18": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "在n为非负整数的条件下，判断n不能被3整除，下面哪一项错误？",
        "options": [
          "n%3!=0",
          "n%3==1 || n%3==2",
          "!(n%3==0)",
          "n%3==1 && n%3==2"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "一个余数不能同时为1和2。原课件写“整数”时，B对负数也可能错误；这里明确非负条件。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "输入15 15 15，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,s=0;\n    cin>>n;\n    if(n%3==0 || n%5==0) s++;\n    cin>>n;\n    if(n%3==0 && n%5==0) s++;\n    cin>>n;\n    if(!(n%5==0)) s++;\n    cout<<s;\n    return 0;\n}",
        "expected": "2",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "前两个条件满足，第三个不满足，s=2。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "模拟课件中的“蘑菇庄园”登录：用户名和密码都正确才欢迎，否则提示错误。这是练习数据，与网站真实账号无关。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\n    const int USER=201701;\n    const string PWD=\"gcy#*123\";\n    int user; string pwd;\n    cout<<\"用户名：\";\n    {{0}};\n    cout<<\"密码：\";\n    cin>>pwd;\n    if({{1}}) cout<<\"亲爱的小朋友，欢迎你！\";\n    else cout<<\"用户名或密码不正确\";\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读入用户名（分号已给出）"
          },
          {
            "label": "第二处：判断两项都正确"
          }
        ],
        "tests": [
          {
            "input": "201701 gcy#*123",
            "output": "用户名：密码：亲爱的小朋友，欢迎你！"
          },
          {
            "input": "201702 gcy#*123",
            "output": "用户名：密码：用户名或密码不正确"
          },
          {
            "input": "201701 wrong",
            "output": "用户名：密码：用户名或密码不正确"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>user和user==USER && pwd==PWD。题干错误提示与代码末尾标点不同，这里按代码检查。"
      }
    ]
  },
  "19": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "(11>12) && (12<15) || (13+2==15) 的值是什么？",
        "options": [
          "10",
          "0",
          "true",
          "false"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "前半部分为false，后半部分为true，逻辑或得到true。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入96 10，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x,y;\n    cin>>x>>y;\n    if(x>y && y!=0) cout<<x/y<<endl;\n    else if(x!=0) cout<<y/x<<endl;\n    return 0;\n}",
        "expected": "9",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "96>10且10非零，整数除法96/10=9。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "输入年份，完善嵌套判断程序，输出闰年或平年。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int year; bool leap;\n    cout<<\"输入年份：\";\n    cin>>year;\n    if(year%4==0)\n        if(year%100==0)\n            if({{0}}) leap=true; else leap=false;\n        else leap=true;\n    else {{1}};\n    if({{2}}) cout<<\"闰年\";\n    else cout<<\"平年\";\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：整百年份的闰年条件"
          },
          {
            "label": "第二处：非4倍数的设置（分号已给出）"
          },
          {
            "label": "第三处：是否闰年的判断"
          }
        ],
        "tests": [
          {
            "input": "2000",
            "output": "输入年份：闰年"
          },
          {
            "input": "1900",
            "output": "输入年份：平年"
          },
          {
            "input": "2024",
            "output": "输入年份：闰年"
          },
          {
            "input": "2023",
            "output": "输入年份：平年"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填year%400==0、leap=false、leap。"
      }
    ]
  },
  "20": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "判断a不等于0且b等于0，哪个逻辑表达式正确？",
        "options": [
          "a!=0 && b==0",
          "!(a!=0 && b=0)",
          "!(a==0 && b==0)",
          "a!==0 || b!==0"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "用!=判断不等、==判断相等、&&连接两个都要满足的条件。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入b，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    char ch; int sum,n;\n    cin>>ch; sum=0;\n    if(ch>='a' && ch<='z') {\n        n=ch-'a'+1;\n        sum+=n;\n    } else sum=27;\n    cout<<sum;\n    return 0;\n}",
        "expected": "2",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "b是第2个小写字母。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "输入电梯当前楼层及两个请求楼层，先服务距离较近的请求。依照原代码输出楼层与箭头；测试不含距离相同的情况。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,n1,n2,len1,len2;\n    cout<<\"输入当前电梯停在的楼层：\"; cin>>n;\n    cout<<\"输入同时需要服务的两个楼层：\"; cin>>n1>>n2;\n    if(n-n1>0) len1=n-n1;\n    else {{0}};\n    if(n-n2>0) {{1}};\n    else len2=n2-n;\n    if({{2}}) cout<<n1<<\"--------->\"<<n2;\n    else cout<<n2<<\"------->\"<<n1;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：求第一个请求的距离（分号已给出）"
          },
          {
            "label": "第二处：求第二个请求的距离（分号已给出）"
          },
          {
            "label": "第三处：比较两个距离"
          }
        ],
        "tests": [
          {
            "input": "10 20 7",
            "output": "输入当前电梯停在的楼层：输入同时需要服务的两个楼层：7------->20"
          },
          {
            "input": "10 9 20",
            "output": "输入当前电梯停在的楼层：输入同时需要服务的两个楼层：9--------->20"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填len1=n1-n、len2=n-n2、len1<len2。原代码两条箭头长度不同，按各分支原样检查。"
      }
    ]
  }
});
