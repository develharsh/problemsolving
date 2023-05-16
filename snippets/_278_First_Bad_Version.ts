//Solution
//278. First Bad Version
//https://leetcode.com/problems/first-bad-version/
var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 0; // define start
    let end = n; // define end for binary search
    let lastBadVersion = 1; // We take the first bad version as 1

    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      // Defining pivot,
      // so we are starting from the middle
      // of the versions provided

      if (isBadVersion(mid)) {
        // Checking if our pivot is bad
        end = mid - 1;
        // getting rid of the versions
        // after our pivot version
        lastBadVersion = mid;
        // assigining the pivot as last bad version
      } else {
        // if pivot was not bad,
        start = mid + 1;
        // getting rid of
        // versions before pivot
      }
    }

    return lastBadVersion;
  };
};
//Test
