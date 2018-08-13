function getCMN(m, n) {
    if(m-n>n) n=m-n;
    var ans = 1;
    for(var i=0; i<m-n; i++) {
        ans *= n+1+i;
        ans /= i+1
    }
    console.log(i);
    return ans
}

function getCMM(m) {
    var dp = [[0], [0,1]];
    for(var i=2; i<=m; i++) {
        dp[i] = [];
        dp[i][0] = 0;
        dp[i][1] = i;
        dp[i][i] = 1;
        for(var j=2; j<i; j++) {
            dp[i][j] = dp[i-1][j] + dp[i-1][j-1]; // cmn = c(m-1)n + c(m-1)(n-1)
        }
    }
    return dp;
}
var arr = getLenArr(6);
console.log(arr);
console.log(arr[6][2]); // 15
