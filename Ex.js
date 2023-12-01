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