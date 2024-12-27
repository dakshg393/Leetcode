/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let size = height.length
    let l=0
    let r=size-1
    let maxArea = 0

    while(l<r){
        let width = r-l
        let area = Math.min(height[l],height[r]) * width
        maxArea= Math.max(area,maxArea)
        if(height[l]<height[r]){
            l++
        }else{
            r--
        }
    }
    return maxArea
};