//https://codeforces.com/problemset/problem/112/A
"use strict";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readline() {
  return inputString[currentLine++];
}

function main() {
  let first = readline();
  let second = readline();
  first = first.toLowerCase();
  second = second.toLowerCase();
  if (first < second) console.log(-1);
  else if (first > second) console.log(1);
  else console.log(0);
}
