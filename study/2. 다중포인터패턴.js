function countUniqueValues(arr) {
    // 받은 파라미터의 길이가 0이라면 0 리턴
    if( arr.length === 0 ) return 0;
    // 왼쪽에서 포인터를 지정
    let left = 0;
    // 오른쪽 포인터를 지정
    let right = 1;
    
    // while( left < right ) {
    //     if( arr[left] === arr[right] ) {
    //         // 만약 현재값이 다음값과 같다면 right++
    //         right++;
    //     }
    //     else {
    //         // 현재값과 다음값이 다르면 해당 인덱스에 값 입력 후 이동
    //         arr[left] = arr[right]
    //         left++;
    //         right++;
    //     }
    // }
    console.log(arr);
}

countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4