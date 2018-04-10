function insert(arr) {
	var preIndex, current, len=arr.length;
	for(var i=0;i<len;i++) {
		preIndex = i-1;
		current = arr[i];
		while(preIndex>=0 && current<arr[preIndex]) {
			arr[preIndex+1]=arr[preIndex];
			preIndex--;
		}
		arr[preIndex+1]=current;
	}
	return arr;
}
