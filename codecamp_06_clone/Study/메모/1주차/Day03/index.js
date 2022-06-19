//Day03

//git pull origin master 최신화
//git branch 마스터 확인
//git remote -v  origin 위치
//git stash 임시저장
//git stash list 임시저장 목록
//git stash pop 최신 임시 저장 파일을 꺼내옴
//git stash pop [stash@{0}] [파일이름]임시저장파일꺼내옴

//add=>commit=>push (나중에 자세하게 배움)
//yarn dev는 package.json있는 곳에서 해야함
//pages가 시작위치(루트라고 부름) pages = /

// if (event.target.value !== "") {
//      setPasswordError("");
//    }
//내용이 비어있지 않으면 에러가 비워진다
//입력하면 에러가 사라짐 비어있으면 에러가 뜸

//APi
//회원가입이나 게시물 등록 등을 데이터베이스에 저장(?)

//파일 전송시 FTP라는 길이 만들어짐
//메일은 SMTP
//텍스트/하이퍼텍스트는 HTTP
//하이퍼텍스트 - >HTML : Hyper Text Markup Language 

//프론트엔드에서 state 등록 요청을 하면 HTTP를 통해 백엔드로 요청이 들어가고 백엔드에서 검증을 하고 DB에 저장하고 (key,value) 형태로 응답해준다
//백엔드 개발자마다 다르므로 텍스트로 응답해줄때 상태코드를 같이 보내준다(HTTP상태코드-위키백과)

//API : 담당자
//길을 여러개 만들어줌
//백엔드에서 API를 만들때 REST나 GRAPHQL로 만들어줌
//rest-API : 주소처럼 생긴 이름
//graphql -API : 일반 함수와 같은 이름
//ex)네이버에서 1번 게시글 조회
//rest-API : https://naver.com/board/1
//graphql-API : board(1)

//둘 다 HTTP를 이용하지만 설치해야 되는 파일이 다름
//rest-API : axios
//graphql-API : apollo client

//rest-API는 백엔드에서 준비 된 데이터를 다 받아오지만
//graphql-API는 원하는 데이터만 골라서 받아온다.
//그래서 rest-API는 매번 모든 데이터를 받아오므로 용량이 커서 받는 시간이 느려지므로
//graphql-API로 원하는 데이터만 받아서 용량도 줄이고 받는 시간도 단축.

//JSON(JAVA SCRIPT OBJECT NOTION)자바스크립트 객체 표기법- HTTP가 텍스트 또는 HTML이므로 객체를 ""를 붙여서 문자열로 주고 받음. = JSON형태로 주고 받는다

//일반적으로 open-API, public-API는 rest-API
//graphql-API 많이 해보면 rest-API는 쉽게 함

//API는 body+header로 구성
//body: 보내는 데이터가 들어가 있음
//header: 누가 뭘 보냈는지 요약 정보가 들어가 있음

//응답 : response 요청 : request

//CRUD(Create Read Update Delete) : 일반적으로 하나의 형태에 대해 CRUD로 최소 4개 이상의 API를 만들어줌
//등록 조회 수정 삭제 API
//rest-API
//등록 : post
//수정 : put
//삭제 : delete
//조회 : get
//post, put, delete, get을 method라고 부름 javascript의 method와 다른 의미

//graphql-API
//등록, 수정, 삭제 : mutation -> 데이터가 변경되는 API들
//조회 : query -> 데이터를 꺼내만 놓는 API

//rest-API 
//API연습 : 포스트맨
//API설명서(API-Docs) : 스웨거

//graphql-API 
//API연습,설명서 :  플레이그라운드


//Routes의 Endpoint 중요

//fetchProfile(): 프로파일 가져오기
//fetchProfiles():프로파일들 가져오기

//fetchProduct쪽이 실무용

//playground 

//id : string

//int! 있으면 앞부분만 쓰면 됨
//ex)
//query {
// fetchBoardsCount
//} 


//조건문(if)
//true대신 truthy
//false대신 falsy
//각각 동일한 결과를 리턴한다

//Truthy한 값
//- true
//- 0이 아닌 숫자 1이상의 수, 0 미만의 수
//- 빈 문자열이 아닌 문자열 "박태진"
//- 객체{ }
//- 배열[ ]

//Falsy한 값
//- false
//- 숫자0 0, -0
//- 빈 문자열 "  "
//- null(사용자가 임의로 설정한 것)
//- NaN(Nat a Number : 숫자가 아니다)
//-undefined

//if (true) {
//  console.log("Truthy한 값을 입력하셨습니다")
//} else {
//  console.log("Falsy한 값을 입력하셨습니다")
//}


//switch 문법

//const day = "월요일";
//let result = "";

//switch(day) {
//  case "월요일" :
//   result = "오늘은 월요일입니다"
//  case "화요일" :
//   result = "오늘은 화요일입니다"
//}

//console.log(result)

//case는 아래의 case까지 실행되므로 월요일 case에 break를 걸어준다

//const day = "화요일";
//let result = "";

//switch(day) {
//  case "월요일" :
//    result = "오늘은 월요일입니다"
//    break
//  case "화요일" :
//    result = "오늘은 화요일입니다"
//    break
//  case "수요일" :
//    result = "오늘은 수요일입니다"
//}

//console.log(result)

//case를 계속 사용하는 것은 비효율적이므로 break를 대신해서 default를 사용한다. 대신 default는 switch문의 최하단에 위치해 있어야 한다. 그렇지 않으면 동작하지 않는다

//const day = "수요일";
//let result = "";

//switch(day) {                              
//  default : result = "오늘은" + day + "입니다"
//}

//console.log(result)

//default와 case는 상관이 없으므로 "목요일"을 넣어도
//동작한다.
