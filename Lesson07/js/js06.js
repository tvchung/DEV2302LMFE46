// các toán tử số học; *, /, +, -, %, ++, --
let a=123;
let b=112;

kq = a*b;
console.log(a,"*",b,"=",kq);
kq = a/b;
console.log(a,"/",b,"=",kq);
kq = a+b;
console.log(a,"+",b,"=",kq);
kq = a-b;
console.log(a,"-",b,"=",kq);
kq = a%b;
console.log(a,"%",b,"=",kq);
kq = a++; //kq = 123? a=124
console.log("a++",kq); // 123
console.log("a=",a);// 124
kq= ++a; // kq=125; a=125
console.log("++a",kq); // 125
console.log("a=",a);// 125