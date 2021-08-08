// https://leetcode.com/problems/valid-parentheses/

const input = "[]"

const isValid = function(s) {
  console.time("isValid");
  if(!s || s.length < 2) return false;
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };
  for(const value of s) {
    if(stack.includes(map[value])) {
      const item = stack.pop();
      if(item !== map[value]) return false;
    } else {
      stack.push(value);
    }
  }
  console.timeEnd("isValid");
  return stack.length === 0;
};

// O(n^2)

console.log('isValid ->', isValid(input)) 



/**
 * Optimized solution O(n)
 */

const isValidV1 = (s) => {
  console.time("isValidV1");
  if(!s || s.length < 2) return false;
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };
  for(const value of s) {
    if(map[value]) {
      if(stack.length > 0 && map[value] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(value);
    }
  }
  console.timeEnd("isValidV1");
  return stack.length === 0;
}


console.log('isValidV1 ->', isValidV1(input)) 