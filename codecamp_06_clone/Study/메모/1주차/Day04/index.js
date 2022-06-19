// package.json 확인

// 동기와 비동기 방식 Async-Await

// 게시글을 등록하는데 걸리는 시간 전에 게시글을 불러오기하면 요청 오류가 생긴다

// 외부에 요청하는 기능들 다른컴퓨터와 연결하는 기능들은 비동기로 작동한다. 즉, 비동기는 요청들이 서로 기다릴 필요가 없을때 사용한다. 동시에 여러 일을 할 때 사용한다.

// 동기는 서버 컴퓨터가 작업이 끝날때까지 기다리는 통신이다. 요청 1개를 완료하고, 다음 요청을 완료하지만 비동기는 서버에 요청(등록, 수정, 삭제 등) 저장이 될 떄까지 기다리지 않고, 다른 작업을 진행한다.

// 요청부터 받을때까지 0.1초가 걸린다.
// 자바스크립트는 동기로 작동하지만 axios같은 라이브러리 들이 비동기로 작동하게 해주는데 요청을 가져오겠다고 약속만 하고 바로 코드를 실행하므로 promise라고 뜬다.

// 비동기를 동기로 바꿔주는 명령어
// async/await : 같이 사용해준다
// await가 데이터를 가져올때까지 기다려주는 역할을 하는데 await를 사용하기 위해서는 async가 필수적으로 같이 사용되어야 한다.

// return() 안에 html이 들어가면 함수형 컴포넌트
// 04-01-rest-get 참고

// JSX를 div로 묶어준다. 뭘로 묶어야할지 모를때는 <> : 프래그먼트로 묶는다.

// package.json은 목록, node modules가 실제 위치

// "https://koreanjson.com/posts/1"에서
// posts/1 : 엔드포인트

// pages에서 함수형 컴포넌트를 만들어서 웹브라우저에 보이게 하려면 export default를 함수 앞에 붙여준다.
// pages = / 로 보면 된다.

// pending : 지연됨,기다림

// var : 변수를 먼저 할당하지 않아도  실행됨. 예전방식
// console.log(child)
// var child = "철수"

// var child = undefined;
// console.log(child)
// child = "철수"

// const, let : 차례로 읽기 떄문에 변수나 함수를 먼저 할당하지 않으면 실행되지 않음. 
// const나 let도 undefined로 지정을 해두는 대신 변수나 함수를 할당하기 전에 접근할수 없게 TDZ(Tempral Dead Zone)으로 지정해 놓는다.
// const:상수. var,let: 변수 function:함수
// --------
// hello()

// function hello(){
//     console.log("안녕하세요")
// }
// 는 잘 작동하지만
// -------------
// hello2()

// const hello2 = function(){
//     console.log("안녕하세요")
// }
// const나 let은 작동하지 않는다.

// const hello2 = () => {
//     console.log("안녕하세요")
// }
// 화살표 함수

// var child = "철수"
// var child = "영희"
// console.log(child)
// 영희

// 중복 또한 마찬가지

// function hello() {
//     console.log("안녕하세요")
// }
// function hello() {
//     console.log("반갑습니다")
// }
// 함수도 마찬가지



// _app.js : 세팅 파일. 어떤 파일이든 실행되기 전에 가장 먼저 실행되는 파일. 최우선순위

// globals.css 전체 파일에 적용되는 css파일

// Component : 함수형 컴포넌트를 의미. function~~~



// const [실행함수] = useMutation(임의의 이름)
// use : hooks


// console-network-preview나response에 제대로 들어갔는지 확인하기

// rest-API는 요청을 하나씩 해주는데 graphql은 요청들을 묶어서 한꺼번에 요청한다.


// <DailyScrum>
// HTTP
// API : 컴퓨터끼리 상호작용하도록 도와주는 매개체
// rest-API(axios), graphql-API(apollo-client)
// JSON JavaScript Object Notation

// 동기실행 : 서버 컴퓨터의 작업이 끝날 때까지 기다린 후 다음 작업을 실행하는 통신
// 비동기실행 : 서버 컴퓨터의 작업이 끝날 때까지 기다리지 않고 작업을 실행하는 통신

// axios나 apollo-client 같은 라이브러리들이 비동기 통신을 하므로 직접 동기 통신을 하도록 async, await를 사용해준다.

// async function 함수명() { await //서버에 요청하는 코드}
// 화살표함수로 변환
// const 함수명 = async() => { await //서버에 요청하는 코드}

