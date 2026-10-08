window.CPP_PRACTICE=window.CPP_PRACTICE||{};
Object.assign(window.CPP_PRACTICE,{
 '02':{version:1,questions:[
  {id:'q1',type:'choice',page:10,number:1,prompt:'C++ 编写的源程序扩展名为（ ）。',options:['cpp','doc','jpg','mp3'],answer:0,hint:'区分源程序、文档、图片和音频文件。',explanation:'C++ 源程序常用 .cpp 扩展名。'},
  {id:'q2',type:'program',page:10,number:2,prompt:'按照课件中的程序输入源代码，再编译并运行。如果有错误，检查并改正。',reference:'int main()\n{\n    ;\n    return 0;\n}',fields:[{label:'输入完整的 C++ 程序',multiline:true}],tests:[{input:'',output:''}],hint:'程序要有 main 函数，注意英文括号、花括号和分号。',explanation:'这段程序没有输出语句。成功编译、正常结束且没有输出，符合原题。'}
 ]},
 '03':{version:1,questions:[
  {id:'q1',type:'choice',page:7,number:1,prompt:'计算机系统由（  ）组成。',options:['主板、显示器、键盘、鼠标','操作系统和应用软件','主机、输出设备、输入设备','硬件系统和软件系统'],answer:3,hint:'既要包括可以看见的设备，也要包括运行的软件。',explanation:'完整的计算机系统包括硬件系统和软件系统。'},
  {id:'q2',type:'output',page:7,number:2,prompt:'阅读程序，写出输出结果。',code:'#include <iostream>\nusing namespace std;\nint main()\n{\n    cout<<"99+1=";\n    cout<<100;\n    return 0;\n}',expected:'99+1=100',hint:'引号内的文字原样输出；两条 cout 之间没有换行。',explanation:'第一条输出 99+1=，第二条紧接着输出 100。'},
  {id:'q3',type:'intro',page:7,number:3,prompt:'完善程序，做一个自我介绍。填写“大家好，”后面的介绍，可以按 Enter 分行介绍名字和兴趣，再运行看看。',code:'#include <iostream>\nusing namespace std;\nint main()\n{\n    cout<<"大家好，{{0}}";\n    return 0;\n}',fields:[{label:'你的自我介绍（按 Enter 换行）',multiline:true,maxLength:100}],hint:'可以介绍名字、兴趣或你想做的编程作品。',explanation:'cout 可以把你的自我介绍输出到屏幕。介绍没有唯一答案，内容完整即可。'}
 ]},
 '04':{version:1,questions:[
  {id:'q1',type:'choice',page:8,number:1,prompt:'下列（  ）是非法的标识符。',options:['3y','b5','H_1','p7y'],answer:0,hint:'标识符可以包含数字，但开头有要求。',explanation:'标识符不能以数字开头，所以 3y 不合法。'},
  {id:'q2',type:'output',page:8,number:2,prompt:'阅读程序，写出输出结果。',code:'#include <iostream>\nusing namespace std;\nint main()\n{\n    int i,j,k;\n    i=8;\n    j=9;\n    k=i*j;\n    cout<<i;\n    cout<<j<<k;\n    return 0;\n}',expected:'8972',hint:'先算出 k，再按 cout 的顺序连接输出；程序没有输出空格。',explanation:'k=8×9=72，依次输出 8、9、72，连起来是 8972。'},
  {id:'q3',type:'blanks',page:9,number:3,prompt:'实验小学的操场长120米、宽80米。完善程序，求操场的周长。',code:'#include <iostream>\nusing namespace std;\nint main()\n{\n    int a,b,c;\n    a=120;\n    b=80;\n    c={{0}};\n    cout<<c;\n    return 0;\n}',fields:[{label:'c 后面的周长表达式'}],tests:[{input:'',output:'400'}],hint:'周长等于两条长与两条宽的总和。这里填写表达式，不需要再写 c=。',explanation:'可以填写 (a+b)*2，也可以写成 2*a+2*b。周长为400米。'}
 ]},
 '05':{version:1,questions:[
  {id:'q1',type:'blanks',page:7,number:1,prompt:'明明11岁，爸爸和爷爷的年龄依次大25岁。完善程序，依次输出三个人的年龄。',code:'#include <iostream>\nusing namespace std;\nint main()\n{\n    int n;\n    n=11;\n    cout<<n<<endl;\n    {{0}}\n    cout<<n<<endl;\n    n=n+25;\n    {{1}}\n    return 0;\n}',fields:[{label:'第一处：把年龄增加25岁的完整语句'},{label:'第二处：输出爷爷年龄的完整语句'}],tests:[{input:'',output:'11\n36\n61'}],hint:'第一处可以用赋值或复合赋值；第二处需要 cout，并注意分号。',explanation:'年龄依次是11、36、61。第一处可写 n=n+25; 或 n+=25;，第二处可写 cout<<n<<endl;。'},
  {id:'q2',type:'choice',page:8,number:2,prompt:'语句 x=++b; 与下面（  ）项等价。',options:['++b; x=b;','x=b; ++b;','b++; b=x;','x=b; ++x;'],answer:0,hint:'前置自增先改变 b，再把新的值交给 x。',explanation:'++b 在赋值前执行，等价于先 ++b;，再 x=b;。'},
  {id:'q3',type:'output',page:8,number:3,prompt:'阅读程序，写出输出结果。',code:'#include <iostream>\nusing namespace std;\nint main()\n{\n    int i;\n    i=10;\n    i--;\n    --i;\n    i--;\n    i++;\n    cout<<i<<endl;\n    return 0;\n}',expected:'8',hint:'这些自增、自减语句独立执行，按顺序记录 i 的值。',explanation:'i 的变化为10→9→8→7→8，最后输出8。'}
 ]}
});
