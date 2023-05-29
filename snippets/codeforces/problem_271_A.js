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
  let times = process.env.TIMES ? process.env.TIMES : 1;
  while (times--) main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/271/A

function hasDistinctDigits(year) {
  const yrCopy = year;
  let set = new Set();
  while (year > 0) {
    set.add(year % 10);
    year = parseInt(year / 10);
  }

  return set.size == yrCopy.toString().length;
}

function main() {
  let year = Number(readline()) + 1;
  while (true) {
    if (hasDistinctDigits(year)) break;
    else ++year;
  }
  print(year);
}
