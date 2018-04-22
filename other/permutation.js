/**
 * 全排列
 * @param {number[]} arr
 * @return {number[]} ans
 */
function permutations(arr) {
	var ans = [];
	var ansobj = {};
	var ansset = new Set();
	fn(0);
	function fn(n) {  //为第n个位置选择元素  
		for(var i=n;i<arr.length;i++) {  
		    swap(arr,i,n);  
		    if(n+1<arr.length-1) { //判断数组中剩余的待全排列的元素是否大于1个  
			fn(n+1); //从第n+1个下标进行全排列  
		    } else {
			ans.push(arr); //获得一组结果  
			ansobj[arr.join("")]=null;  //去重结果
			ansset.add(arr.join(""));
		    }
		    swap(arr,i,n);  
		}  
	}  
	console.log(ans);
	console.log(Object.keys(ansobj));
	console.log([...ansset]);
}
function swap(arr,i,j) {  
    if(i!=j) {  
        var temp=arr[i];  
        arr[i]=arr[j];  
        arr[j]=temp;  
    }  
}  

perm(["01","02","03","04"]);
perm(["01","02","03","03"]);
