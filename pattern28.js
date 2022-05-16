//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("Number : ");

const pattern = (n) => {
  for (let row = 1; row < n * 2; row++) {
    const noOfCol = row > n ? n * 2 - row : row;
    const noOfSpace = n - noOfCol;

    for (let space = 1; space <= noOfSpace; space++) {
      process.stdout.write(" ");
    }
    for (let Col = 1; Col <= noOfCol; Col++) {
      process.stdout.write("* ");
    }

    console.log();
  }
};

pattern(input);
