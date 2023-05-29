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
  let times = process.env.TIMES ?? 1;
  while (times--) main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/116/A

function main() {
  let n = Number(readline());
  let curr_cap = 0,
    max_cap = 0;
  for (let i = 0; i < n; ++i) {
    let [a, b] = readline()
      .split(" ")
      .map((e) => Number(e));

    curr_cap += b - a;
    max_cap = Math.max(max_cap, curr_cap);
    // print(curr_cap, max_cap);
  }
  print(max_cap);
}
