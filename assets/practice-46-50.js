window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "46": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "用科学计数法表示2600，应是哪一项？",
        "options": [
          "2.6e+2",
          "2.6e+3",
          "2.6e-2",
          "2.6e-3"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "2.6×10³=2600。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入20，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,x,s=0;cin>>n;x=1;\n    while(x<=n){if(x%3==1) s+=x;++x;}\n    cout<<s<<endl;\n    return 0;\n}",
        "expected": "70",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "满足条件的1、4、7、10、13、16、19相加为70。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "韩信带1500人，战死四五百人。幸存士兵每3人一排多2人、每5人一排多4人、每7人一排多6人，求至少有多少幸存士兵。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i;i=1000;\n    while(true){\n        if(i%3==2 && i%5==4 && i%7==6) {{0}};\n        i++;\n    }\n    cout<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：找到答案后的循环控制语句（分号已给出）"
          },
          {
            "label": "第二处：输出幸存人数"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "1049"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填break和i。从1000开始，第一个满足三个余数条件的数是1049。"
      }
    ]
  },
  "47": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "在计算机内部，信息存取、处理、传递的形式是什么？",
        "options": [
          "ASCII码",
          "BCD码",
          "二进制",
          "十进制"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "计算机内部用二进制表示信息。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入1 100 5，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,n,num=0;cin>>a>>b>>n;\n    while(a<=b){\n        if(a%n==0) num++;\n        a++;b-=10;\n    }\n    cout<<num<<endl;\n    return 0;\n}",
        "expected": "2",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "a处理到10，期间5和10能被5整除，共2次。注意b也在减小。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输入正整数a、b、n，按原长除法程序输出a÷b的小数点后n位（1<=n<=200，逐位截取、不四舍五入）。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,n,ans,i;\n    cout<<\"a b n=\";cin>>a>>b>>n;\n    cout<<a<<\"/\"<<b<<\"=\";\n    {{0}};\n    cout<<ans<<\".\";a%=b;\n    for(i=1;i<=n;i++){\n        ans=(a*10)/b;cout<<ans;\n        {{1}};\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：求整数部分（分号已给出）"
          },
          {
            "label": "第二处：为下一位保存余数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "1 3 6",
            "output": "a b n=1/3=0.333333"
          },
          {
            "input": "22 7 4",
            "output": "a b n=22/7=3.1428"
          },
          {
            "input": "1 2 3",
            "output": "a b n=1/2=0.500"
          },
          {
            "input": "1 3 200",
            "output": "a b n=1/3=0.33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填ans=a/b和a=(a*10)%b。每一位由余数乘10后继续除以b得到。原图片未展示头文件，已补齐。"
      }
    ]
  },
  "48": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "白色表示0、黑色表示1，下方原课件格子从左到右对应哪项二进制编码？",
        "options": [
          "10011",
          "11001",
          "10100",
          "01011"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "原图从左到右黑、白、黑、白、白，所以编码10100。",
        "figure": {
          "type": "bits",
          "values": [
            1,
            0,
            1,
            0,
            0
          ]
        }
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入10，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i=1,n,ans=0;cin>>n;\n    do{ans+=i;i+=2;}while(i<=n);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "25",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "累加1、3、5、7、9得到25。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "用原do-while程序求5+10+15+…+200的和。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i=5,{{0}};\n    do{\n        sum+=i;\n        {{1}};\n    }while(i<=200);\n    cout<<\"5+10+15+20+...+200=\"<<sum<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明并初始化累加器"
          },
          {
            "label": "第二处：更新下一项（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "5+10+15+20+...+200=4100"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填sum=0和i+=5。共40项，总和4100。"
      }
    ]
  },
  "49": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "按原课件1GB=1024³字节、单个ASCII英文字母占1字节计算，1GB可存放多少个英文字母？",
        "options": [
          "1024*1024*1024",
          "1024*1024",
          "1024*1024*1024/2",
          "1024*1024*1024/8"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "按本题约定，一字节对应一个ASCII字母。注意现代存储容量也会采用十进制GB，不能混用约定。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入17，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    long long n;int sum=0,a;cin>>n;\n    do{\n        a=n%2;sum+=a;cout<<a;n=n/2;\n    }while(n!=0);\n    cout<<endl;cout<<sum<<endl;\n    return 0;\n}",
        "expected": "10001\n2",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "按最低位到最高位输出余数，17恰好得到10001；其中1的数量为2。请分两行作答。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "输入正整数，输出十进制位数，如789输出3，445566输出6。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,num=0;\n    {{0}};\n    do{\n        {{1}};\n        n=n/10;\n    }while(n>0);\n    cout<<num<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读入整数（分号已给出）"
          },
          {
            "label": "第二处：记录一位（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "789",
            "output": "3"
          },
          {
            "input": "445566",
            "output": "6"
          },
          {
            "input": "1",
            "output": "1"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n和num++。每次除10去掉一位。"
      }
    ]
  },
  "50": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "原课件中的0.3和0.9都带循环小数标记。数学意义下，1与0.999…应满足哪个关系？",
        "options": [
          ">",
          "<",
          "=",
          "≠"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "无限循环小数0.999…等于1；不能把它误看成只有一位小数的0.9。",
        "figure": {
          "type": "recurring"
        }
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入10，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,i,ans=0;cin>>n;i=1;\n    do{if(n%i==0) ans++;i++;}while(i<=n);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "4",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "10的正因子1、2、5、10，共4个。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "用getchar逐字符读取带小数点的十进制数，输出小数点后数字的位数；输入以换行结束。按原程序保留末尾0，如12.3400有4位小数。",
        "code": "#include <iostream>\n#include <cstdio>\nusing namespace std;\nint main()\n{\n    {{0}};\n    bool f=false;int num=0;\n    while((ch=getchar())!='\\n'){\n        if(f){\n            if(ch>='0' && ch<='9') {{1}};\n            else break;\n        }\n        if({{2}}) f=true;\n    }\n    if(num>0) cout<<num<<endl;\n    else cout<<\"输入有误！ \"<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明读入字符变量"
          },
          {
            "label": "第二处：统计一个小数数字（分号已给出）"
          },
          {
            "label": "第三处：遇到小数点的条件"
          }
        ],
        "tests": [
          {
            "input": "12.3400\n",
            "output": "4"
          },
          {
            "input": "0.5\n",
            "output": "1"
          },
          {
            "input": "7.\n",
            "output": "输入有误！"
          },
          {
            "input": "12\n",
            "output": "输入有误！"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填int ch、num++、ch=='.'。也可用char ch处理本题换行终止输入；这里补充getchar所需<cstdio>头文件。"
      }
    ]
  }
});
