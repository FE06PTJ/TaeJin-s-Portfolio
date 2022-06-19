        //문자열을 정수로 바꾸기
        // 문제 설명
        // 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

        // 제한 조건
        // s의 길이는 1 이상 5이하입니다.
        // s의 맨앞에는 부호(+, -)가 올 수 있습니다.
        // s는 부호와 숫자로만 이루어져있습니다.
        // s는 "0"으로 시작하지 않습니다.
        // 입출력 예
        // 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
        // str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

//수업풀이
function solution(s) {
    s = Number(s);
    console.log(s, typeof S)
}
//s의 타입 값이 undefined로 나옴.
//console.log는 보여주기만 하므로 undefined가 나오지만 return은 함수의 결과를 돌려준다.

//수업답안 1 ★실무사용★
function solution(s) {
    // s = Number(s);
    // return s;
    return Number(s);
}
//풀이
//Number()라는 문자열을 숫자로 변환하는 함수에 s를 넣어 함수의 결과를 돌려준다.

//수업답안 2
function solution(s) {
    return +s;
}
//풀이
//s값에 +를 붙여 함수의 결과를 돌려준다.
//+(1234) = 1234, +(-1234) = -1234, +(123) = 123

//수업답안 3
function solution(s) {
    return s / 1;
}
//풀이
//s값을 1로 나누어 주어 함수의 결과를 돌려준다.
//1234/1 = 1234, -1234/1 = -1234, 123/1 = 123

//수업_답안 4
function solution(s) {
    return s * 1;
}
//풀이
//s값에 1을 곱해주어 함수의 결과를 돌려준다.
//1234*1 = 1234, -1234*1 = -1234, 123*1 = 123

// return -s의 경우 -(1234) = -1234, -(-1234) =1234, -(123) =-123이 되므로 옳지 않다.


        //같은 숫자는 싫어
        // 문제 설명
        // 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

        // arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
        // arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
        // 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

        // 제한사항
        // 배열 arr의 크기 : 1,000,000 이하의 자연수
        // 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
        // 입출력 예
        // arr	answer
        // [1,1,3,3,0,1,1]	[1,3,0,1]
        // [4,4,4,3,3]	[4,3]

function solution(arr) {
    const answer = [];
    for(let i=0; i<arr.length; i++) {
        if(answer[answer.length-1] !== arr[i]) {  //배열answer의 마지막index 데이터가 arr[i]값과 같지 않으면
            answer.push(arr[i])                   //answer의 배열에 arr[i]의 값을 넣어주어라.                     
        }
    }
    return answer;
}
//풀이
//const에 answer라는 변수명을 지정해주고 answer에 빈배열을 할당해준다.
//for문을 이용해 i가 초기값을 0으로 가지고, i는 arr의 length값보다 작을때(인덱스이므로 -1을 해서 ( <= )를 쓰는 대신 -1을 붙이지 않고, ( < )를 사용함.), i에 1씩 더해준다
//if문을 이용해 answer의 length-1 값의 배열과 arr의 i 배열값이 같지 않으면 
//비어있는 배열인 answer에 arr의 i값을 넣어준다. 
//answer의 length-1 값의 배열과 arr의 i 배열값이 같으면 answer에 push해주지 않는다.
//answer값을 반환해준다. 



//핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

// // 수업_답안
function solution(phone_number) {
    let answer = "";

    for(let i=0; i<phone_number.length; i++){
        if(i<phone_number.length - 4) {
            //뒷4자리를 제외한 앞의 번호들을 가져온다
            answer += "*";
        } else {
            //뒷4자리는 그대로 들어간다
            answer += phone_number[i];
        }
    }
    return answer;
}
//풀이 
//let으로 answer라는 빈값을 할당해주고, for문을 이용해서 인덱스는 0부터 시작하므로 i의 초기값은 0을 주고,  i가 phone_number의 length보다 작을 때, i에 1씩 더해준다.
//length값은 배열이므로 -1을 해주어야하는데 -1 대신 ( < ) 기호를 사용해주었다. -1일 경우 ( <= ) 사용한다.
//for문 앞에 if문을 넣어주어 i가 phone_number의 length보다 4만큼 작으면 현재 비어있는 answer에 "*"를 넣어준다.
//그렇지 않으면 "*"로 채워져있는 answer에 phone_number배열의 i 인덱스 값을 넣어준다.

//수업답안_리팩토링(slice)
function solution(phone_number) {
    let answer = "";

    //1.뒷4자리 제외한 앞번호들은 로 채워준다
    answer = answer.padStart(phone_number.length - 4, "*");
    //2.뒷4자리를 잘라서 문자열 뒤에 추가
    answer += phone_number.slice(phone_number.length - 4, phone_number.length);

    return answer;
}
//풀이
//let으로 answer라는 빈 값을 주고, 비어있는 answer에 padStart로 phone_number의 길이의 -4만큼을 *로 채워준다.
//"*"로 채워져있는 answer값에 slice를 이용해서 phone_number의 length의 -4부터 phone_number의 length만큼 phone_number에서 잘라와서 넣어준다.
//phone_number의 길이의 값은 배열의 length이므로 넣어주는 값은 인덱스이므로 -1을 해주어야한다. slice에서는 끝낼 인덱스 값을 포함하지 않으므로 phone_number의 length값을 넣어주었다.


// //slice

// // 1. 배열, 문자열에서 사용가능한 메서드
// // 2. 원본이 저장되지 않는다.

// str = "abcde"

// str.slice( 1, 4 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
// str.slice( 1, 3 + 1 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
// str.slice( 1 ) //문자열 끝까지 잘라오기
// str.slice( 1, str.length ) //문자열 끝까지 잘라오기