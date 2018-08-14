// 全排列的优化及变形拓展
function nextPerm(str) {
    var arr = str.split("");
    arr.sort();
    console.log(arr);
    while(fn(arr)) {
        console.log(arr);
    }
    function fn(arr) {
        var pos1 = 0,
            pos2 = 0,
            len = arr.length
            flag = false;
        for(var i=len-2; i>=0; i--) {
            if(arr[i]<arr[i+1]) {
                pos1 = i;
                flag = true;
                break;
            }
        }
        if(!flag) return false;
        for(var i=len-1; i>=0; i--) {
            if(arr[i]>arr[pos1]) {
                pos2 = i;
                break;
            }
        }
        swap(pos1, pos2, arr);
        var p = pos1+1, q = len-1;
        while(p<q) {
            swap(p, q, arr);
            p++;
            q--;
        }
        return true;
    }
    function swap(i, j, arr) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }
}
nextPerm('2341');


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

// 获取 某个字符串在 字典序中排第几个
function getNum(str) {
    var arr = str.split(""); // 3267514
    var sortArr = str.split("").sort();
    var ans = 0;
    var index = 0;
    var len = arr.length;
    var f = ANN(len);
    for(var i=0; i<len-1; i++) {
        index = sortArr.indexOf(arr[i]);
        console.log(index, sortArr);
        sortArr.splice(index, 1);
        ans = ans + (index * f[len-i-1]);
        console.log(ans);
    }
    return ans;
}
getNum('1243'); // 1 1234 0
getNum('3267514'); 1654

// http://www.cnblogs.com/ECJTUACM-873284962/p/6390591.html
