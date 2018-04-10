function quickSort(arr, left, right) {
    var left=typeof left == 'number' ? left : 0,
		right=typeof right == 'number' ? right : arr.length-1,
		partitionIndex;
	if(left<right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex-1);
		quickSort(arr, partitionIndex+1, right);
	}
	return arr;
}
function partition(arr, left, right) {
	var pivot = right,
		index = 0;
	for(var i=index; i<right; i++) {
		if(arr[i]<arr[pivot]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, index, pivot);
	return index;
}
function swap(arr, i, j) {
	if(i!=j) {
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
