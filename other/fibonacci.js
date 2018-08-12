function getFibber(n) {
	var fibber = [];
	for(var i=0;i<len;i++){
		if(i<2){
			fibber.push(i);
		} else {
			fibber.push(fibber[i-2]+fibber[i-1]);
		}
	}
	return fibber;
}

// 只返回 第n个数字 空间复杂度优化为 O(1)
function getFibber(n) {
    if(n<3) return 1;
    var a = 1, b = 1, c;
    for(var i=3; i<=n; i++) {
        c=a+b;
        a=b;
        b=c;
    }
    return c;
}
