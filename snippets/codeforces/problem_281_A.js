"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(x) {
  console.log(x.trim());
}
let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", () => {
  inputString = inputString.split("\n").filter((e) => e.length);
  main();
  main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/281/A

function main() {
  let input = readline();
  input = input.slice(0, 1).toUpperCase() + input.slice(1);
  print(input);
}
