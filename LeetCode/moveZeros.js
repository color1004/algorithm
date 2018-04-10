/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	if(nums.length == 0){return;}
	var zeroNums = 0;
    for(var i=0;i<nums.length;i++) {
		if(nums[i] !=0){
			if(zeroNums !=0){
				nums[i-zeroNums]=nums[i];
				nums[i]=0;
			}
		}else{
			zeroNums++;
		}
	}
};
var n = [0, 1, 0, 3, 12]; //[1, 3, 12, 0, 0]
moveZeroes(n);
console.log(n);
