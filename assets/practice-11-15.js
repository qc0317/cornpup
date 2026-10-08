window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "11": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "姚期智因计算机理论方面的基础性贡献，2000年获得美国计算机学会颁发的哪一奖项？",
        "options": [
          "金鸡奖",
          "诺贝尔奖",
          "菲尔兹奖",
          "图灵奖"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "原课件考查的奖项是图灵奖。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入0.628，阅读程序写出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int ans;\n    float n;\n    cin>>n;\n    n*=100;\n    n+=0.5;\n    ans=n;\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "63",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "0.628乘100再加0.5约为63.3，赋给int时舍去小数部分。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "含糖20%的糖水15克，加多少水后含糖量变为15%？完善程序。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    float tang,shui,tangshui;\n    tang=15*0.2;\n    tangshui=tang/0.15;\n    shui={{0}};\n    cout<<\"应加水：\"<<{{1}};\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：新增水的质量"
          },
          {
            "label": "第二处：输出加水量"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "应加水：5"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "糖有3克，总糖水需20克，所以再加5克水。原课件输出行的句末点号已补为分号。"
      }
    ]
  },
  "12": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "C++ 中315%2的结果是什么？",
        "options": [
          "315",
          "-157",
          "1",
          "-1"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "315除以2的余数是1。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入17 5，写出程序的全部输出（不包含你输入的数字回显）。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,c,d;\n    cout<<\"input  a,b:\";\n    cin>>a>>b;\n    c=a/b; d=a%b;\n    cout<<a<<'/'<<b<<'=';\n    cout<<c<<\"……\"<<d<<endl;\n    return 0;\n}",
        "expected": "input  a,b:17/5=3……2",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "程序先输出输入提示，再输出商3和余数2。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "输入一个三位数，输出各位数字之和。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,ge,shi,bai,he;\n    cout<<\"请输入一个三位数：\";\n    {{0}};\n    ge=n%10;\n    shi=(n/10)%10;\n    {{1}};\n    he=ge+shi+bai;\n    cout<<\"各个位数之和是：\"<<he<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取三位数（分号已给出）"
          },
          {
            "label": "第二处：求百位（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "123",
            "output": "请输入一个三位数：各个位数之和是：6"
          },
          {
            "input": "908",
            "output": "请输入一个三位数：各个位数之和是：17"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n与bai=n/100。"
      }
    ]
  },
  "13": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 10,
        "prompt": "原课件介绍：不同国家和地区为显示本国语言扩充了哪一种编码？",
        "options": [
          "ASCII码",
          "补码1",
          "汉字编码",
          "BCD码"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "原课件介绍ASCII与GB2312的历史关系。现代网页通常使用Unicode/UTF-8，GB2312并非现代网页最常用编码。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 10,
        "prompt": "输入A。按修正后的单个空格字符，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    char ch;\n    int n;\n    cin>>ch;\n    n=ch;\n    cout<<ch<<' '<<n<<endl;\n    return 0;\n}",
        "expected": "A 65",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "A的ASCII码为65。原课件两个空格写在单引号内属于多字符字面量，这里明确修正为一个空格字符。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 11,
        "prompt": "输入一个字母，输出前一个字母、它自己和后一个字母；如输入b输出abc。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    char ch1,ch2,ch3;\n    cin>>ch2;\n    ch1=ch2-1;\n    {{0}};\n    cout<<ch1<<ch2<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：求后一个字符（分号已给出）"
          },
          {
            "label": "第二处：输出后一个字符"
          }
        ],
        "tests": [
          {
            "input": "b",
            "output": "abc"
          },
          {
            "input": "m",
            "output": "lmn"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填ch3=ch2+1与ch3。测试字母不取a/z，避免越过字母范围。"
      }
    ]
  },
  "14": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 9,
        "prompt": "下列表达式哪个值为真？",
        "options": [
          "7%2 == 0",
          "'a' > '0'",
          "99 < 60",
          "0"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "ASCII中a的编码97大于0的编码48。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 9,
        "prompt": "输入110，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x;\n    cin>>x;\n    if(x>100) x-=10;\n    cout<<x;\n    return 0;\n}",
        "expected": "100",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "110大于100，减10后输出100。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 10,
        "prompt": "输入一个整数，若是偶数就输出“偶数”。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n;\n    cout<<\"请输入一个整数：\";\n    {{0}};\n    if({{1}}) cout<<\"偶数\";\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取整数（分号已给出）"
          },
          {
            "label": "第二处：判断偶数的条件"
          }
        ],
        "tests": [
          {
            "input": "24",
            "output": "请输入一个整数：偶数"
          },
          {
            "input": "25",
            "output": "请输入一个整数："
          },
          {
            "input": "0",
            "output": "请输入一个整数：偶数"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n与n%2==0。"
      },
      {
        "id": "q4",
        "number": 4,
        "type": "program",
        "page": 11,
        "prompt": "输入一个年份，若是闰年就输出“闰年”。原课件这一题要求自行编写程序，请输入完整程序。",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "2024",
            "output": "闰年"
          },
          {
            "input": "1900",
            "output": ""
          },
          {
            "input": "2000",
            "output": "闰年"
          },
          {
            "input": "2023",
            "output": ""
          }
        ],
        "hint": "能被4整除但不能被100整除，或能被400整除。只在满足条件时输出。",
        "explanation": "闰年判断为year%400==0 || (year%4==0 && year%100!=0)。"
      }
    ]
  },
  "15": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "原题要求选择语法合法的关系表达式。C++中本题有多个合法项，任选一个即可通过；假定变量x已定义。",
        "options": [
          "'a'<97",
          "23.5!<20",
          "12<56<246",
          "5<x<14"
        ],
        "answer": 0,
        "hint": "合法语法不等于结果为真；注意!<不是C++关系运算符。",
        "explanation": "A、C、D均可通过C++语法检查，B中的!<不合法。C、D按从左到右计算，不能表示数学中的连续关系或区间；判断5<x<14应写5<x && x<14。",
        "answers": [
          0,
          2,
          3
        ]
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "输入10，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x;\n    cin>>x;\n    if(x==10) x++;\n    else x--;\n    cout<<\"x=\"<<x<<endl;\n    return 0;\n}",
        "expected": "x=11",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "输入10满足条件，执行x++。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "输入一个整数，判断奇偶。依照原程序输出数值及“偶数”或“奇数”。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    {{0}};\n    cout<<\"请输入一个整数：\";\n    cin>>n;\n    if({{1}}) cout<<n<<\"偶数\"<<endl;\n    else cout<<n<<\"奇数\"<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明整数变量（分号已给出）"
          },
          {
            "label": "第二处：判断偶数的条件"
          }
        ],
        "tests": [
          {
            "input": "24",
            "output": "请输入一个整数：24偶数"
          },
          {
            "input": "25",
            "output": "请输入一个整数：25奇数"
          },
          {
            "input": "-3",
            "output": "请输入一个整数：-3奇数"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填int n与n%2==0。原题文字省略了数值，但给出的程序会输出数值，这里明确按原程序检查。"
      }
    ]
  }
});
