const prompt = require("prompt-sync")({ sigint: true });
const n = prompt("No of rows: ");

const pattern = (x) => {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write("* ");
    }
    console.log();
  }
};

pattern(n);
