// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(n, i){
    if( i === 0 ) return 1;
    return n * power(n, i-1);
}