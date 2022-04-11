const prompt = require("prompt-sync")({ sigint: true });
const input = prompt("Enter A number : ");

for (let i = 1; i <= input; i++) {
  let temp = "";
  for (let j = input - i; j >= 0; j--) {
    if (j === 0) {
      for (let k = i; k > 0; k--) {
        temp += k;
      }
    } else {
      temp += " ";
    }
  }
  console.log(temp);
}

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
