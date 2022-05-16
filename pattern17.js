//    1
//   212
//  32123
// 4321234
//  32123
//   212
//    1

const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("Number : ");

const pattern = (n) => {
  for (let row = 1; row <= n * 2 - 1; row++) {
    const noOfCol = row > n ? n * 2 - row : row;

    for (let space = 1; space <= n - noOfCol; space++) {
      process.stdout.write(" ");
    }
    for (let mat1 = noOfCol; mat1 >= 1; mat1--) {
      process.stdout.write(String(mat1));
    }
    for (let mat2 = 2; mat2 <= noOfCol; mat2++) {
      process.stdout.write(String(mat2));
    }

    console.log();
  }
};

pattern(input);
