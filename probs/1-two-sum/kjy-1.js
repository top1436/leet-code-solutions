/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 0; j < nums.length; j += 1) {
            if (j != i) {
                let sum = nums[i] + nums[j];
                if (sum === target) {
                    return [i, j];
                }
            }
        }
    }
};

const nums = [2, 7 ,11, 15];
const target = 9;

console.log(twoSum(nums, target));