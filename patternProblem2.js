// pattern problem 2

// input:
// 5

// output:
// 12345
// 23451
// 34512
// 45123
// 51234

// Don't use Arrays

const prompt = require("prompt-sync")({ sigint: true });

const input = prompt("Enter a number : ");

for (let i = 1; i <= input; i++) {
  let temp = "";
  for (let j = i; j <= input; j++) {
    temp += j;
  }
  if (i != 1) {
    for (let k = 1; k < i; k++) {
      temp += k;
    }
  }
  console.log(temp);
}
