/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    let indexs=[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]===x){
            indexs.push(i)
        }
    }

    let result = []
    for(let i=0;i<queries.length;i++){
        if(queries[i]>indexs.length){
            result.push(-1)
        }else{
            result.push(indexs[queries[i]-1])
        }
    }
    return result
};