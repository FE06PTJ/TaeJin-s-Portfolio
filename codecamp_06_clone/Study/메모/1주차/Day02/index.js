//Day02

//const[state, setState] = useState("")
//const[count, setCount] = useState(0)

//React

//component
//UI 또는 기능을 부품화해서 재사용 가능하게 하는것
//import를 통해 필요한 component를 가져와서 사용한다
//형태 import를 만들어두고 가져와서 세부적인 것만 조절.

//복붙의 경우 수정을 일일히 해야하지만
//component는 원본을 하나 만들고 필요한 페이지에서 import하는 것이므로 원본만 수정하면 모두 수정됨.
//데이터를 같이 import하거나 UI 부분만 import 가능

//하나의 page도 하나의 큰 component라고 볼 수 있다

//<함수형>
//export default function BoarsNewPage() {
// return (
//  <div>게시글 등록 화면</div>
// )

//function _____ : 함수형 component
//코드 전체는 페이지 component
//}

//<화살표형>
//const New = () => <div> 이것은 함수형 컴포넌트입니다.</div>

//export default New

//예전에는 class형 component를 만들었으나 현재는 함수형으로 사용한다. 훨씬 간단해지기 때문. 함수형을 화살표 함수로 표현이 가능. 클래스형을 함수형으로 바꿀 줄 알아야 한다.

//<클래스형>
//import { Component } from "react";

//class New extends Component {
//  render() {
//    return <div>이것은 클래스형 컴포넌트입니다.</div>
//  }
//}

//export default New

//react-hooks이 나오면서 함수형 component 만들기가 가능해짐
//hooks : use로 시작하는 애들
//useState : State만들어주는애
//State : component 전용 변수

//border-bottom
//border-top

//모질라 css 선언 순서
//-보기 쉽고 유지보수가 쉬움

//state: 리액트 컴포넌트에서 데이터를 담기 위한 상자(변수)
//useState:상자를 만들어주는 기능
//setClassmate:상자안의 내용을 변경해주는 기능



//length() : 배열의 길이
//배열 안의 데이터들은 index 번호를 가지며 0부터 시작

//<데이터 조회>
//indexOf : 데이터의 index값 반환
//Array.indexOf()
//배열에 해당 데이터가 있으면 해당 데이터의 배열을 반환
//데이터가 없으면 -1을 반환

//includes : 데이터의 존재 여부 반환 (true/false)
//Array.includes()
//있으면 true 없으면 false


//<객체>
//객체 : 데이터들을 종류에 맞게 분류
//객체 사용시 { }사이에 넣는다
//객체 안에 객체를 넣을 수 있다
//객체의 데이터를 조회할 때는 객체의 Key값을 이용해 조회할 수 있다