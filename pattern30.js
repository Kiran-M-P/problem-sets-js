//           1
//         2 1 2
//       3 2 1 2 3
//     4 3 2 1 2 3 4
//   5 4 3 2 1 2 3 4 5
// 6 5 4 3 2 1 2 3 4 5 6

const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("Number : ");

const pattern = (n) => {
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= (n - row) * 2; space++) {
      process.stdout.write(" ");
    }
    for (let mat1 = row; mat1 >= 1; mat1--) {
      process.stdout.write(mat1 + " ");
    }
    for (let mat2 = 2; mat2 <= row; mat2++) {
      process.stdout.write(mat2 + " ");
    }

    console.log();
  }
};

pattern(input);
