

let array = [2, 2, 1, 3, 3]
/* const singleNumber = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for (const [key, val] of map) { 
        if (val <= 1) {
            return key
        }
    }

};
 */

const singleNumber = function (nums) {

    let res = 0

    for (let i = 0; i < nums.length; i++) {
        res = res ^ nums[i]
        console.log(res, "res")
    }

    return res
};

console.log(singleNumber(array))