import {Title, Writer, Contents} from './dynamicRouted.styles'    

export default function DynamicRoutedPresenter(props){
    return(   
    // JSX부분
        // data && data(조건부 렌더링) = data?(optional chaining)
        <div>
            <div>{props.data?.fetchBoard.number}번 게시글 이동완료</div>
            <Title>작성자: {props.data?.fetchBoard.writer}</Title>
            <Writer>제목: {props.data?.fetchBoard.title}</Writer>
            <Contents>내용: {props.data?.fetchBoard.contents}</Contents>
        </div>
        )
}