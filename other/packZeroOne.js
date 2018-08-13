// 时间复杂度O(n*m) 空间复杂度 O(n*m)
function packZeroOneOld(arrWeight, arrValue, m) {
    var n = arrWeight.length;
    var ans = [];
    // 装满背包时，ans[0] = 0  ans[1..m] = -Infinity
    for(var i=0; i<=n; i++) {
        ans[i] = [];
        for(var j=0; j<=m; j++) {
            if(i==0) {
                ans[i][j] = 0;
                continue;
            }
            ans[i][j] = ans[i-1][j];
            if(arrWeight[i-1] <= j)
                ans[i][j] = Math.max( ans[i-1][j], ans[i-1][j-arrWeight[i-1]]+arrValue[i-1] );
        }
    }
    var arrBag = [];
    arrBag.length = n;
    arrBag.fill(0, 0, n);
    var temp = m;
    for(var i=n; i>0; i--) {
        if(ans[i][temp]>ans[i-1][temp]) {
            arrBag[i-1] = 1;
            temp -= arrWeight[i-1];
        }
    }
    console.log(arrBag); // 选取的背包结果
    return ans;
}

// 空间复杂度优化为 O(n)
function packZeroOne(arrWeight, arrValue, m) {
    var n = arrWeight.length;
    var ans = [];
    for(var i=0; i<n; i++) {
        for(var j=m; j>=0; j--) {
            ans[j] = ans[j] || 0;
            if(arrWeight[i] <= j) {
                ans[j] = Math.max( ans[j], (ans[j-arrWeight[i]] || 0)+arrValue[i] );
            }
        }
        console.log(ans);
    }
    return ans;
}

// 常数优化
function packZeroOneConst(arrWeight, arrValue, m) {
    var n = arrWeight.length;
    var ans = [];
    var sumWeight = 0;
    var bound;
    for(var i=0; i<n; i++) {
        sumWeight += arrWeight[i];
    }
    for(var i=0; i<n; i++) {
        /**
         * j=0优化为bound
         * j<arrWeight[i]时不更新数据 所以bound > arrWeight[i]
         * 由于，当为i时，只需要知道 ans[m-arrWeight[i]]
         * 所以，当为i-1时，只需要计算到 ans[m-arrWeight[i]] 就可以停止循环  累计效果即为  计算i时 bound > m-sum(arrWeight[i+1...n])
         * 最终bound取值为 上述两种情况的最大值
         */
        sumWeight -= arrWeight[i];
        bound = Math.max(m-sumWeight, arrWeight[i]);
        for(var j=m; j>=bound; j--) {
            ans[j] = ans[j] || 0;
            if(arrWeight[i] <= j) {
                ans[j] = Math.max( ans[j], (ans[j-arrWeight[i]] || 0)+arrValue[i] );
            }
        }
        console.log(bound, ans);
    }
    return ans;
}
function packAll(arrWeight, arrValue, m) {
    var ans = [];
    var n = arrWeight.length;
    for(var i=0; i<=n; i++) {
        for(var j=0; j<=m; j++) {
            if(i==0) {
                ans[j] = 0;
                continue;
            }
            ans[j] = ans[j];
            if(arrWeight[i-1]<=j)
                ans[j] = Math.max(ans[j], ans[j-arrWeight[i-1]]+arrValue[i-1]);
        }
        console.log(ans);
    }
    return ans;
}
var weight = [3,5,6,2,4];
var value = [2,5,2,4,1];

console.log(packZeroOneOld(weight, value, 10));
console.log(packZeroOneOld(weight, value, 10)[4][10]);
console.log(packZeroOne(weight, value, 10)[10]);
console.log(packZeroOneConst(weight, value, 10)[10]);
console.log(packAll(weight, value, 10)[10]);
