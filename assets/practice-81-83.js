window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "81": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "原题声明int x,*p=&x，选出不合法表达式。原选项A使用未声明的a，B解引用整数x，因此按题面选A或B都通过。",
        "options": [
          "*(&a)",
          "&(*x)",
          "&(*p)",
          "*(&p)"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "仅有原题声明时，a未声明；整数x也不能用*x解引用。C与D则是合法的指针相关表达式。",
        "answers": [
          0,
          1
        ]
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int c1,*p1;c1='A';p1=&c1;\n    (*p1)++;cout<<(char)c1<<endl;\n    return 0;\n}",
        "expected": "B",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "p1指向c1，通过*p1把A的字符值增加1，转回char输出B。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "用指针输出1–100之间的所有整数，每行一个。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,*p;\n    p={{0}};\n    for(*p=1;*p<=100;(*p)++) cout<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：指向整数变量i的地址"
          },
          {
            "label": "第二处：输出指针所指的整数"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n17\n18\n19\n20\n21\n22\n23\n24\n25\n26\n27\n28\n29\n30\n31\n32\n33\n34\n35\n36\n37\n38\n39\n40\n41\n42\n43\n44\n45\n46\n47\n48\n49\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n64\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n81\n82\n83\n84\n85\n86\n87\n88\n89\n90\n91\n92\n93\n94\n95\n96\n97\n98\n99\n100"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填&i、*p。p必须先指向有效整数变量，才能解引用。"
      }
    ]
  },
  "82": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "已定义int a[10]，能正确引用数组元素的表达式是哪项？",
        "options": [
          "&a[5]",
          "*(a+2)",
          "a+2",
          "*(*(a+3))"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "*(a+2)即a[2]；&a[5]和a+2产生地址，最后一项试图再次解引用整数。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "原课件未指定输入，这里补充练习样例3 8。保持原程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nvoid swap(int *p1,int *p2)\n{\n    int temp;temp=*p1;*p1=*p2;*p2=temp;\n}\nint main()\n{\n    int a[2],*p;cin>>a[0]>>a[1];p=&a[0];\n    swap(p,p+1);cout<<*(p+1);\n    return 0;\n}",
        "expected": "3",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "交换后第二个元素等于原来的第一个输入，即3。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "输入语文、数学、英语、科学四科整数成绩，用指针遍历数组计算总分。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a[4],i,sum,{{0}};\n    sum=0;for(i=0;i<4;i++) cin>>a[i];\n    for(p=a;p<(a+4);p++) {{1}};\n    cout<<sum<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明整数指针p"
          },
          {
            "label": "第二处：累加当前指针所指成绩（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "90 80 70 100",
            "output": "340"
          },
          {
            "input": "0 0 0 0",
            "output": "0"
          },
          {
            "input": "100 100 100 100",
            "output": "400"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填*p、sum+=*p。数组名a可作为首元素地址，p++移动到下一个整数。"
      }
    ]
  },
  "83": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "与C语言相比，C++在求解问题方法上的最大改进是哪项？",
        "options": [
          "面向过程",
          "面向对象",
          "安全性",
          "复用性"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "原课件强调C++的面向对象方法。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "原课件未指定输入，这里用Max 10作为练习样例，写出输出结果。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nclass student\n{\npublic:\n    string name;int age;\n};\nint main()\n{\n    student st1;cin>>st1.name>>st1.age;\n    cout<<st1.name<<\" \"<<st1.age<<endl;\n    return 0;\n}",
        "expected": "Max 10",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "成员name和age读入后以一个空格分隔输出。这里补齐string所需头文件。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "定义日期对象，输入年、月、日，调用成员函数按年/月/日格式输出。不补前导0，遵循原程序。",
        "code": "#include <iostream>\nusing namespace std;\nclass date\n{\npublic:\n    int year,month,day;\n    void display(){cout<<year<<'/'<<month<<'/'<<day;}\n};\nint main()\n{\n    {{0}} date1;\n    cin>>date1.year;cin>>date1.month;cin>>date1.day;\n    date1.{{1}};\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：日期类的类型名称"
          },
          {
            "label": "第二处：调用显示日期的成员函数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "2026 10 8",
            "output": "2026/10/8"
          },
          {
            "input": "2000 1 1",
            "output": "2000/1/1"
          },
          {
            "input": "2024 2 29",
            "output": "2024/2/29"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填date、display()。对象类型、成员变量与成员函数的调用方式需要区分。"
      }
    ]
  }
});
