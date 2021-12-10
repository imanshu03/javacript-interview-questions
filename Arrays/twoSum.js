var twoSum = function (nums, target) {
    let sumMap = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (sumMap[diff] !== undefined && sumMap[nums[i]] === undefined) {
            result.push([diff, nums[i]]);
        } 
        sumMap[nums[i]] = i;
    }
    return result;
};

console.log(twoSum([2, 7, 11, 15, 2, 7], 9));