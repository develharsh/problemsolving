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
  inputString = inputString
    .split("\n")
    .filter((e) => e.length)
    .map((e) => e.trim());
  main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//

function main() {
  // let input = readline();
}
