/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var indexs = [];
    for(var i=0,len=nums.length;i<len;i++) {
        var index = nums.indexOf(target-nums[i]);
        if(index!=-1 && i!=index){
            indexs.push(i,index);
            return indexs;
        }
    }
};
/**
 *Given nums = [2, 7, 11, 15], target = 9,
 *Because nums[0] + nums[1] = 2 + 7 = 9,
 *return [0, 1].
 *返回的两个位置不能相同，即一个元素只能用一次
 */

都是O(n)

function twoSum(arr, num) {
  var nums1 = [].concat(arr);
  var ans = [];
  nums1.sort(function(a,b) {
    return a-b;
  });
  for(var i=0,len=nums1.length; i<len; i++) {
    if(nums1[i] >= num) break;
    for(var j=len-1; j>i; j--) {
      if(nums1[i]+nums1[j] == num) {
        ans.push([nums1[i],nums1[j]]);
        break;
      }
      else if(nums1[i]+nums1[j] < num) break;
    }
  }
  console.log(ans);
}
var arr = [2, 7, 11, 15];
twoSum(arr, 9);
