/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let size = values.length
    let i=0
    let r=size-1
    let maxSum=0
    while(i<r){
        let sum = values[i]+values[j]+i-j
        maxSum= sum>maxSum?sum:maxSum
        i++
    }
    return maxSum
};