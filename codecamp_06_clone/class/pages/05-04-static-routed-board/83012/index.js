import {useQuery, gql} from '@apollo/client'

const FETCH_BOARD = gql`

    query fetchBoard($number: Int) {

        fetchBoard ( number : $number  ) {
            number
            writer
            title
            contents    
        }
    }
`

export default function StaticRoutedPage() {
    // 자바스크립트 부분
    const {data} = useQuery(FETCH_BOARD, {
    //data는 undefined 상태였다가 FETCH_BOARD가 데이터를 요청하면 data가 값을 가지게 된다
    //불러오는 동안 텍스트 들을 보여주고 data가 채워지면 값들이 나타난다.
    //그러므로 아래 JSX부분에 data && : 조건부 렌더링 을 추가해주어야 한다
    //하지만 너무 기므로 ?를 data 뒤에 붙여주는 Optional-Chaining으로 대신 해준다
        variables: {number: 83012}
    })
    
    console.log(data)



    return (
    // JSX부분
    // data && data(조건부 렌더링) = data?(optional chaining)
        <div>   
            <div>{data?.fetchBoard.number}번 게시글 이동완료</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </div>    
    )



}