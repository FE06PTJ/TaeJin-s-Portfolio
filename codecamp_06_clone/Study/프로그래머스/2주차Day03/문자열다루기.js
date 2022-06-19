//문자열다루기
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true
function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false;
    }
    
    for(let i = 0; i < s.length; i++){
        if( isNaN( s[i] ) === true) {
            return false;
        }
    }
    return true;
}

//filter를 이용해서 문자열을 거르는 방법
function solution(s) {
    if(s.length !== 4 && s.length !== 6){
        return false;
    }
    const answer = s.split("")             //split(""): ""을 넣어주면 배열로 만들어짐
                    .filter( num => {      //filter사용시 return값 필수
                        return isNaN( num ) === true    //데이터가 숫자가 아닌 문자일 경우만 남긴다
                                                        //isNaN의 결과가 true 값인 경우(NaN 값인 경우)
                    })
    return answer.length === 0    // ( === )는 맞냐 아니냐를 판별해주는 것으로 보면 된다. 여기서는 answer.length가 0이냐 아니냐를 판별해준다.
    
    
    // for(let i = 0; i < s.length; i++){
    //     if( isNaN( s[i] ) === true) {
    //         return false;
    //     }
    // }
    // return true;
}



// str = "abc";
// Number(str)
// 0/0
//NaN = Not a Number
//문자열이 하나라도 포함되어 있는 문자열을 숫자로 나타내려고 하거나 0/0을 할 때 NaN값을 가져오게 된다.

let str = "123";

isNaN(str); false;
isNaN("123"); false;
isNaN("a");  true;//강제로 숫자 타입으로 변환한 결과가 NaN값인지 아닌지 검증
Number("a"); NaN;

isNaN("b123"); true;
Number.isNaN("b123"); false;
Number.isNaN(Number("b123")); true;

isNaN("123"); false;
Number.isNaN(Number("123")); false;

isNaN("0/0"); true;
Number.isNaN( "0/0" ); false; //들어오는 인자가 숫자값이 아니므로 false
Number.isNaN( 0/0 );true;

isNaN(undefined); true;
Number.isNaN(undefined); false;

//isNaN으로 숫자가 맞는지를 검증. NaN값이 맞는지를 검증
//숫자가 맞다면 (NaN값이 아니라면)false, 
//숫자가 아니라면 (NaN값이 맞다면) true
//숫자 타입으로 강제 변환한다.

//Number.isNaN : isNaN과 같은 기능을 하지만 디테일이 다르다
//숫자가 맞는지를 검증하는데 들어오는 인자가 숫자 타입이여야만 하고, 결과가 NaN값이 맞는지를 검증한다.
//isNaN보다 좀 더 엄격하게 NaN값을 검증한다.

