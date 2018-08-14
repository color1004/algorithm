// 全排列的优化及变形
function nextPerm(str) {
}


// ann全排列结果 即 n的阶乘
function ANN(n) {
    var arr = [1]; // []
    var p = n;
    var temp = 1;
    while(p) {
        temp *= n-p+1;
        arr.push(temp);
        p--;
    }
    return arr;
}
var arr = ANN(6);
console.log('阶乘', arr, arr[6], 'c62', arr[6]/(arr[4]*arr[2]));

/**
 * 获取第 arr的 第num个字典排序
 * @param {number[]} arr 
 * @param {number} num 
 * @return {number[]}
 */
function getStr(arr, num) {
    // 假设 arr 是排好序的
    var p,
        q = num, // num 从0 起
        temp,
        ans = [],
        len = arr.length,
        f = ANN(len);
    if(f[len] < num) return false;
    // console.log(f[len]);
    for(var i=0; i<len; i++) {
        temp = f[len-1-i];
        // console.log(temp);
        p = Math.floor( q / temp );
        q = q - (p * temp);
        ans = ans.concat(arr.splice(p,1)); // 取出第p个
        // console.log(p, q, ans);
    }
    return ans;
}
var arr = [1,2,3,4,5,6,7];
var num = 1654;
var arr = ['a','b','c','d'];
var num = 0;
getStr(arr, num);

// 有重复 情况
function getStrC(n,m,t) { // n个 a  m个  z  求第t个
    var q = t-1, // num 从1 起
        temp,
        ans = [],
        len = m+n,
        f = ANN(len);
    if(f[len]/(f[m]*f[n]) < t) return false;
    console.log(f[len]/(f[m]*f[n]));
    while(m>0&&n>0) {
        temp = f[m+n-1] / ( f[n-1] * f[m] );
        console.log(q, temp)
        if(temp<=q) {
            ans.push('z');
            m--;
            q -= temp;
        } else {
            ans.push('a');
            n--;
        }
        console.log(ans)
    }
    if(n>0) while(n--) {ans.push('a')}
    if(m>0) while(m--) {ans.push('z')}
    console.log(ans);
    return ans;
}
getStrC(3,2,3);

// http://www.cnblogs.com/ECJTUACM-873284962/p/6390591.html
