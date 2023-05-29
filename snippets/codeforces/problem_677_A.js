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
//https://codeforces.com/problemset/problem/677/A

function main() {
  let [n, h] = readline()
    .split(" ")
    .map((e) => Number(e));
  let friends = readline()
      .split(" ")
      .map((e) => Number(e)),
    ans = 0;
  for (const each of friends) {
    if (each > h) ans += 2;
    else ++ans;
  }
  print(ans);
}
