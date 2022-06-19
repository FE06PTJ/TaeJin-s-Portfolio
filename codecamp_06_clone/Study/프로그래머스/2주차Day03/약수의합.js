//약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
function solution(n) {
    let answer = 0;
    
    for( let i = 1; i <= n; i++) {    //약수는 1과 자기자신을 포함하므로 i=1, i<=n
        if( n % i === 0) {
            answer += i;
        }
    } 
    return answer;
}

//리팩토링
function solution(n) {
    let answer = n;                     //약수는 자기자신을 포함하므로 answer = n으로 해준다
    
    for( let i = 1; i <= n/2; i++) {    //n을 2로 나누어도 그 위로 약수가 없으므로 i <= n/2

        if( n % i === 0) {
            answer += i;
        }
    } 
    return answer;
}

function solution(n) {
    const answer = new Array( n ) //answer에 길이 n인 빈 배열을 생성한다.
                    .fill( 1 )    //생성된 빈 배열을 1로 채워준다.
                    .reduce((acc,cur, i)=> {   //cur뒤에 인덱스값을 붙일 수 있다.
                        return n % (cur + i) === 0
                            ? acc + (cur + i)   //약수가 맞다면 약수를 더한 값을 다음으로 넘겨주고
                            : acc  //약수가 아니라면. 더하지 않고 그냥 다음으로 넘겨준다.
                        // console.log(acc,cur+i) 
                    },0) ;
    return answer;
}
//fill, new Array(), reduce((초기값, 누적값, 인덱스))를 이용한 식