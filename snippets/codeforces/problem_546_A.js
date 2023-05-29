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
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/546/A

function main() {
  let [k, n, w] = readline()
    .split(" ")
    .map((e) => Number(e));
  var exp = 0;
  for (let i = 1; i <= w; ++i) {
    exp = exp + k * i;
  }
  if (exp >= n) print(exp - n);
  else print(0);
}
