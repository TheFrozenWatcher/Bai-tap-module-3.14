//Tính tổng các số trong khoảng từ 10 đến 20, 20 đến 30, 30 đến 40
let total1 = 0;
for (i = 10; i < 21; i++) { total1 = total1 + i };
console.log(total1);

let total2 = 0;
for (i = 20; i < 31; i++) { total2 = total2 + i };
console.log(total2);

let total3 = 0;
for (i = 30; i < 41; i++) { total3 = total3 + i };
console.log(total3);
//=> Code bị lặp nhiều lần
// Khó bảo trì
// =>function ra đời để giải quyết vấn đề trên

// Cú pháp khai báo hàm
// fuction tên_hàm (tham_số) {
// logic code
// }

//Viết hàm tính tổng 2 số a và b
// const a = 10;
// const b = 20;
// const c = a + b;
// function sum(a, b) {
//     console.log(a + b);
// };

// function total(a, b) {
//     let totalNumber = 0;
//     for (let i = a; i <= b; i++) { totalNumber += i };
//     return totalNumber;
// };
// console.log(total(3, 5));

// 1. Viết hàm tính tổng các số trong mảng [10,20,15,30,80,65]
//2. Viết hàm tìm giá trị lớn nhất trong mảng
//3. Viết hàm đảo ngược 1 chuỗi
//4. Viết hàm kiểm tra số chẵn và hàm kiểm tra số lẻ
// let newArray = [10, 20, 15, 30, 80, 65];
// let oddEvenArray = "";
// function odd_even(myArray) {
//     for (let i = 0; i < myArray.length; i++) {
//         if (newArray[i] % 2 === 0) { oddEvenArray.push(" Số chẵn ") }
//         else { oddEvenArray.push(" Số lẻ ") }
//     };
//     return oddEvenArray;
// };

// console.log("Kiểm tra chẵn lẻ: ", oddEvenArray);

// newArray.sort(); //sếp theo thứ tự
// console.log(newArray);
// function sum(myArray) {
//     let totalNumber = 0;
//     for (let i = 0; i < newArray.length; i++) { totalNumber += myArray[i] };
//     return totalNumber;
// };
// console.log("Tổng của mảng = ", sum(newArray));
// function largestNumber(myArray) { return myArray[newArray.length - 1] };
// console.log("Số lớn nhất là ", largestNumber(newArray));

// function reverseArray(myArray) {
//     let reverseArray = myArray.reverse();
//     return reverseArray;
// };

// console.log("Đảo ngược mảng ", reverseArray(newArray));

//Trong JS thường có 3 loại function
//1. Declaration 
//2. Expression
//3. Arrow
//4. Generation (redux saga)

//1. Declaration function
//CÚ pháp: function tên_function (tham số) {logic code}
// Có cơ chế hosting
// Phạm vi sử dụng biến:  những biến được khai báo với các từ khóa let, const trong function thì phạm vi sử dụng của biến đó chỉ nằm
// trong khối block (function)
// Nếu khai báo 2 function loại này trùng tên nhau thì sẽ lấy giá trị hàm được khai báo sau

//Xây dựng hàm tính tổng a và b
function sum(a, b) { return a + b };
console.log(sum(1, 3));

//2. Expression function
// Cú pháp : let tên_hàm = function (tham_số) {logic code}
// Không có cơ chế hosting
// Nếu khai báo với từ khóa var thì có thể khai báo lại được và nó sẽ lấy hàm được khai báo sau cùng 

let subtraction = function (a, b) { return a - b };
console.log(subtraction(4, 5));

//3. Arrow function
// Cú pháp: từ_khóa_khai báo tên_hàm = (tham_số) => {logic code}
// Không có cơ chế hosting
// Nên sử dụng với từ khóa const, ko nên dùng với var

// Khi sử dụng hàm thì yêu cầu phải bắt try-catch cho hàm để tránh việc hàm bị dừng đột ngột, làm chương trình bị chết
// Khi chương trình thành công thì nó sẽ lọt vào try
// Khi có lỗi xảy ra thì nó sẽ lọt vào catch
// Khi thành công hoặc thất bạt thì mặc định sẽ chạy vào finally
const multiplication = (a, b) => { return a * b };
console.log(multiplication(10, 11));




