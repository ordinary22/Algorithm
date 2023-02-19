function sameFrequency(num1, num2) {
    let temp = {};
    console.log(num1.length);
    for( let i=0; i<num1.length; i++ ) {
        console.log(num1[i]);
        temp.num1[i] = 0;
    }

    console.log(temp);
}

sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false