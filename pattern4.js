// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("Number : ");

const pattern = (n) => {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write(col + " ");
    }
    console.log();
  }
};

pattern(input);
