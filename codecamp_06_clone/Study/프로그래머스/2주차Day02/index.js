        // 문제 설명
        // 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

        // 제한 조건
        // num은 int 범위의 정수입니다.
        // 0은 짝수입니다.
        // 입출력 예
        // num	return
        // 3	"Odd"
        // 4	"Even"
function solution(num) {
    let answer = '';
    
    if(num % 2 === 0 ){
        //나머지가 1인 경우 홀수
        answer = "Even";
    } else {
        //나머지가 1이 아닌 경우
        answer = "Odd";
    }
    
    return answer;
    
}
//풀이
//let으로 answer라는 변수명에 빈값을 준다.
//if문을 사용해 num을 2로 나눈 나머지가 0이면 
//answer에 "Even"을 넣어준다.
//else 그렇지 않으면 
//answer에 "Odd"를 넣어준다.
//answer의 결과를 돌려준다.

function solution(num) {
    let answer = '';
    
    if(num % 2 === 0 ){
        //나머지가 1인 경우 짝수
        return "Even"
    }
    //나머지가 1인 경우 홀수
    return "Odd"

}
//풀이
//let으로 answer라는 변수명에 빈값을 준다.
//if문을 사용해 num을 2로 나눈 나머지가 0이면 
//answer에 "Even"을 넣어준다.
//return문을 통해 even이 아니면 odd이므로 else를 붙일 필요없이 return Odd를 해주면 된다

function solution(num) {
    return num % 2 === 0 ? "Even" : "Odd"
    
    // if(num % 2 === 0 ){
    //     //나머지가 1인 경우 짝수
    //     return "Even"
    // }
    // //나머지가 1인 경우 홀수
    // return "Odd"

}
//삼항연산자를 이용한 리팩토링
//풀이
//num을 2로 나눈 나머지가 0인 것이 참이면 "Even" 거짓이면 "Odd"를 반환한다.



        //정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
        // 제한사항
        // arr은 길이 1 이상, 100 이하인 배열입니다.
        // arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
        // 입출력 예
        // arr	return
        // [1,2,3,4]	2.5
        // [5,5]	5
