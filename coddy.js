// =====================================================================================>
// Variables with conditional— &&, ||, !

/*
// Initialize variables
let has_license = true;
let has_space = false;
let has_experience = true;

// Calculate conditions
let can_sell_regular_pet = (has_license || has_experience) && !has_space;
let can_sell_exotic_pet = (has_license && has_experience) && !has_space;
let cannot_sell_any_pet = (!has_license && !has_experience) || has_space;

// Don't delete the lines below
console.log("Can sell regular pet:", !can_sell_regular_pet)
console.log("Can sell exotic pet:", !can_sell_exotic_pet)
console.log("Cannot sell any pet:", !cannot_sell_any_pet)
*/

/*
// Initialize variables
let has_license = true;
let has_insurance = false;
let has_experience = true;

// Calculate conditions
let can_drive_car = ((has_license && has_insurance) || (has_license && has_experience))
let can_drive_motorcycle = (has_license && !has_insurance && has_experience)
let cannot_drive_any = (!has_license || (has_insurance && !has_experience))

// Don't delete the lines below
console.log("Can drive car:", can_drive_car)
console.log("Can drive motorcycle:", !can_drive_motorcycle)
console.log("Cannot drive any:", cannot_drive_any)

*/


// =====================================================================================>
// if else statement

/*
let wind = prompt("Enter the Wind pressure:"); // Don't change this line
let condition = "unset";
// Type your code below
if (wind <= 8) {
    condition = "Calm";
} else if (wind >= 8 && wind <= 31) {
    condition = "Breeze"
} else if (wind >= 32 && wind <= 63) {
    condition = "Gale";
} else {
    condition = "Storm";
}

// Don't change the line below
console.log(`condition = ${condition}`);
*/

/*
let age = 20; // Don't change this line
// Type your code below

let remainingYears = 120 - age;

console.log(`${remainingYears} years till 120`)

*/
/*
let num = 1; // Don't change this line
// Type your code below
if (num === 1) {
    console.log("T");
} else if (num === 0) {
    console.log("F");
} else {
    console.log("Please input ones or zeros only");
}

*/

let length = 5 // Don't change this line
let width = 3.2 // Don't change this line

/*
// Write code below
length =+ parseFloat(length);
width =+ parseFloat(width);

let area = width * length;
let perimeter = 2 * (width + length);

console.log(`The area is: ${area} and the perimeter is: ${perimeter}`);

*/

/*
let billAmount = 64.3; // Don't change this line
let tipPercentage = 9.0; // Don't change this line
let numPeople = 2; // Don't change this line

// Type your code below
console.log("Bill Split Calculator");

let tipAmount = (tipPercentage / 100) * billAmount;
let totalAmountwithTip = tipAmount + billAmount;
let eachTotalAmount = totalAmountwithTip / numPeople;

console.log(`Total (including tip): $${totalAmountwithTip}`)
console.log(`Each person pays: $${eachTotalAmount}`)

*/
/*
for (let i = 3; i < 28; i++) {
    console.log(`Hello Coddy: ${i}`);
}
*/
/*
let number = 12; // Don't change this line

while (number >= 3.5) {
    number /= 2
    console.log(number);
}
*/

/*
for (let i = 3; i < 9; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
*/

// let n = 8;
// let result = 1;
// let i = 1;

/*
for (let i = 1; i <= n ; i++) {
    result *= i;
}
console.log(result);
*/
/*
while (i <= n) {
    result *= i;
    i++;
    console.log(result);
}
*/

/*
let n = 6;

for (let i = 1; i < n; i++) {
    console.log(i, n - i);
}
*/
/*
let n = 7;
for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(`${n} x ${i} = ${result}`);
}
*/
/*
let number = 2; // Don't change this line

while (number <= 100) {
    number *= 2;

}
console.log(number); // should be 160
*/
/*
// Write code here
for (let i = 1; i <= 20; i++) {
    console.log(i)
    if ((i % 3 === 0) && (i % 5 === 0)) {
        break;
    }
}
*/

/*
for (let i = 1; i <= 20; i++) {
    if ((i % 4 === 0) || (i % 2 === 0)) {
        continue;
    }
    console.log(i);
}

*/

