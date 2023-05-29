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
  let times = 3;
  while (times--) main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/734/A

function main() {
  let input = readline();
  let str = readline();
  let a = 0,
    d = 0;
  for (const v of str) {
    if (v == "A") ++a;
    else ++d;
  }
  if (a == d) print(`Friendship`);
  else if (a > d) print(`Anton`);
  else print(`Danik`);
}