function solution(arr) {
    //배열의 길이는 배열에 총 몇개의 데이터가 있는지 나타내는 것이다
    //문제의 경우 1개이상 100개이하의 데이터가 들어있음
    //문제에서 arr는 정수를 담고 있는 배열이라고 했으므로 숫자
    //평균값 = (배열의 데이터의 총 합)/(배열의 길이)
    let answer = 0;
    
    for(let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    //for문을 이용해 총합을 구하는 식
    
    return answer / arr.length;
}
//풀이
//let으로 answer라는 변수에 초기값을 0을 할당해준다.
//for문을 이용하여 i의 초기값은 0, i가 arr의 length보다 작으면 i에 1을 더해준다.(배열이므로 arr의 length보다 작다고 해주었다. ( <= ) 를 쓸 경우 arr.length-1해준다.)
//for문을 만족하면 answer에 arr 배열의 i값을 더해준다.(for문에서 i가 arr의 length보다 작을때까지 이므로 i가 arr의 length보다 작을때까지 for문을 돌린다.)
//answer를 arr.length로 나누어 준값을 반환해준다.(배열의 데이터의 총합/배열의 길이)


function solution(arr) {
    const answer = arr.reduce( (acc,cur) => {
        return acc + cur;
         //다음 반복문으로 누적값을 넘겨주려면 return을 이용해준다 
    }, 0)
    return answer / arr.length
 }
//reduce는 대표적인 고착함수로 기본적으로 2개의 인자를 받음 acc, cur
//reduce는 초기값을 지정해줄 수 있다. 
//풀이
//const로 answer라는 변수명을 지정해주고, answer는 arr의 reduce()의 누적값을 acc, 현재값을 cur이라 하면
//acc와 cur을 합한 값을 반환해준다.
//reduce()의 초기값은 0으로 할당해준다.
//acc+cur 값을 반환해준 answer를 arr의 length로 나누어준다.

            //reduce
    //각 배열의 원소에 대해 함수를 실행하고, 하나의 결과값을 반환.
    //배열의 총 원소의 합을 구해야 할 떄 사용
    //arr.reduce(  (누적값, 현재값)=>{현재값+누적값}, 초기값  )
    //초기값은 처음 연산을 시작할 때 깔아놓는 값. 
    //반환값은 초기값 + 모든 원소 연산값
    //초기값이 없으면 0이 기본값
    let arr4= [1,2,3,4,5,6,7,8,9]
    arr4.reduce((acc,cur)=>{
    console.log(`누적값: ${acc}, 현재값 : ${cur}`)
    return acc+cur
    })

    let arr5= [1,2,3,4,5,6,7,8,9]
    arr5.reduce((acc,cur)=>{
    console.log(`누적값: ${acc}, 현재값 : ${cur}`)
    return acc+cur
    },10)



        //  문제 설명
        // 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

        // 재한사항
        // s는 길이가 1 이상, 100이하인 스트링입니다.
        // 입출력 예
        // s	return
        // "abcde"	"c"
        // "qwer"	"we"

function solution(s) {
    const center = Math.floor(s.length / 2);
    //s.length/2가 "abcde"=>5/2 = 2.5처럼 소수점으로 끝나면 인덱스는 소수를 인식하지 않으므로 undefined가 끈다 
    //소수점을 제거해주기 위해서 Math.floor() : 내림처리 를 사용해준다.
    let answer = s[center];
    
    if( s.length % 2 === 0 ){
        //짝수 문자열일 경우에는 가운데 인덱스로부터 앞에 있는 인덱스의 문자까지 추가해서 리턴한다.
        answer = s[center - 1] + answer;
        //answer가 2이므로 인덱스의 2번째인 e를 뽑아오므로 s[center-1]을 해주어 1번째 인덱스를 뽑아와서 더해준다
    }
    
    return answer; 
}
//풀이
//const로 center라는 변수명을 지정해주고, center에 s의 length값을 2로 나누어준 값을 Math.floor로 내림처리 해준값을 넣어준다.
//let으로 answer라는 변수명을 지정해주고, answer에 s의 배열의 center값의 index값을 넣어준다.
//if문을 사용해 s의 length를 2로 나눈 나머지값이 0과 같을 경우 
//answer에 s의 배열의 center-1값의 인덱스와 answer를 더해준다.
//answer를 반환해준다.


//삼항연산자를 이용
function solution(s) {
    const center = Math.floor(s.length / 2);
    return s.length % 2 === 1
        //s.length % 2를 해도 0아니면 1로 나와서 뒤의 === 1 도 생략이 가능하다
        ? s[center] //홀수문자열
        : s.slice(center-1,center+1) //짝수문자열
    //slice(자르기시작할 인덱스, 자르기끝낼 인덱스+1)
}
//풀이
//const로 center라는 변수명을 지정해주고 center는 s의 length값을 2로 나눈값을 Math.floor로 내림처리 해준 값을 넣어준다.
//s의 length값을 2로 나눈 나머지가 1일때의 값이 참이면 s의 center값의 배열의 인덱스를 반환해주고, 거짓이면 s를 slice를 통해 
//s의 배열의 center-1 값의 인덱스에서 자르기를 시작하고, center+1 값의 인덱스에서 자르기를 끝내준다.

// //slice

// // 1. 배열, 문자열에서 사용가능한 메서드
// // 2. 원본이 저장되지 않는다.

// str = "abcde"

// str.slice( 1, 4 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
// str.slice( 1, 3 + 1 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
// str.slice( 1 ) //문자열 끝까지 잘라오기
// str.slice( 1, str.length ) //문자열 끝까지 잘라오기