function validAnagram(param1, param2) {
    if( param1 === '' && param2 === '' )  return true;
    if( param1.length !== param2.length ) return false;
    // 1. 문자를 배열로 변환
    let param1_arr = param1.split('');
    let param2_arr = param2.split('');
    
    // 2. param1배열을 for문을 돌려서 param2 for문을 돌린다
    for( let i=0; i<param1_arr.length; i++ ) {
        // 3. param2 array를 for문을 돌려서 해당 문자열 체크
        for( let j=0; j<param2_arr.length; j++) {
            if( param1_arr[i] === param2_arr[j] ) { // 3-1 문자가 있으면 제거
                param2_arr.splice(j, 1);
            }
        }
    }

    // 4. 최종 문자를 확인 후 길이가 없으면 true
    if( param2_arr.length === 0 ) {
        return true;
    }
    else {
        return false;
    }
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true