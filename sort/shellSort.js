function shellSort(arr) {
	var len = arr.lengh;
	var gap = Math.floor(len/2);
	while(gap>0) {
		for(var i=gap;i<len;i++) {
			for(var j=i;j>0;j-=gap) {
				if(arr[j] < arr[j-gap]) {
					swap(arr,j,j-gap);
				} else {
					break;
				}
			}
		}
		gap = Math.floor(gap/2);
	}
}
