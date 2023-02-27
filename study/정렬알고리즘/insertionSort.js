function insertionSort(arr) {
    for( var i = 1; i < arr.length; i++) {
        // 값을 추적할 변수를 생성
        var currentVal = arr[i];
        for( var j = i-1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4]);