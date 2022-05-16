// *
// **
// ***
// ****
// *****

const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("No of rows: ");

const pattern = (n) => {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

pattern(input);
