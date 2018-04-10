function selectSort(arr) {
	for(var i=0;i<arr.length;i++) {
		var minIndex=i, min=arr[i];
		for(var j=i+1;j<arr.length;j++) {
			if(arr[j]<min) {
				minIndex=j;
				min=arr[j];
			}
		}
		var temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
}
