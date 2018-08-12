/**
 * 幂运算的实现 时间复杂度 O(logN) 空间O(1)
 *
 * @param {number} a 底数
 * @param {number} b 底数
 * @return {number}
 */
function myPow(a,b) {
    var y = b.toString(2);
    var len = y.length;
    var ans = 1,
        temp = a;
    // var arr = []; // 保存结果 不需要了
    for(var i=len-1; i>=0; i--) {
        if(i!=len-1) { // 第一次不计算 初始值已经乘过一次
            temp *= temp;
        }
        // arr.push(temp);
        if(y[i]=='1') { // 这个位置上 为 1
            // ans *= arr[len-1-i]; // 当前的位置 即此时的 temp
            ans *= temp;
        }
    }
    // console.log(arr);
    return ans;
}
console.log(myPow(5,5));
console.log(Math.pow(5, 5));