/*
let count = 10;

// Add your do...while loop below
do {
    console.log(`Counting down: ${count}`);
    count -= 2;
} while (count >= 0)

*/
/*
let n = 12; // Don't change this line

// Write your code below
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        let j = n / i;
        console.log(i,j);
    }
}
*/

/*
let greet = () => {
    console.log("Hello");
}

greet ();
*/

/*
let n = 5;

let m = (n) => {
    
    for (let i = 1; i <= n; i++) {
        let result = 0;
        for (let j = 1; j <= 10000; j++) {
            result += j;
        }
        console.log(result);
    }
}

m(n);
*/

/*
let a = 3;
let b = 2;

let solu = (a, b) => {
    return a * b;
}

console.log(solu(a, b));

*/

/*
let num = 9234; // Don't change this line
// Type your code below
let square = (n) => {
    return n * n;
}

let result = square(num);
console.log(result);

*/
/*
let n = 5;

const sigma = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sigma(n))
*/

/*
// Type your code below
const calculateBMI = (weight, height) => {
    return weight / (height * height);
}

// Don't change the lines below
console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(80, 1.8));
*/

/*
const isValid = (username, password) => {
    if ((username === 'admin')) {
        return true;
    } else if ((username === 'user') && (password === 'qweasd')) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid('admin', 'nevcwoievnorivr'))
console.log(isValid('admin', ''))
console.log(isValid('user', 'nevcwoievnorivr'))
console.log(isValid('user', 'qweasd'))

*/

/*
let num1 = 3;
let num2 = 5;

const sumRange = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i; 
    }

    return `The sum of numbers from ${start} to ${end} is ${sum}.`
}

console.log(sumRange(num1, num2));
console.log(sumRange(1, 10));
*/
/*
const findMax = (num1, num2, num3) => {
    let maxNum = num1;
    if (num2 > maxNum) {
        maxNum = num2;
    }
    if (num3 > maxNum) {
        maxNum = num3
    }
    return maxNum;
}

console.log(findMax(1, 2, 3));
console.log(findMax(3, 3, 3));
console.log(findMax(3, 5, 3));
console.log(findMax(1, 0, 0));
console.log(findMax(1, 2, 0));
*/

/*
const calculateVolume = (length, width, height) => {
    return length * width * height;
}

console.log(calculateVolume(3, 4, 5));
console.log(calculateVolume(2, 2, 2));
console.log(calculateVolume(1, 4, 2));
console.log(calculateVolume(9, 8, 7));

*/

/*
const sumOfEvens = (n) => {
    let result = 0;
    if (n < 0) {
        return `The parameter should be positive integers`;
    }
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result += i;
        }
    }
    return result;
}

// console.log(sumOfEvents(-1));
// console.log(sumOfEvents(1));
// console.log(sumOfEvents(12));

console.log(sumOfEvens(5));
console.log(sumOfEvens(22));
console.log(sumOfEvens(9));
console.log(sumOfEvens(1));
console.log(sumOfEvens(99));
*/


/*
const reverseWord = (word) => {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }
    return reversedWord;
};

console.log(reverseWord('khan'));
*/

/*
let num = 3626; // Don't change this line

// Type your code below
console.log("Welcome to FizzBuzz!");
const fizzbuzz = (int) => {
    if ((int % 3 === 0) && (int % 7 ===0)) {
        return "FizzBuzz";
    } else if (int % 3 === 0) {
        return "Fizz";
    } else if (int % 7 === 0) {
        return "Buzz";
    } else {
        return int;
    }
}
console.log(fizzbuzz(num));

*/

let num = 5; // Don't change this line

// Type your code below
console.log("Welcome to FizzBuzz!");
const fizzbuzz = (int) => {
    for (let i = 1; i <= int; i++) {
        
        
        if ((int % 3 === 0) && (int % 7 ===0)) {
            return "FizzBuzz";
        } else if (int % 3 === 0) {
            return "Fizz";
        } else if (int % 7 === 0) {
            return "Buzz";
        } else {
            return int;
        }
        
        int += i;
    }
        
    return int;
}
console.log(fizzbuzz(num));