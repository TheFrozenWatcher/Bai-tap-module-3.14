// //Ex 1.1
// function alertMessage() { return "Xin chao" };
// alert(alertMessage()); 

// // Ex 1.2

// function increase1(a) { return a + 1 };
// let number = +prompt("Nhập số");
// console.log("Số cộng 1 = ", increase1(number));

// // Ex 1.3
// function biggerOrSum = function ()

//1. Viết hàm tính tổng 2 số
function sum(a, b) { return a + b };
console.log(sum(1, 3));
//2. Viết hàm nhận 1 mảng số nguyên và trả về tổng các số đó

function arrayTotal(array) {
    let totalArray = 0;
    for (let i = 0; i < array.length; i++) { totalArray += array[i]; };
    return totalArray;
};
let array1 = [1, 2, 3, 5, 6];
console.log(arrayTotal(array1));

// 3. Viết một hàm JavaScript để kiểm tra xem một số có phải là số nguyên tố hay không.
function isPrime(a) {
    if (a > 1) {
        if (a === 2) { return "2 là số nguyên tố" }
        else {
            for (let i = 2; i < a; i++) {
                if (a % i == 0) { return `${a} không là số nguyên tố` }
                else { return `${a} là số nguyên tố` }
            }
        }
    }
    else { return `${a} không là số nguyên tố` }
};
console.log(isPrime(21));

//. 4. Viết một hàm JavaScript để đảo ngược một chuỗi.
function stringReverse(string) {
    let reverseStr = string.split("").reverse().join("");
    return reverseStr;
};
let string1 = "124njchs";
console.log(stringReverse(string1));

// Bài tập nâng cao:
// 5. Viết một hàm JavaScript nhận vào một mảng các số và trả về một mảng mới chỉ chứa số chẵn.
function returnEvenNumber(array) {
    let evenNumberArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evenNumberArray.push(array[i]);
        }
    };
    return evenNumberArray;
};
let array11 = [1, 2, 3, 4, "jsj,", 483, 24];
console.log(returnEvenNumber(array11));

// 6. Viết một hàm JavaScript nhận vào một chuỗi và trả về số lượng ký tự trong chuỗi.
function characterNumber(string) {
    return string.length
};
let string123 = "1h dfhhgqo rhd";
console.log(characterNumber(string123));

// 7. Viết một hàm JavaScript nhận vào một mảng các chuỗi và trả về một mảng mới chỉ
// chứa các chuỗi đã được viết hoa.
function filterUpperCaseString(array) {
    let UpperCaseArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i].toUpperCase()) {
            UpperCaseArray.push(array[i]);
        }
    };
    return UpperCaseArray;
};

let array2 = ["1284", "12na", "ABC", "afhDC", "AHDNS", "ajQMn"];
console.log(filterUpperCaseString(array2));
//8 Viết một hàm JavaScript nhận vào một mảng số và trả về mảng mới
// chứa các số đã được sắp xếp theo thứ tự tăng dần.
function sortNumbers(array) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
var array3 = [4, 2, 8, 1, 6];
console.log(sortNumber(array3));

//9 Viết một hàm JavaScript nhận vào một số nguyên dương và trả về mảng các số nguyên tố nhỏ hơn số đó.
function findPrimesSmallerThan(a) {
    var primes = [];

    // Function to check if a number is prime
    function isPrime(a) {
        if (a < 2) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(a); i++) {
            if (a % i === 0) {
                return false;
            }
        }
        return true;
    }

    // Find prime numbers smaller than n
    for (var i = 2; i < a; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
};

console.log(findPrimesSmallerThan(20));


//Viết hàm kiểm tra số lượng ký tự mật khẩu, nếu mật khẩu nhập vào ngắn hơn 8 ký tự thì in ra là
//“Mật khẩu không được ngắn hơn 8 ký tự), nếu mật khẩu nhập lớn hơn 8 ký tự thì in ra nội dung “Đăng ký tài khoản thành công”

let newPassword = prompt("Nhập mật khẩu");
const checkPasswordLength = (password) => {
    if (password.length >= 8) {
        return true
    } else { return false }
};
if (!checkPasswordLength(newPassword)) { console.log("Mật khẩu không được ngắn hơn 8 ký tự") }
else { console.log("Đăng ký tài khoản thành công") };

//Tìm hiểu cách để chặn việc nhập ngày tháng năm bé hơn ngày hiện tại
let scheduledDate = +prompt("Nhập ngày");
const checkDate = (date) => {
    let today = new Date();
    if (date >= today) { return true }
    else { return false }
};
if (checkDate(scheduledDate)) { console.log("Ngày hợp lệ"); }
else { console.log("Ngày nhập vào phải lớn hơn hôm nay"); }

// Xây dựng một hàm nhập vào một chuỗi và một ký tự bất kỳ, giá trị trả ra là một chuỗi mới có ký tự vừa nhập
// vào sẽ là một chữ cái in hoa. Ví dụ: Nhập chuỗi “lâm xấu trai lắm” thành chuỗi “Lâm xấu trai Lắm”.

let myString = prompt("Nhập chuỗi");
console.log(myString);
const convertRandomLowertoUpper = (input) => {
    let string = input.toString();
    let newString = "";
    let lower = "m";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === lower) { newString = newString.concat(lower.toUpperCase()) }
        else { newString = newString.concat(string[i]) }
    };
    return newString
};

console.log(convertRandomLowertoUpper(myString));

// Xây dựng hàm chuyển đổi từ độ C sang độ F và ngược lại từ độ F sang độ C.
// Tạo hàm convertTemperature nhận vào 3 tham số, tham số 1 là giá trị cần chuyển đổi,
// tham số 2 là đơn vị gốc (có thể là độ C hoặc độ F) ,
// tham số 3 là giá trị chuyển đổi qua ( có thể là độ F hoặc độ C)

let temp = +prompt("Nhập nhiệt độ ");
let deg1 = prompt("Nhập đơn vị nhiệt độ gốc");
let deg2 = prompt("Nhập đơn vị nhiệt độ chuyển đổi");
const convertTemperature = (unit1, temparature, unit2) => {
    let convertedTemp;
    if (unit1 === "C" && unit2 === "F") { convertedTemp = temparature * 1.8 + 32 }
    else if (unit1 === "F" && unit2 === "C") { convertedTemp = (temparature - 32) / 1.8 }
    else if (unit1 === unit2 && (unit1 === "C" || unit1 === "F")) { convertedTemp = temparature }
    else { return false };
    return convertedTemp
};
if (!convertTemperature(deg1, temp, deg2)) { console.log("Nhập lại"); }
else { console.log(convertTemperature(deg1, temp, deg2)); };

// Xây dựng hàm để đếm số lần xuất hiện của một ký tự. Ví dụ khi mình gọi hàm: count(“a”, “anh day”) thì nó sẽ in ra là 2
const count = (char, string) => {
    let countChar = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string[i] === char) { countChar++ }
    };
    return countChar;
};

let string10 = "xmv bguamjcjf a;fchucacfcn";
console.log(count("a", string1));

// Viết hàm đặt tên là findIndex() nhập vào một mảng số nguyên và một giá trị,
// trả về vị trí xuất hiện của phần tử đó trong mảng, nếu không tìm thấy thì trả về -1.

function findIndex(a, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === a) { return i }
    };
    { return -1 }
};
let array10 = [1, "c", "v", "s", 34, 5, 2, 5, 2];
console.log(findIndex("s", array1));
