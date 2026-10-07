window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "06": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "(8+6)×a-10+c÷2 在 C++ 中应表示为哪一项？",
        "options": [
          "(8+6)×a-10+c÷2",
          "(8+6)*a-10+c÷2",
          "(8+6)*a-10+c/2",
          "(8+6)×a-10+c/2"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "C++ 使用 * 表示乘法，/ 表示除法。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,c,s;\n    s=0; a=7; b=8; c=3;\n    s=s+a;\n    s=s+b;\n    s=s+c;\n    cout<<\"s=\"<<s<<endl;\n    return 0;\n}",
        "expected": "s=18",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "依次累加7、8、3得到18。原课件 s=s+c 漏写分号，这里补齐以便阅读运行。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "向日葵班43人、苹果班42人、草莓班45人。完善程序，求可可老师周三上课的学生总数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int sum,n;\n    {{0}};\n    n=43;\n    sum=sum+n;\n    n=42;\n    {{1}};\n    n=45;\n    sum=sum+n;\n    cout<<\"sum=\"<<sum<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：初始化累加器（分号已给出）"
          },
          {
            "label": "第二处：加入苹果班人数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "sum=130"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "sum先置0，然后加43、42、45，总人数130。"
      }
    ]
  },
  "07": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "下列计算机设备中，属于存储设备的是哪一项？",
        "options": [
          "键盘",
          "RAM",
          "显示器",
          "CPU"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "RAM 是随机存取存储器。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i=1,sum=0;\n    sum+=i; i*=2;\n    sum+=i; i*=2;\n    sum+=i; i*=2;\n    sum+=i;\n    cout<<\"i=\"<<i<<\",\"<<\"sum=\"<<sum<<endl;\n    return 0;\n}",
        "expected": "i=8,sum=15",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "累加1、2、4、8得到15，最终i=8。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "明明买来30根骨头，每天吃掉剩下的一半后又吃一根，连续三天。完善程序，输出剩下的根数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int {{0}};\n    n=n/2-1;\n    n=n/2-1;\n    {{1}};\n    cout<<n<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明并初始化变量"
          },
          {
            "label": "第二处：第三天的计算（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "2"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填 n=30 和 n=n/2-1。剩余数量依次14、6、2。"
      }
    ]
  },
  "08": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "计算机能直接识别的是哪一种程序？",
        "options": [
          "Python语言编写的源程序",
          "C++语言编写的源程序",
          "机器语言编写的源程序",
          "各种高级语言编写的源程序"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "机器语言指令可被计算机直接执行。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b;\n    a=100; b=200;\n    a=b-a;\n    b-=a;\n    a+=b;\n    cout<<\"a=\"<<a<<\"  b=\"<<b<<endl;\n    return 0;\n}",
        "expected": "a=200  b=100",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "三步完成交换。输出 a=200 与 b=100 之间有两个空格。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "一个三位数，百位比十位大1，个位是百位的2倍，十位为3。完善程序，求这个三位数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int ge,shi,bai,shu;\n    shi=3;\n    {{0}};\n    ge=bai*2;\n    {{1}};\n    cout<<\"shu=\"<<shu<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：求百位（分号已给出）"
          },
          {
            "label": "第二处：组成三位数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "shu=438"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "百位4、十位3、个位8，数为438。可填 bai=shi+1 与 shu=bai*100+shi*10+ge。"
      }
    ]
  },
  "09": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "为了让计算机完成一个完整任务而编写的一串指令序列称为什么？",
        "options": [
          "命令",
          "口令",
          "程序",
          "软件"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "按顺序组织的指令序列构成程序。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main()\n{\n    int a,b,c;\n    a=3; b=4; c=a*a+b*b;\n    cout<<a<<\"*\"<<a<<\"+\"<<b<<\"*\"<<b<<\"=\"<<setw(2)<<c<<endl;\n    return 0;\n}",
        "expected": "3*3+4*4=25",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "c=25已占两个字符，setw(2)不再补空格。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "已知a为15、b为3，完善程序，输出a-b的竖式计算。",
        "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main()\n{\n    int a,b,c;\n    a=15; b=3; c=a-b;\n    cout<<setw(5)<<a<<endl;\n    cout<<setw(2)<<'-'<<setw(3)<<{{0}}<<endl;\n    cout<<\"----------\"<<endl;\n    cout<<{{1}}<<c<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：减数"
          },
          {
            "label": "第二处：使结果占5个字符宽度"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "   15\n -  3\n----------\n   12"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "第一处填b，第二处填setw(5)。保留每行开头的对齐空格。"
      }
    ]
  },
  "10": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "下面设备中，哪一个属于计算机的输入设备？",
        "options": [
          "显示器",
          "绘图仪",
          "打印机",
          "鼠标"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "鼠标把操作输入计算机。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入为 200 10 20 30 50，阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int s,a,b,c;\n    cin>>s>>a>>b>>c;\n    s-=a; s-=b; s-=c;\n    cout<<\"ans=\"<<s<<endl;\n    return 0;\n}",
        "expected": "ans=140",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "只读取200、10、20、30，最后的50没有被读取。200-10-20-30=140。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "从键盘输入长方形的长和宽，完善程序，计算并输出周长。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,c;\n    {{0}};\n    c=(a+b)*2;\n    cout<<\"周长：\"<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取长和宽（分号已给出）"
          },
          {
            "label": "第二处：输出周长的变量或表达式"
          }
        ],
        "tests": [
          {
            "input": "15 3",
            "output": "周长：36"
          },
          {
            "input": "120 80",
            "output": "周长：400"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>a>>b和c。原课件的中文引号和遗漏分号已改为可编译形式，计算要求不变。"
      }
    ]
  }
});
