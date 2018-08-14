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

// 变形
/*题目2： 
升序数组a经过循环右移后，二分查找给定元素x。 
如a={1,2,3,4,5,6,7}，循环移动后a={5,6,7,1,2,3,4}。

思路： 
（1）类似正常的二分查找，都是不断移动左右边界，不过判断条件更加复杂一点。 
（2）每次计算中间那个元素mid，和左边界的元素left比较，总能确定有一边的区间是升序的； 
（3）然后对升序那边进行分析，若这个区间不可能包含x，则不再考虑这个区间；若可能包含x，则将查找范围限制在这个区间。即每次都可以排除一半区间。
*/
console.log(BinSearch([5,6,7,1,2,3,4], 4));
function BinSearch(arr, key) 
{
    var low=0, high=arr.length-1;
    var mid = 0;

    while (low <= high)
    {
        mid = (low+high)/2; 
        if (arr[mid] == key)
            return mid;
        if (arr[mid] > arr[low])    //左边升序
        {
            if (arr[low] > key) 
                low = mid+1;
            else if (arr[mid] > key)
                high = mid-1;
            else
                low = mid+1; 
        }
        else                        //右边升序
        {
            if (arr[high] < key)
                high = mid-1;
            else if (arr[mid] > key)
                high = mid-1;
            else
                low = mid+1; 
        }
    }
    return -1;
}
