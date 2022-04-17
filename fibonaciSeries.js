// Print first N fibonacci numbers

const prompt = require("prompt-sync")({ sigint: true });

const n = prompt("Enter the number : ");

function fibonacci(x) {
  const series = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    series.push(series[i] + series[i + 1]);
  }
  console.log(series);
}

fibonacci(n);
