function countUniqueValues(arr) {
    // 왼쪽에서 포인터를 지정
    let left = 0;
    // 오른쪽 포인터를 지정
    let right = 1;
    
    if( arr.length > 0 ) {
        while( left < right ) {
            if( arr[left] === arr[right] ) {
                right++;
            }
            else if( right > arr.length-1 ) {
                break;
            }
            else {
                arr[++left] = arr[right];
                right++;
            }
        }
        left++;
    }
}

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4