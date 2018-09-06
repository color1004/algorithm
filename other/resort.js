/**
 * 抽张牌放后面 取第二张 直到取完 生成一个新的顺序
 * 参数为新排序的结果，返回原结果
 * @param arr
 * @returns {Array}
 * 思路：用下标按照该方法走一遍，得到的数组为原下标在当前的情况，按照下标排回去
 */
function resort(arr) {
    var len = arr.length;
    var res = [];
    var ans1 = [];
    var ans = [];
    for(var i=0; i<len; i++) {
        res[i] = i;
    }
    console.log(res)
    i = 0;
    while (res.length>0) {
        if(i%2 == 1) {
            ans1 = ans1.concat(res.shift());
        } else {
            res = res.concat(res.shift());
        }
        i++;
    }
    console.log(ans1, i)
    for(var i=0; i<len; i++) {
        ans[ans1[i]] = arr[i];
    }
    return ans;
}
resort([2,4,6,1,5,3,7])
