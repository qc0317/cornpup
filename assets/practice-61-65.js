window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "61": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "下列不属于网络连接设备的是哪项？",
        "options": [
          "网卡",
          "交换机",
          "TCP/IP",
          "路由器"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "TCP/IP是协议，其他三项是设备。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,p,ans=0;i=1;\n    do{\n        p=1;j=1;\n        while(j<=5){p=p*j;j++;}\n        ans=ans+p;i++;\n    }while(i<=3);\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "360",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "每轮内层计算1×2×3×4×5=120，外层累加3次。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "读入大于等于2的正整数，按原程序输出质因数乘积。本程序的试除条件适用于此范围。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int n,i;\n    {{0}};\n    cout<<n<<\"=\";\n    for(i=2;n!=1;i++){\n        while(n%i==0){\n            cout<<i;\n            {{1}};\n            if(n!=1) cout<<\"*\";\n        }\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：读入整数（分号已给出）"
          },
          {
            "label": "第二处：除去已输出的因子（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "12",
            "output": "12=2*2*3"
          },
          {
            "input": "2",
            "output": "2=2"
          },
          {
            "input": "17",
            "output": "17=17"
          },
          {
            "input": "360",
            "output": "360=2*2*2*3*3*5"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填cin>>n、n/=i。同一个质因数可能出现多次，必须由while反复除去。"
      }
    ]
  },
  "62": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "原数组a={99,85,97,92,100}。表达式a[0]++自身的值是什么？注意与执行后a[0]的值区分。",
        "options": [
          "99",
          "100",
          "97",
          "92"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "后置++先产生旧值99，再把数组元素改成100。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 9,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,a[10],ans=0;\n    for(i=0;i<10;i++) a[i]=i;\n    ans=a[0]+a[9];\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "9",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "数组存入0至9，a[0]+a[9]=9。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 10,
        "prompt": "输入5个整数，按原程序用打擂台方法找出最小值。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a[5],min,i;\n    for(i=0;i<5;i++) cin>>a[i];\n    {{0}};\n    for(i=1;i<5;i++)\n        if(a[i]<min) min=a[i];\n    cout<<\"最小的数： \"<<{{1}}<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：初始化当前最小值（分号已给出）"
          },
          {
            "label": "第二处：输出最小值"
          }
        ],
        "tests": [
          {
            "input": "8 3 6 1 9",
            "output": "最小的数： 1"
          },
          {
            "input": "-2 -8 -1 -3 -4",
            "output": "最小的数： -8"
          },
          {
            "input": "5 5 5 5 5",
            "output": "最小的数： 5"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填min=a[0]、min。不要把最小值初始化为0，否则全为正数时结果会错。"
      }
    ]
  },
  "63": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "数组a={1,2,3,4,0}，a[a[2]]的值是什么？",
        "options": [
          "2",
          "3",
          "4",
          "0"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "先取a[2]=3，再取a[3]=4。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 7,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\n#include <string>\nusing namespace std;\nint main()\n{\n    int i,a[10],ans;\n    for(i=0;i<10;i++) a[i]=i;\n    for(i=1;i<10;i++) a[0]+=a[i];\n    ans=a[0];cout<<ans<<endl;\n    return 0;\n}",
        "expected": "45",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "a[0]从0开始累加1到9，得到45。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 8,
        "prompt": "按原课件程序：96扇门初始关闭，第i轮切换i的倍数门，共执行42轮。输出最后开着的门号及总数。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    bool a[97];\n    int i,j,{{0}};\n    for(i=1;i<=96;i++) a[i]=false;\n    for(i=1;i<=42;i++)\n        for(j=i;j<=96;j=j+i) a[j]=!a[j];\n    for(i=1;i<=96;i++)\n        if(a[i]){\n            {{1}};\n            cout<<{{2}}<<endl;\n        }\n    cout<<\"共有\"<<num<<\"扇门开着。 \"<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：声明并初始化开门计数器"
          },
          {
            "label": "第二处：计入一扇开门（分号已给出）"
          },
          {
            "label": "第三处：输出门号"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "1\n4\n9\n16\n25\n36\n43\n44\n45\n46\n47\n48\n50\n51\n52\n53\n54\n55\n56\n57\n58\n59\n60\n61\n62\n63\n65\n66\n67\n68\n69\n70\n71\n72\n73\n74\n75\n76\n77\n78\n79\n80\n82\n83\n84\n85\n87\n89\n91\n93\n95\n共有51扇门开着。"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填num=0、num++、i。保留原课件的42轮，不将它改成96轮；大于42的门需要按实际切换次数判断。"
      }
    ]
  },
  "64": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "在线性表的数组与链表存储结构中，下列哪项描述不正确？",
        "options": [
          "快速访问且很少插入删除时用数组",
          "经常插入删除元素时用链表",
          "链表可动态分配存储以适应增减",
          "固定数组可动态分配存储以适应增减"
        ],
        "answer": 3,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "这里比较原课件的固定数组与链表；固定数组的容量不能自行增长。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "输入1 2 3 4，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,b[4];\n    for(i=0;i<2;i++) cin>>b[i]>>b[i+2];\n    for(i=3;i>=0;i--) cout<<b[i]<<endl;\n    return 0;\n}",
        "expected": "4\n2\n3\n1",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "输入依次放入b[0]、b[2]、b[1]、b[3]，再倒序输出。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "a[0]代表菲菲老师，-1代表钥匙。完善原程序，沿数组中的下一个编号寻找钥匙。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a[6]={4,3,-1,5,1,2};\n    int i;cout<<\"老师\";\n    {{0}};\n    do{\n        cout<<\"--->\"<<i;\n        i=a[i];\n    }while({{1}});\n    cout<<endl;cout<<\"钥匙找到了\"<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：从老师指向的人开始（分号已给出）"
          },
          {
            "label": "第二处：尚未找到钥匙的条件"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "老师--->4--->1--->3--->5--->2\n钥匙找到了"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i=a[0]、i!=-1。更新后遇到-1就结束，不能访问a[-1]。"
      }
    ]
  },
  "65": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 7,
        "prompt": "将a={4,5,6}和b={6,5,4}从小到大冒泡排序，按课件第5页固定完成各趟、没有提前结束的循环，比较次数怎样？",
        "options": [
          "a比b多",
          "a和b一样多",
          "b比a多",
          "不确定"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "固定各趟的基础版本，两组都比较3次。若加入一趟无交换就停止的优化，次数会不同；不能混淆版本。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int b[6]={5,1,2,2,2,5};\n    int a[6]={0,0,0,0,0,0};\n    int i,temp;i=1;\n    while(i<=b[0]){temp=b[i];a[temp]++;i++;}\n    for(i=1;i<=b[0];i++) cout<<a[i];\n    return 0;\n}",
        "expected": "13001",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "统计值1出现1次、2出现3次、3和4为0次、5出现1次，输出没有分隔空格。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "program",
        "page": 9,
        "prompt": "输入5个数，用选择排序从大到小排列。依据原课件完整程序输入或完善代码，保留输入与排序后的提示语。",
        "reference": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int a[6],i,j,t;\n    cout<<\"输入5个数： \";\n    for(i=1;i<=5;i++) cin>>a[i];\n    for(i=1;i<=4;i++){\n        t=i;\n        for(j=i+1;j<=5;j++)\n            if(a[j]>a[t]) t=j;\n        if(t!=i){a[0]=a[i];a[i]=a[t];a[t]=a[0];}\n    }\n    cout<<\"排序后： \";\n    for(i=1;i<=5;i++) cout<<a[i]<<\" \";\n    return 0;\n}",
        "fields": [
          {
            "label": "完整C++程序",
            "multiline": true
          }
        ],
        "tests": [
          {
            "input": "126 80 98 158 204",
            "output": "输入5个数： 排序后： 204 158 126 98 80 "
          },
          {
            "input": "-2 -8 -1 0 -4",
            "output": "输入5个数： 排序后： 0 -1 -2 -4 -8 "
          },
          {
            "input": "5 5 3 5 3",
            "output": "输入5个数： 排序后： 5 5 5 3 3 "
          },
          {
            "input": "1 2 3 4 5",
            "output": "输入5个数： 排序后： 5 4 3 2 1 "
          }
        ],
        "hint": "每趟在剩余位置找到最大值的位置t，然后与a[i]交换。",
        "explanation": "原图片提供完整选择排序实现；这里补齐头文件和main。重复值和负数也应正确排列。"
      }
    ]
  }
});
