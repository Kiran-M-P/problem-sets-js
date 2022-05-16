// 1. Given a String with numbers and operators.
// Perform the operations on the numbers in their respective order.

// Input : "12345*+-+"
// Output: 6
// Explanation: [1*2+3-4+5 = 6]

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

let input = "12345*+-+";

const num = input.match(/[0-9]/g);
const opt = input.match(/[\+\-\*\/]/g);
let cal;
for (let i = 0; i < num.length; i++) {
  for (let j = 0; j < num.length; j++) {
    cal = operators[opt[j]](num[i], num[i + i]);
  }
}

console.log(num, opt);
