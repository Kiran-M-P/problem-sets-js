// *****
// ****
// ***
// **
// *

const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("No of rows: ");

const pattern = (x) => {
  for (let row = 1; row <= x; row++) {
    for (let col = 1; col <= x - row + 1; col++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

pattern(input);
