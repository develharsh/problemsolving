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
//   main();
//   main();
});
function readline() {
  return inputString[currentLine++];
}

/* Code Start */
//https://codeforces.com/problemset/problem/791/A

function main() {
  let [a, b] = readline()
      .split(" ")
      .map((e) => Number(e)),
    ans = 0;
  while (a <= b) {
    a *= 3;
    b *= 2;
    ++ans;
  }
  print(ans);
}
