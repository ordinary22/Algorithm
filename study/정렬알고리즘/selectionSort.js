// 내가 짠 코드
// function selectionSort(arr) {
//     let min;
//     for( let i = 0; i < arr.length; i++) {
//         minIdx = i;
//         for( let j = i+1; j < arr.length; j++) {
//             if( arr[i] > arr[j] ) {
//                 minIdx = j;
//             }
//         }

//         if( minIdx !== i ) {
//             let tmp = arr[minIdx];
//             arr[minIdx] = arr[i];
//             arr[i] = tmp;
//         }
//     }
    
//     return arr;
// }


// 의사코드
function selectionSort(arr) {
    let min;
    for( let i = 0; i < arr.length; i++) {
        minIdx = i;
        for( let j = i+1; j < arr.length; j++) {
            if( arr[j] < arr[minIdx] ) {
                minIdx = j;
            }
        }

        if( minIdx !== i ) {
            let tmp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = tmp;
        }
    }

    return arr;
}