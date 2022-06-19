import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'

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
    const router = useRouter()
    console.log(router)

    const {data} = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.number)}
    })
    
    console.log(data)
    //console에 query:aaa 들어와있음
    //주소창에 직접 넣어서 이동할 수도 있다.



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