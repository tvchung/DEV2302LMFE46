// Biến / hằng
// Biến: var , let 

var name='Chung Trịnh'; // khai báo và gán giá trị
console.log("Xin chào,", name);
// gán lại
name = "Devmaster Academy";
console.log("Xin chào,", name);
// khai báo lại
var name="Hello, Javascript";
console.log("Xin chào,", name);

// Khai báo biến với let 
let company = "devmaster.edu.vn";
console.log("Hello, ", company);
company = "devmaster.vn";
console.log("Hello, ", company);
// let company = "devmaster.edu.vn"; => error
console.log("Hello, ", company);


// khai báo hằng=> không khai báo lại, không gán lại
const PI=3.1415;
console.log("PI:",PI);

// const PI=12313.1; // error
// PI=3.141555;
console.log("PI:",PI);