//https://leetcode.com/problems/longest-substring-without-repeating-characters/
// sliding window technique
// https://www.youtube.com/watch?v=MK-NZ4hN7rs&ab_channel=TheSimpleEngineer 
function lengthOfLongestSubstring(string) {
  let a = 0;
  let b = 0;
  let max = 0;
  let map = new Map();

  while(b < string.length) {
    if(!map.has(string[b])) {
      map.set(string[b], b);
      max = Math.max(map.size, max);
      b++;
    } else {
      map.delete(string[a]);
      a++;
    }
  }
  return max;
};


console.log(lengthOfLongestSubstring("subsequence"));
