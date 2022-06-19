//수정하기 페이지

import BoardWrite from '../../../../src/components/units/board/09-board-write/BoardWrite.container'
import { useQuery, gql } from '@apollo/client'
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
    const {data} = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.mynumber)}
        // ${router.query.mynumber} 가 [mynumber]이므로 대신 경로에 넣어준다.
    })
    return(
        <BoardWrite isEdit={true} data={data}/>
    )
}