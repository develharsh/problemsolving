"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

function print(...x) {
  console.log(x.join(" ").trim());
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
  main();
  main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/59/A

function main() {
  let input = readline();
  let low = 0,
    upp = 0;
  for (const c of input) {
    if (c.toLowerCase() === c) {
      ++low;
    } else {
      ++upp;
    }
  }
  if (low >= upp) print(input.toLowerCase());
  else print(input.toUpperCase());
}
