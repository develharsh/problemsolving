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
//https://codeforces.com/problemset/problem/266/B

function main() {
  let [n, t] = readline()
    .split(" ")
    .map((e) => Number(e));
  let str = readline();
  if (n == 1) {
    print(str);
    return;
  }
  while (t--) {
    for (let i = 0; i < n - 1; ) {
      if (str.charAt(i) == "B" && str.charAt(i + 1) == "G") {
        // print(
        //   `### ${i} ${
        //     str.substring(0, i) + "GB" + str.substring(i + 2, str.length)
        //   }`
        // );
        str = str.substring(0, i) + "GB" + str.substring(i + 2, str.length);
        i += 2;
      } else ++i;
    }
  }
  print(str);
}
