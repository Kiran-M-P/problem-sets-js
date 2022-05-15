const prompt = require("prompt-sync")({ sigint: true });

const n = prompt("Enter the number : ");

const primeNumbers = [];

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

for (let j = 2; j <= n; j++) {
  if (primeChecker(j)) {
    primeNumbers.push(j);
  }
}

console.log(primeNumbers);
