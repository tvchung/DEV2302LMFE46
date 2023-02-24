// Toán tử logic (hệ thập phân) && ; || ; ! 
// Toán tử logic (hệ nhị phân) & ; | ; ! 
let a=112;
let b=123;

kq = (a>0) && (b>10); // true
kq = (a>0) || (b>10); // true
kq = (a>1000) || (b>10); // true
kq = (a>1000) && (b>10); // false
kq = !(a>1234); // true

// toán tử đặc biệt
// ()?... : ...
kq = (a>100)?a:"Haha"; // 112
console.log(kq);
kq = (a<100)?a:"Haha"; // Haha
console.log(kq);

a=123;
b="123";
// typeof => xác định kiểu dữ liệu 
kq = typeof(a); // number
console.log(kq);
kq = typeof(b); // string
console.log(kq);
