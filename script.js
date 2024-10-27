// Problem-1
let a = 10;
let b = 5;

let sum = a + b;

console.log(sum);

let sub = a - b;

console.log(sub);

let multi = a * b;

console.log(multi);

let div = a / b;

console.log(div);

// Problem-2
let celsius = 20;

let fahrenheit = (celsius * 9) / 5 + 32;

console.log(fahrenheit);

// Problem-3
let num = prompt("Enter a Number: ");

if (num > 0) {
  console.log("positive Number");
} else if (num < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero Number");
}

// Problem-4
let marks = 68;

if (marks >= 90) {
  console.log("A");
}

if (marks >= 80 && marks <= 89) {
  console.log("B");
}

if (marks >= 70 && marks <= 79) {
  console.log("C");
}

if (marks >= 60 && marks <= 69) {
  console.log("D");
}

if (marks < 60) {
  console.log("F");
}

// Problem-5
let number = 24;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
