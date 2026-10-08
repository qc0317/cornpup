window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "51": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "操作系统是对什么进行管理的系统软件？",
        "options": [
          "软件",
          "硬件",
          "计算机资源",
          "应用程序"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "计算机资源包含硬件和软件等，不只是一类资源。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入100，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x,ans;cin>>x;ans=0;\n    do{ans+=x%8;x/=8;}while(x!=0);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "9",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "100%8=4，接着12%8=4、1%8=1，累加得到9。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "积木数量x满足x+6是13的倍数，x-6是12的倍数，求至少多少块。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int x=0;\n    do{\n        {{0}};\n    }while((x+6)%13!=0 || (x-6)%12!=0);\n    cout<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：尝试下一个数量（分号已给出）"
          },
          {
            "label": "第二处：输出积木数"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "150"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填x++和x。150+6=156可被13整除，150-6=144可被12整除。"
      }
    ]
  },
  "52": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "哪一项不属于图像文件格式？",
        "options": [
          "jpeg",
          "txt",
          "gif",
          "png"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "txt通常是纯文本格式。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,t,ans;n=1;t=2;ans=0;\n    do{n=n*t;ans+=n;}while(n<=1e+3);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "2046",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "do先执行再判断，最后还加入1024。2+4+…+1024=2046。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "三人在0秒同时拍第一次手，老师每1秒、明明每2秒、美美每4秒拍一次，各拍10次。按原程序求观众听到几次掌声，同时拍手只算一次。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int ans=10,time=10;bool flag=0;\n    do{\n        flag=0;\n        if(time<=18 && time%2==0) flag=1;\n        if(time<=36 && time%4==0) flag=1;\n        if(flag) ans++;\n        {{0}};\n    }while(time<=36);\n    cout<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：推进下一秒（分号已给出）"
          },
          {
            "label": "第二处：输出掌声次数"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "20"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填time++和ans。0到9秒已计10次，再加入10至36秒满足任一拍手条件的10次。"
      }
    ]
  },
  "53": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "计算机网络最突出的优点是什么？",
        "options": [
          "计算精度高",
          "内存容量大",
          "运算速度快",
          "可以实现资源共享"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "网络能连接设备并共享资源。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入100，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    long long n,ans=0,k=1;cin>>n;\n    do{ans+=2;n-=k;k+=ans*10;}while(k<=n);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "6",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "(ans,n,k)依次为(2,99,21)、(4,78,61)、(6,17,121)，随后停止。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "两人按1到x、1到y循环报数，同步开始、速度相同，各报m个数，求同时报相同数的次数。x、y为正整数，m为非负整数。第一处提示语可自拟，检查最后输出的次数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,nike,glair,num=0;int x,y,m;\n    cout<<\"m=\";cin>>m;\n    {{0}};\n    cin>>x>>y;nike=glair=0;\n    for(n=1;n<=m;n++){\n        {{1}};\n        if(nike>x) nike=1;\n        glair++;if(glair>y) glair=1;\n        if(nike==glair) num++;\n    }\n    cout<<{{2}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：自拟报数周期提示的输出语句（分号已给出）"
          },
          {
            "label": "第二处：第一人的报数更新（分号已给出）"
          },
          {
            "label": "第三处：输出相同次数"
          }
        ],
        "tests": [
          {
            "input": "20 3 5",
            "output": "6"
          },
          {
            "input": "10 1 1",
            "output": "10"
          },
          {
            "input": "12 4 6",
            "output": "4"
          },
          {
            "input": "0 2 3",
            "output": "0"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cout<<\"请输入报数周期：\"、nike++、num。每人超过自己的上限后从1重新开始。原图片未展示完整main，已补齐。",
        "checker": "last-number"
      }
    ]
  },
  "54": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "收到主题为“这是我最近的照片”的陌生邮件，原题选项中哪种做法更合适？",
        "options": [
          "直接删除",
          "打开看看",
          "直接转发给同学",
          "下载保存"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "先避免打开、下载或转发不明来源的附件。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "输入123，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int m,sum=0;cin>>m;\n    do{sum=sum*10+m%10;m=m/10;}while(m!=0);\n    cout<<sum<<endl;\n    return 0;\n}",
        "expected": "321",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "依次取个位3、2、1，组成321。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "把3.1415926四舍五入保留n位小数，1<=n<=5。不合法的n需要重新读取。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    double x,y;int n,m=1;x=3.1415926;\n    cout<<\"n=\";\n    do{\n        {{0}};\n    }while(n<1 || n>5);\n    for(int i=1;i<=n;i++) {{1}};\n    y=int(x*m+0.5);y=y/m;\n    cout<<y<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读取小数位数（分号已给出）"
          },
          {
            "label": "第二处：建立10的n次方（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "1",
            "output": "n=3.1"
          },
          {
            "input": "4",
            "output": "n=3.1416"
          },
          {
            "input": "5",
            "output": "n=3.14159"
          },
          {
            "input": "0 4",
            "output": "n=3.1416"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n和m*=10。原程序用乘10的n次方、加0.5后取整实现正数四舍五入。"
      }
    ]
  },
  "55": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "视频模式1280×720、1920×1080指的是什么？",
        "options": [
          "内存",
          "存储容量",
          "分辨率",
          "显示器大小"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "这里的两个数字表示画面宽和高的像素数。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j;\n    for(i=1;i<=3;i++){\n        for(j=1;j<=5;j++) cout<<j;\n        cout<<endl;\n    }\n    return 0;\n}",
        "expected": "12345\n12345\n12345",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "内层每行输出1到5，外层共3行。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "完善双层循环，输出下方原课件目标图形。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j;\n    for(i=1;{{0}};i++){\n        for(j=1;{{1}};j++) cout<<{{2}};\n        cout<<endl;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：控制四行的条件"
          },
          {
            "label": "第二处：控制每行五列的条件"
          },
          {
            "label": "第三处：每个位置输出的值"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "11111\n22222\n33333\n44444"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i<=4、j<=5、i。外层决定行号，内层重复输出该行号五次。",
        "figure": {
          "type": "text",
          "text": "11111\n22222\n33333\n44444"
        }
      }
    ]
  }
});
