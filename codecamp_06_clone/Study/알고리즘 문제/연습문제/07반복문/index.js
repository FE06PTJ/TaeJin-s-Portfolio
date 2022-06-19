//23. 숫자 더하기
//입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.
//num은 1이상의 자연수가 들어옵니다.
//만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.
function sum(num) {
    let count = 0
    
    for (let i = 1; i <= num; i++){
      count += i
      // count = count + i
    }
    return(count)
  }
  sum(3)
  sum(2)
  sum(5)

//24. 특정 문자열 세기
//문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.
//반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.
function countLetter(str){
    let count = 0
    // str = str.toUpperCase();
    //전체 문자열을 대문자로 만들어줌
    str = str.toLowerCase();
    //전체 문자열을 소문자로 만들어줌
    console.log(str)
    
    for(let i = 0; i < str.length; i++)
      if(str[i] === "a"){
        count++;
      } 
          return count;
  } 
  countLetter("I am from Korea")
  countLetter("A day without laughter is a day wasted")

//25. 문자열 삽입
//num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다. 
//num이 3일 경우에는 "1-2-3"입니다.
function makeNumber(num) {
    let answer = "";
    
    for (let i = 1; i <= num; i++){
      answer += i;
      
      if(i !== num){
        answer += "-";
      }
    }
    return answer;
  }
  
  makeNumber(5)
  makeNumber(7)

//26. 홀수 문자열
//num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
//num이 5일 경우에는 "135"입니다.
function makeOdd(num) {
    let answer = ""
    
    for(let i = 1; i <= num; i++) {
      if(i % 2 !== 0) {
        answer += i
      }
    }
    return answer
  } 
  
  makeOdd(5)
  makeOdd(7)

//27. 가장 큰 수 찾기
//str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
//만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.
function bigNum(str){
    let biggest = Number(str[0]);
    //이미 str[0]으로 1번째부터 도므로 밑에 let i=1로 두어 2번째 인덱스부터 돌게 한다
    for(let i = 1; i < str.length; i++) {
      if(Number(str[i])>biggest){
        biggest = Number(str[i])
      }
    } return biggest
  }
  bigNum("12345")
  bigNum("94382")