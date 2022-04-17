// check the given number is prime or not

const prompt = require("prompt-sync")({ sigint: true });

const n = prompt("Enter the number to check : ");

function primeChecker(x) {
  for (let i = 2; i <= x / 2; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  if (x < 2) {
    return false;
  }
  return true;
}

console.log(primeChecker(n));
