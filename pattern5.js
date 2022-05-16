// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("Number : ");

const pattern = (n) => {
  for (let row = 1; row <= n * 2 - 1; row++) {
    const totalColsInRow = row > n ? n * 2 - row : row;

    for (let col = 1; col <= totalColsInRow; col++) {
      process.stdout.write("*");
    }

    console.log();
  }
};

pattern(input);
