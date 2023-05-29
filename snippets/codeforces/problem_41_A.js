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
//https://codeforces.com/problemset/problem/41/A

function main() {
  let str1 = readline();
  let str2 = readline();
  // print(`###${str1.split("").reverse().join("")}`);
  if (str1.split("").reverse().join("") == str2) print("YES");
  else print("NO");
}
