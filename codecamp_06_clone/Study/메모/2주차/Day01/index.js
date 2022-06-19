// 비밀번호는 한번 데이터베이스에 입력되면 보안을 위해 프론트에서 조회되지 않는다. 

// 옵셔널 체이닝과 조건부 렌더링은 ?를 기준으로 없으면 앞을 잇으면 뒤를 보내준다.
// 옵셔널 체이닝:  {data?.fetchBoard?.writer} 
// 조건부 렌더링:  {data && data.fetchBoard.writer} 

// 삼항 연산자는 ?뒤는 참, :은 거짓일때 보내준다. 단, 코드가 길어지면 :을 찾기 힘드므로 한줄 정도일때 사용해주는 것이 좋다.
// 삼항 연산자:  {data?.fetchBoard.writer : <div>Loading</div>}

// 가능하면 코드를 나눠서 100줄 이하로 작성해준다.

// html과 js를 각각 presenter, contianer로 나눠준다.

// 각각 받을때는 { }를 사용
// export default는 한개 기본값이므로 { }를 안해줘도 된다 
// import할때 이름을 바꿔줘도 된다. 대신 return의 이름이 바뀐 이름이어야한다.

// import title as Mystyles T
// 모듈의 함수를 사용할때 title.div처럼 함수마다 t를  입력하기 귀찮을 때 import as로 모듈의 이름 지정가능.

// setState의 동작원리 함수가 다 끝나면 바뀜
// 그래서 한단계 느리게 동작한다. 리렌더링.
// 그래서 let은 안되지만 state는 된다.?
// 리렌더링을 최소화하기 위해 . state는 한줄씩 렌더링을 하는 것이 아니라 함수가 다 끝나면 묶어서 렌더링을 해준다. 
// ㅂ을 치는 순간  event.target.value는 ㅂ이지만 myContents는 아직 빈값이므로 setIsActive는 false ㅂㅏ를 입력해주면 event.target.value는 바 myContents는 ㅂ이므로 작동한다. 이것은 event.target.value를 if문의 myContents 대신 넣어주면 된다. BoardWrite.container.js 참조

// <JS기초>
// 호이스팅은 실행컨텍스의 정보를 수집하면서 생기는 현상이다.

// 스택이 너무 많이 쌓여서 오버 플로우가 걸리는 것을 스택 오버 플로우라고 한다.
// 자바스크립트는 대부분 스택으로 만들어져 있고, 함수자체는 스택이지만 클래스를 통해서 큐를 만들 수 있다.


// <Daily Scrum>
// 아토믹 패턴 : 컴포넌트를 하나하나 쌓아서 사용하는 것


// fontawesome

// import에서 fa뒤의 단어를 넣어줘야 fontawesomeIcon을 사용해줄수 있다.

// <Book>FontAwesomeIcon icon={faBookmark}</Book>


// //slice

// // 1. 배열, 문자열에서 사용가능한 메서드
// // 2. 원본이 저장되지 않는다.

// str = "abcde"

// str.slice( 1, 4 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
// str.slice( 1, 3 + 1 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
// str.slice( 1 ) //문자열 끝까지 잘라오기
// str.slice( 1, str.length ) //문자열 끝까지 잘라오기