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
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/977/A

function main() {
  let [n, k] = readline()
    .split(" ")
    .map((e) => Number(e));
  while (k--) {
    if (n % 10 == 0) n = Math.floor(n / 10);
    else --n;
  }
  print(n);
}
