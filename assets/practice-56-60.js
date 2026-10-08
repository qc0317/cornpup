window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
  "56": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "家用扫地机器人自动避障、清扫和自动充电，主要应用了哪项信息技术？",
        "options": [
          "人工智能技术",
          "网络技术",
          "多媒体技术",
          "数据管理技术"
        ],
        "answer": 0,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "这些功能需要感知环境并根据条件行动。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j;char t='A';\n    for(i=1;i<=3;i++){\n        for(j=1;j<=i;j++) cout<<t;\n        cout<<endl;t++;\n    }\n    return 0;\n}",
        "expected": "A\nBB\nCCC",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "每行重复输出当前字母i次；行末换行，字母增加。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "完善原课件程序，逐行输出0、12、345、6789。原代码中的setw(40)保留：每行第一个数字前有39个空格，其余数字紧接着输出。",
        "code": "#include <iostream>\n#include <iomanip>\nusing namespace std;\nint main()\n{\n    int i,j,t=0;\n    for(i=1;{{0}};i++){\n        cout<<setw(40);\n        for(j=1;j<=i;j++){cout<<t;{{1}};}\n        cout<<{{2}};\n    }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：外层循环条件"
          },
          {
            "label": "第二处：下一个数字（分号已给出）"
          },
          {
            "label": "第三处：每行结束后的输出"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "                                       0\n                                       12\n                                       345\n                                       6789"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填i<=4、t++、endl。外层控制四行，内层控制每行数字个数。setw(40)只影响下一次输出。",
        "figure": {
          "type": "text",
          "text": "0\n12\n345\n6789"
        }
      }
    ]
  },
  "57": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 5,
        "prompt": "下列不属于物联网应用的是哪项？",
        "options": [
          "手机远程遥控家中电器的运行",
          "电视遥控器遥控电视",
          "高速公路收费站ETC通道",
          "手机远程遥控蔬菜大棚的温度"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "普通电视遥控器直接控制电视，不需要物联网连接。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 5,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,ans=0;\n    for(i=1;i<=3;i++)\n        for(j=1;j<=5;j++) ans++;\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "15",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "外层3次，每次内层5次，所以共增加15。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 6,
        "prompt": "按1/1；1/2、2/2；1/3、2/3、3/3；……的顺序，求9/99排第几位。保持原序列中的分子、分母，不约分。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,ans=0;\n    for(i=1;i<=99;i++)\n        for(j=1;j<=i;j++){\n            {{0}};\n            if(i==99 && j==9) {{1}};\n        }\n    cout<<ans<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：计入当前分数（分号已给出）"
          },
          {
            "label": "第二处：停止当前内层循环（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "4860"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填ans++、break。前98行共4851项，再计第99行前9项。"
      }
    ]
  },
  "58": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "通过搜索到的WiFi信号上网，应用了哪项技术？",
        "options": [
          "虚拟现实",
          "无线网络",
          "网络安全",
          "人工智能"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "WiFi使用无线网络连接。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,ans=0;\n    for(i=1;i<=3;i++)\n        for(j=1;j<=5;j++) ans+=i;\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "30",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "每个i累加5次，总和5×(1+2+3)=30。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "输入正整数n，求1⁴+2⁴+…+n⁴。完善原课件的四次方累加程序。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,n;long long sum,sumn;sum=0;\n    cout<<\"n=\";cin>>n;\n    for(i=1;i<=n;i++){\n        {{0}};\n        for(j=1;j<=4;j++) sumn*=i;\n        {{1}};\n    }\n    cout<<sum<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：初始化当前乘积（分号已给出）"
          },
          {
            "label": "第二处：累加当前四次方（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "1",
            "output": "n=1"
          },
          {
            "input": "3",
            "output": "n=98"
          },
          {
            "input": "5",
            "output": "n=979"
          },
          {
            "input": "10",
            "output": "n=25333"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填sumn=1、sum+=sumn。每次外层循环都重新建立乘积。"
      }
    ]
  },
  "59": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 8,
        "prompt": "原课件列出以下木马描述。B、C均描述了恶意程序或远程控制，选择其中任一正确描述即可；D的“任何时间”过于绝对。",
        "options": [
          "指木头做的马",
          "是指计算机中非常隐秘的恶意程序，能直接对计算机产生危害",
          "木马通过特定程序控制另一台计算机",
          "如果中了木马，该计算机任何时间都会被木马控制"
        ],
        "answer": 1,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "本题保留原选项含义，B与C都能作为正确描述，不将另一种正确表述判错。",
        "answers": [
          1,
          2
        ]
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 8,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,ans=0;i=1;\n    while(i<=3){\n        for(j=1;j<=5;j++) ans+=j;\n        i++;\n    }\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "45",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "内层每次增加1+2+3+4+5=15，外层重复3次。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 9,
        "prompt": "求三位数：个位大于百位，百位大于十位，各位数字之和等于各位数字之积。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int ge,shi,bai,ans=0;\n    for(shi=1;shi<=7;shi++)\n        for(bai=shi+1;bai<=8;bai++)\n            for(ge=bai+1;ge<=9;ge++)\n                if({{0}}){\n                    {{1}};\n                    cout<<ans<<endl;\n                }\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：数字和等于数字积的条件"
          },
          {
            "label": "第二处：组成三位数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "213"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填ge+shi+bai==ge*shi*bai、ans=bai*100+shi*10+ge。注意百位是bai，十位是shi。"
      }
    ]
  },
  "60": {
    "version": 1,
    "questions": [
      {
        "id": "q1",
        "number": 1,
        "type": "choice",
        "page": 6,
        "prompt": "(1001)₂−(101)₂的结果是哪项？",
        "options": [
          "(101)₂",
          "(1000)₂",
          "(4)₁₀",
          "(5)₁₀"
        ],
        "answer": 2,
        "hint": "回顾本课的概念，逐项比较。",
        "explanation": "1001₂=9，101₂=5，差为十进制4。"
      },
      {
        "id": "q2",
        "number": 2,
        "type": "output",
        "page": 6,
        "prompt": "阅读程序，写出输出结果。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,ans=0;i=1;\n    while(i<=3){\n        j=1;\n        do{ans+=i*i;j++;}while(j<=5);\n        i++;\n    }\n    cout<<ans<<endl;\n    return 0;\n}",
        "expected": "70",
        "hint": "按语句顺序记录变量变化，再检查输出文字与空格。",
        "explanation": "每个平方累加5次，5×(1+4+9)=70。"
      },
      {
        "id": "q3",
        "number": 3,
        "type": "blanks",
        "page": 7,
        "prompt": "用0–7八个数字组成三位数的奇数，输出所有数和个数。原题未限制数字重复，按原循环允许重复。",
        "code": "#include <iostream>\nusing namespace std;\nint main()\n{\n    int b,s,g,shu,count=0;\n    for(b=1;b<=7;b++)\n        for(s=0;s<=7;{{0}})\n            for(g=1;g<=7;g+=2){\n                shu=b*100+s*10+g;\n                cout<<shu<<\" \";{{1}};\n            }\n    cout<<endl;cout<<\"个数： \"<<count<<endl;\n    return 0;\n}",
        "fields": [
          {
            "label": "第一处：下一个十位数字"
          },
          {
            "label": "第二处：统计个数（分号已给出）"
          }
        ],
        "tests": [
          {
            "input": "",
            "output": "101 103 105 107 111 113 115 117 121 123 125 127 131 133 135 137 141 143 145 147 151 153 155 157 161 163 165 167 171 173 175 177 201 203 205 207 211 213 215 217 221 223 225 227 231 233 235 237 241 243 245 247 251 253 255 257 261 263 265 267 271 273 275 277 301 303 305 307 311 313 315 317 321 323 325 327 331 333 335 337 341 343 345 347 351 353 355 357 361 363 365 367 371 373 375 377 401 403 405 407 411 413 415 417 421 423 425 427 431 433 435 437 441 443 445 447 451 453 455 457 461 463 465 467 471 473 475 477 501 503 505 507 511 513 515 517 521 523 525 527 531 533 535 537 541 543 545 547 551 553 555 557 561 563 565 567 571 573 575 577 601 603 605 607 611 613 615 617 621 623 625 627 631 633 635 637 641 643 645 647 651 653 655 657 661 663 665 667 671 673 675 677 701 703 705 707 711 713 715 717 721 723 725 727 731 733 735 737 741 743 745 747 751 753 755 757 761 763 765 767 771 773 775 777 \n个数： 224"
          }
        ],
        "hint": "结合题目条件完善程序；表达式或语句可以有不同的正确写法。",
        "explanation": "可填s++、count++。百位7种、十位8种、个位4种，共224个。"
      }
    ]
  }
});
