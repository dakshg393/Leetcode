/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0
    let prev = values[0]+0
    for(let j=1;j<values.length;j++){
        maxScore= Math.max(maxScore,prev+values[j]-j)
        prev = Math.max(prev,values[j]+j)
    }
    return maxScore
};