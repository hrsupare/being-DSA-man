let nums = [-1, 1, 1]
let k = 1
const LongestsubarraywithgivensumKPositives = (nums, k) => {
    let longest = 0
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]
            if (sum == k) {
                let long = j - i + 1
                longest = Math.max(long, longest)
            }
        }
    }
    return longest
}

console.log(LongestsubarraywithgivensumKPositives(nums, k))