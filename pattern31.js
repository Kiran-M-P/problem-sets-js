// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

const prompt = require("prompt-sync")({ sigint: true });

const input = Number(prompt("Number : "));

const pattern = (n) => {
  for (let row = 1; row <= 2 * n - 1; row++) {
    for (let col = 1; col <= 2 * n - 1; col++) {
      let minDistance = Math.min(
        Math.min(row, col),
        Math.min(2 * n - col, 2 * n - row)
      );
      process.stdout.write(n + 1 - minDistance + " ");
    }
    console.log();
  }
};

pattern(input);
