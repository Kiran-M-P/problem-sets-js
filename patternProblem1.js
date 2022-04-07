// pattern problem 1

// input:
// 5

// output:
//     1
//    21
//   321
//  4321
// 54321

// Don't use arrays

const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("Enter A number : ");

for (i = 1; i <= input; i++) {
  let temp = "";
  for (j = input - i; j >= 0; j--) {
    if (j === 0) {
      for (k = i; k > 0; k--) {
        temp += k;
      }
    } else {
      temp += " ";
    }
  }
  console.log(temp);
}
