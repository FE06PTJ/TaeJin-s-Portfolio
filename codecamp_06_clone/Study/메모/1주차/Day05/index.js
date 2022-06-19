// // Routing : 페이지 이동
// // Apollo-Client/Query : 게시물 가져오기
// // try-catch : API 요청시 에러 발생시 사용

// // 객체에서 키랑 value가 같은면 해당 value를 생략할 수 있다
// // => shorthand property

// // 주석하는 방법 : 컨트롤 + / 
// // 자바스크립트 : //
// // graphql : #
// // JSX : /*

// git pull origin master
// git stash
// git stash pop
// git fetch --all
// git reset --hard origin/master

// <셋팅부분>
// FETCH_BOARD  
//  query {
//     .....
//     ....
//     ...}
// <실행부분>
// const{data} =useQery(FETCH_BOARD) 

// 동적 라우팅
// 정적라우팅을 묶어주는 것
// 대괄호로 폴더이름을 묶어주어야함 
// ex>[aaa]
// 폴더 이름을 의미하는 것이 아니라 어떤 내용이든 입력이 가능하다는 뜻
// aaa는 /boards/aaa 처럼 폴더이름이 아닌 aaa는 변수를 의미한다. 이 변수를 fetchBoard 등을 해주는 것.

// 페이지를 하나만 만들고 그 페이지 안에서 원하는 내용들이 동적으로 바뀌도록 할 수 있다.

// 일반적으로 정적 라우팅을 사용하지만 
// 특정페이지의 상세페이지를 볼 때는 동적 라우팅을 사용한다

// const router = useRouter()
//  router.query = {
//    aaa: 1
// }

// 검사-콘솔-pathname을 누르면 아래에 query:aaa 이런식으로 들어와있는 것을 볼 수 있다.
// 주소창에 직접 입력하여 들어가 볼 수 도 있다.

// try는 맨 윗 줄을 요청했을때 백엔드에서 문제가 생기면 에러가 들어오는데 그러면 그 아래 줄은 모두 건너뛰고 catch로 넘어간다.
// 그래서 finally에 로그를 남길 수 있게 한다 또, 데이터를 모으기 위해 로그를 기록하기도 한다.
// 실패하든 성공하든 finally에 들어간다.

// 포트폴리오 게시글 등록에서 작성 하면 해당 내용을 보여주도록 하는 것

// 상세페이지 주소는 
// /boards/30 : 30번째 페이지의 게시글 페이지
// /boards : 게시글 목록 페이지
// /boards/new : 게시글 생성 페이지 
// 이런 식으로 통일한다.

// false error : host error 3000으로 설정할것
// extend : myFAQ에서 같은 글자 하나만 빨간거 예로 들면 될듯


// 목록으로 수정하기 삭제하기까지 만들기



// 반복문
// 일정 로직을 계속 반복해서 실행하는 문법

// for(최초식, 조건식, 증감식)문
// 최초식: 어디서부터 시작하는 지를 결정하는 시작점
// 조건식: 반복문을 실행하는 조건을 설정, 해당 조건식이 true일때만 로직을 실행
// 증감식: 반복문을 실행할 때마다 최초식을 증감. 반복문의 실행 횟수를 조절 가능
// break : 원하는 구간에서 반복문을 종료
// continue : 원하는 구간만 건너띄고 사용?
// (i=i+1)=(i++)

// for - in문 : 객체를 반복할 수 있다. 문자열,객체,배열에 사용
// for (let key in object)
// for(최초식 in 반복할대상)
// 배열과 문자열은 인덱스값, 객체는 반복할 개체의 키값들을 가져온다
// let obj = {
//   name: "철수",
//   age: 122
// }
// for(let aa in obj){
//   console.log(aa, obj[aa])
// }

// let str = "abc";

// for(let aa in str){
//   console.log(aa, str[aa])
// }


// for - of문: 각각의 요소들을 가져올 수 있다. 문자열,배열에 사용
// for(let key of object)
// 문자열의 각각의 해당되는 요소들을 가져옴.
// 속도가 느린 단점이 있다.
// let str = "abc";

// for(let data of str){
//   console.log(data, str[data])
// }

// for(let i=0; i < str.length; i++){
//   console.log(str[i])
// }
// ->for문으로 바꿀 수 있다.

// forEach : 베열에만 사용할 수 있는 메서드
// Array.forEach(function())
// 고차함수 : 함수를 인자로 받거나 결과로 반환하는 함수
// 각각의 배열 요소를 가져온다.
// const arr = [1,2,3];

// arr.forEach(function(el) {
//   console.log(el)
// })

// arr.forEach(el => {
//   console.log(el)
// })
// ->화살표함수로 사용가능



// while : 최초식, 조건식, 증감식이 분할되어 사용. for와 동일한 사용범위
// while()
// while문 밖에다가 최초식 써줌
// let count = 0; //최초식
// while(count !== 5){ //조건식
//   count++; //증감식
//   console.log(count)
// }

// let count = 0; //최초식
// while(count !== 5){ //조건식
//   count++; //증감식

// }
//   console.log(count)

// 결과가 언제 나올지 모를때 while문을 사용한다. 즉, 조건식을 어떻게 설정해야할지 모를 때 사용한다. 단 , 조건식을 잘못 설정하면 무한 루프된다.

