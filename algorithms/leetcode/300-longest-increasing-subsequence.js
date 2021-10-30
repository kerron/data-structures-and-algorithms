/**
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
 *
 * Example
 * Input: nums = [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
 */

const longestIncreasingSubsequence = (sequence) => {
  const len = sequence.length;
  const tally = new Array(len).fill(1);
  let max = 1;

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (sequence[i] > sequence[j]) {
        tally[i] = Math.max(tally[i], tally[j] + 1);
        max = Math.max(max, tally[i]);
      }
    }
  }

  return max;
};

longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]); // 4
