/**
 * 삼각형의 완성조건 (1)
 * [ 문제 설명 ]
 * - 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.
 * - 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
 * - 삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.
 * @param {*} sides 
 * @returns 
 */
const solution = (sides) => {
    let answer = 0;
    let tmp = 0; // 임의의 값을 넣을 변수

    // 버블정렬 알고리즘을 참고
    for( let i=0; i<sides.length; i++ ) { /* 정렬할 배열의 반복문을 선언 */
        for( let j=i+1; j<sides.length; j++ ) { /* 정렬할 배열의 'i' Index의 +1 즉 다음값의 체크를 위해 반복문 설정 */
            if( sides[i] > sides[j] ) { // 만약 다음의 값이 크다면 해당 자리 변경
                tmp = sides[j]; // 다음 값을 임의의 변수에다가 저장
                sides[j] = sides[i]; // 현재 값을 다음 인덱스에 다가 값 바꾸기
                sides[i] = tmp; // 임의 변수에 저장되었던 값을 다시 'I'번째 인덱스에 값 바꾸기
            }
        }
    }
    answer = sides[0]+sides[1] > sides[2] ? 1 : 2;
    return answer;
}