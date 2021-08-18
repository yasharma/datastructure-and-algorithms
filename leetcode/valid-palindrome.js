const assert = require('assert');
/**
 * @param {string} s
 * @return {boolean}
 */
 const isPalindrome = (s) => {
  if(s.length === 1) return true;
  let j = s.length - 1;
  let i = 0;
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  while(i < s.length && j > i) {
      let isIValidString = format.test(s[i]);
      let isJValidString = format.test(s[j]);
      if(!isIValidString && !isJValidString && s[i].toLowerCase() !== s[j].toLowerCase()){
          return false;
      }
      if(!isJValidString) i++;
      if(!isIValidString) j--;
  } 
  return true;
};
const testCase_1 = "A man, a plan, a canal: Panama";
const testCase_2 = "race a car";
const testCase_3 = ".;";
describe('Valid Palindrome', function() {
  it(`should return true [${testCase_1}]`, function() {
    assert.strictEqual(isPalindrome(testCase_1), true);
  });
  it(`should return true [${testCase_3}]`, function() {
    assert.strictEqual(isPalindrome(testCase_3), true);
  });
  it(`should return false [${testCase_2}]`, function() {
    assert.strictEqual(isPalindrome(testCase_2), false);
  });
});
