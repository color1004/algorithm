/**
 * a+b+c=0
 */
function threeSum(arr) {
  var ans = [];
  arr.sort(function(a,b) {
    return a-b;
  });
  for(var i=0, len=arr.length; i<len-2; i++) {
    // if(i!=0 && arr[i]==arr[i-1]) continue;
    if(i==0 || (arr[i]!=arr[i-1])) {
      if(arr[i] > 0) break;
      var sum = 0-arr[i],
          lo = i+1,
          hi = len-1;
      while (lo<hi) {
        if(arr[lo]+arr[hi] == sum) {
          ans.push([i, lo, hi]);
          ans.push([arr[i], arr[lo], arr[hi]]);
          while (lo<hi && arr[lo]==arr[lo+1]) { lo++; }
          while (lo<hi && arr[hi]==arr[hi-1]) { hi--; }
          lo++;
          hi--;
        }
        else if(arr[lo]+arr[hi] < sum) lo++;
        else hi--;
      }
    }
  }
  return ans;
}

/**
 * a+b=c abcd都在数组中
 */
function threeSum(arr) {
  var ans = [];
  arr.sort(function(a,b) {
    return a-b;
  });
  for(var i=0, len=arr.length; i<len; i++) {
    if(i!=0 && arr[i]==arr[i-1]) continue;
    var sum = arr[i],
        lo = 0,
        hi = len-1;
    while (lo<hi) {
      if(arr[lo]+arr[hi] == sum && lo!=i && hi!=i) { //是否考虑0+任何数都为该数的情况
        ans.push([i, lo, hi]);
        ans.push([arr[i], arr[lo], arr[hi]]);
        while (lo<hi && arr[lo]==arr[lo+1]) { lo++; }
        while (lo<hi && arr[hi]==arr[hi-1]) { hi--; }
        lo++;
        hi--;
      }
      else if(arr[lo]+arr[hi] < sum) lo++;
      else hi--;
    }
  }
}
