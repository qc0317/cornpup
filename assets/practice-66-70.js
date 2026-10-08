window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "66": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "str1、str2为string。下列赋值后，str1<str2的结果为0的是哪项？",
        "options": [
          "str1=\"CD\"; str2=\"CDDC\";",
          "str1=\"HELLO\"; str2=\"Hello\";",
          "str1=\"nike\"; str2=\"teacher\";",
          "str1=\"8\"; str2=\"10+2\";"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "字符串按字符顺序比较，不是把数字字符串当数值计算。字符8大于字符1。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 9,
        "prompt": "输入How are you，写出程序输出。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    char str[20];\n    cin>>str;cout<<str;\n    return 0;\n}",
        "expected": "How",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "cin读取字符数组时遇空白停止，所以只得到How。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 10,
        "prompt": "读入一行英文句子，统计并逐行输出a至z各小写字母的次数。保留原字符数组；原gets函数改用有长度限制的cin.getline，以兼容当前C++。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    char ch1[1000],ch2;\n    int num[26],i,k;\n    for(i=0;i<26;i++) num[i]=0;\n    cin.getline(ch1,1000);i=0;\n    while({{0}}){\n        if(ch1[i]>='a' && ch1[i]<='z'){\n            k=ch1[i]-'a';\n            {{1}};\n        }\n        i++;\n    }\n    for(i=0;i<26;i++){\n        ch2='a'+i;cout<<ch2<<':'<<num[i]<<endl;\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：尚未到字符串末尾的条件"
          },
          {
            "label": "第二处：统计对应字母（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "Hello world!\n",
            "output": "a:0\nb:0\nc:0\nd:1\ne:1\nf:0\ng:0\nh:0\ni:0\nj:0\nk:0\nl:3\nm:0\nn:0\no:2\np:0\nq:0\nr:1\ns:0\nt:0\nu:0\nv:0\nw:1\nx:0\ny:0\nz:0"
          },
          {
            "input": "abc xyz abc\n",
            "output": "a:2\nb:2\nc:2\nd:0\ne:0\nf:0\ng:0\nh:0\ni:0\nj:0\nk:0\nl:0\nm:0\nn:0\no:0\np:0\nq:0\nr:0\ns:0\nt:0\nu:0\nv:0\nw:0\nx:1\ny:1\nz:1"
          },
          {
            "input": "ABC\n",
            "output": "a:0\nb:0\nc:0\nd:0\ne:0\nf:0\ng:0\nh:0\ni:0\nj:0\nk:0\nl:0\nm:0\nn:0\no:0\np:0\nq:0\nr:0\ns:0\nt:0\nu:0\nv:0\nw:0\nx:0\ny:0\nz:0"
          },
          {
            "input": "\n",
            "output": "a:0\nb:0\nc:0\nd:0\ne:0\nf:0\ng:0\nh:0\ni:0\nj:0\nk:0\nl:0\nm:0\nn:0\no:0\np:0\nq:0\nr:0\ns:0\nt:0\nu:0\nv:0\nw:0\nx:0\ny:0\nz:0"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填ch1[i]!='\\0'、num[k]++。大写字母不计入小写字母统计。"
      }
    ]
  },
  "67": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "六位数字密码锁，每位可选0–9，允许首位为0，共多少种密码？",
        "options": [
          "1万",
          "10万",
          "100万",
          "1000万"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "每位10种，共10的6次方，即100万种。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "输入How are you，写出输出结果。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\n    string str;int i=0,ans=1;\n    getline(cin,str);\n    while(i<str.size()){\n        if(i>0)\n            if(str[i]==32 && str[i-1]!=32) ans++;\n        i++;\n    }\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "3",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "原程序从1开始，在非空格后的空格处计数。本题输入有三个单词。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 9,
        "prompt": "读入一行凯撒加密英文并解密：字母向前移3位，越过A或a时循环，非字母原样保留。原图片重复追加字母的问题已修正为每个字符只追加一次，依据下方程序完成。",
        "reference": "#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\n    char s;string str1,str2;\n    getline(cin,str1);int i;\n    for(i=0;i<str1.size();i++){\n        s=str1[i];\n        if((s>='a'&&s<='z')||(s>='A'&&s<='Z')){\n            s-=3;\n            if((s>'Z'&&s<'a')||s<'A') s+=26;\n        }\n        else s=str1[i];\n        str2+=s;\n    }\n    cout<<str2;\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "Khoor Zruog!\n",
            "output": "Hello World!"
          },
          {
            "input": "ABC abc XYZ xyz\n",
            "output": "XYZ xyz UVW uvw"
          },
          {
            "input": "123 + 456\n",
            "output": "123 + 456"
          },
          {
            "input": "D d\n",
            "output": "A a"
          }
        ],
        "hint": "解密要向前移3位；大小写分别循环，空格和标点保持原样。",
        "explanation": "原图片在字母分支和循环末尾各追加一次，导致字母重复。这里删除分支内的重复追加，保留原解密判断逻辑。"
      }
    ]
  },
  "68": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "下列关于计算机病毒的描述正确的是哪项？",
        "options": [
          "人感冒可能使计算机感染并发展成计算机病毒",
          "组装时有灰尘就会产生计算机病毒",
          "计算机病毒实质上是一段计算机程序",
          "计算机病毒只能通过计算机网络传播"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "计算机病毒是程序，不是生物病毒或灰尘。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    char s1[]=\"study\",s2[]=\"student\";\n    int i,ans=0;\n    for(i=0;s1[i]!='\\0' && s2[i]!='\\0';i++)\n        if(s1[i]==s2[i]) ans++;\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "4",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "相同位置的s、t、u、d共4个；第5个位置y与e不同。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "胡萝卜少于50根：两根一组余1，三根一组余2，七根一组余5。按原筛选数组程序输出所有可能数量。",
        "code": "#include <iostream>\n#include <cstring>\nusing namespace std;\nint main()\n{\n    bool a[50];int i,b[3]={1,2,5};\n    memset(a,true,sizeof(a));\n    for(i=1;i<50;i++) if(i%2!=b[0]) a[i]=false;\n    for(i=1;i<50;i++) if(i%3!=b[1]) {{0}};\n    for(i=1;i<50;i++) if(i%7!=b[2]) a[i]=false;\n    for(i=1;i<50;i++) if({{1}}) cout<<i<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：排除不满足余数的数量（分号已给出）"
          },
          {
            "label": "第二处：通过全部筛选的条件"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "5\n47"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填a[i]=false、a[i]。需要输出5和47两个可能值。"
      }
    ]
  },
  "69": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "按原课件的传统双字节汉字编码约定，计算机内部存储和处理汉字信息用哪项？本题不将此约定推广到所有字符编码。",
        "options": [
          "十个字节的十进制编码",
          "两个字节的二进制编码",
          "两个字节的十进制编码",
          "十个字节的二进制编码"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本题按原课件双字节约定回答；不同字符编码的字节长度需另外判断。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入5 3 9，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a[3],ans=0;\n    for(int i=0;i<3;i++) cin>>a[i];\n    ans+=a[0]*(a[0]>a[1]&&a[0]>a[2]);\n    ans+=a[1]*(a[1]>a[0]&&a[1]>a[2]);\n    ans+=a[2]*(a[2]>a[0]&&a[2]>a[1]);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "9",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "只有9严格大于另两个数，其余乘以false即0。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "年年说自己第二、小风第三；小风说老师第三；老师说小风不是第三。四个判断中三个正确，三人各占第一、第二、第三，输出名次。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int teacher,Nian,Feng;\n    for(teacher=1;teacher<=3;teacher++)\n        for(Nian=1;{{0}};Nian++)\n            for(Feng=1;Feng<=3;Feng++){\n                if(((Nian==2)+({{1}})+(teacher==3)+(Feng!=3))==3)\n                    if(Nian*Feng*teacher==1*2*3){\n                        cout<<\"菲菲老师： \"<<teacher<<endl;\n                        cout<<\"年年： \"<<Nian<<endl;\n                        cout<<\"小风： \"<<Feng<<endl;\n                    }\n            }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：枚举年年名次的条件"
          },
          {
            "label": "第二处：年年关于小风的判断"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "菲菲老师： 3\n年年： 2\n小风： 1"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填Nian<=3、Feng==3。布尔判断转为0或1，和为3表示三个判断正确。"
      }
    ]
  },
  "70": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "保障计算机数据安全，下列做法不正确的是哪项？",
        "options": [
          "不使用非法复制的软件",
          "对重要程序和数据备份",
          "不使用计算机",
          "安装杀毒软件"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "应在正常使用中采取保护措施，而不是用不使用计算机替代数据安全管理。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "输入10，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,n;long long sum[2],ans;\n    sum[0]=0;sum[1]=1;cin>>n;\n    for(i=1;i<=n;i++){\n        sum[1]*=i;\n        while(sum[1]%10==0){sum[1]/=10;sum[0]++;}\n        sum[1]%=1000;\n    }\n    ans=sum[0];cout<<ans<<endl;\n    return 0;\n}",
        "expected": "2",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "原程序记录乘积末尾被除去的0。输入10得到10!末尾两个0。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 8,
        "prompt": "10个小朋友围成一圈，从编号1开始报数，报到正整数n的人退出，下一个人重新报数。按原数组模拟链表程序输出全部出圈编号。",
        "reference": "#include <iostream>\nusing namespace std;\nint main()\n{\n    const int M=10;int i,j,p,n;int a[M+1];\n    for(i=1;i<=M;i++) a[i]=i+1;\n    a[M]=1;cout<<\"n=\";cin>>n;p=M;\n    for(i=1;i<=M;i++){\n        for(int j=1;j<=n-1;j++) p=a[p];\n        cout<<a[p]<<\" \";a[p]=a[a[p]];\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "1",
            "output": "n=1 2 3 4 5 6 7 8 9 10 "
          },
          {
            "input": "2",
            "output": "n=2 4 6 8 10 3 7 1 9 5 "
          },
          {
            "input": "3",
            "output": "n=3 6 9 2 7 1 8 5 10 4 "
          },
          {
            "input": "10",
            "output": "n=10 1 3 6 2 9 5 7 4 8 "
          }
        ],
        "hint": "a[i]存下一个编号，p是待退出者的前驱；a[p]=a[a[p]]移除退出者。",
        "explanation": "原图片提供完整实现，这里补齐头文件和main。输出保留n=提示及每个编号后的空格。"
      }
    ]
  }
});
