/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = [...nums1, ...nums2].sort((a,b)=>a-b)
    let sizeofArr = newArr.length
    
    if((sizeofArr%2)==0){
        let n= (sizeofArr/2)
        let median = (newArr[n]+newArr[n-1])/2
        return median
    }else{
        let n = ((sizeofArr+1)/2)-1
        return newArr[n]
    }

    


};