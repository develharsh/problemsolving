package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

var reader *bufio.Reader = bufio.NewReader(os.Stdin)
var writer *bufio.Writer = bufio.NewWriter(os.Stdout)

func printf(f string, a ...interface{}) { fmt.Fprintf(writer, f, a...) }
func scanf(f string, a ...interface{})  { fmt.Fscanf(reader, f, a...) }

func solve() { //https://codeforces.com/problemset/problem/344/A
	var n, init, ans int
	scanf("%d\n", &n)
	init = 0
	ans = 0
	for i := 0; i < n; i++ {
		var x int
		scanf("%d\n", &x)
		if x != init {
			ans++
		}
		init = x
	}
	printf("%d\n", ans)
}

func main() {
	// STDOUT MUST BE FLUSHED MANUALLY!!!
	defer writer.Flush()

	var times int

	if len(os.Args) > 1 {
		t, err := strconv.Atoi(os.Args[1])
		if err != nil {
			times = 1
		} else {
			times = t
		}
	} else {
		times = 1
	}

	for i := 1; i <= times; i++ {
		solve()
	}

}