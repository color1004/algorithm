// 注意事项
function BinarySearch(arr, key) {
    var low = 0,
        high = arr.length - 1;
        mid;
    while(low<=high) { // 1 <=
        mid = low + Math.floor(low+(high-low)/2); // 2 不能(low+high)/2 会溢出
        if(key < arr[low]) {
            low = mid + 1; // 3 必须 + - 1 不能相等
        } else if(key > arr[high]) {
            high = mid - 1;
        } else {
            return mid;
        }
    }
    return -1-low; // 4 取绝对值之后 就是 key应该插入的位置 或者 return -1
}
