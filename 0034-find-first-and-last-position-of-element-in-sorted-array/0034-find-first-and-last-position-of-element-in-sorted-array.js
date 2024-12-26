/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    const firstElement = (nums,target)=>{
        let size = nums.length
        let s = 0
        let e = size -1
        let mid = s +  Math.floor((e-s)/2)
        let key= target
        let ans=-1
        while(s<=e){
            if(nums[mid]===key){
                ans = mid
                e=mid-1
            }
            if(nums[mid]>=key){
                e=mid-1
            }
            else{
                s= mid+1
            }
            mid = s+ Math.floor((e-s)/2)
        }

        return ans;
    }

    const lastElement = (nums,target)=>{
        let size = nums.length
        let s = 0
        let e = size -1
        let mid = s + Math.floor((e-s)/2)
        let key= target
        let ans=-1
        while(s<=e){
            if(nums[mid] == key){
                ans = mid
                s= mid+1
            }
            if(nums[mid]>key){
                e=mid-1
            }
            else{
                s=mid+1
            }
            mid = s+ Math.floor((e-s)/2)
        }
        return ans;
    }

    let s = firstElement(nums,target)
    let l = lastElement(nums,target)
    return [s,l]
};