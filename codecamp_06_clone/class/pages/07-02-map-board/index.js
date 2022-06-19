import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`

    query fetchBoards {

        fetchBoards {
            number
            writer
            title
            # contents    
        }
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row; //있어도 되고 없어도 된다.
`

const Column = styled.div`
    width: 25%;
`



export default function MapBoardPage() {
    // 자바스크립트 부분
    const {data} = useQuery(FETCH_BOARDS)

    return (
    // JSX부분
        <div>
            {data?.fetchBoards.map( (el) => (
            // {data?.fetchBoards.map( (el, index) => (
            // index는 map이 실행시켜준 순서이다
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    {/* el.number나 el.id처럼 고유한 것에 키를 주기 */}
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    {/* <Column>{index}</Column> */}
                    {/* <div>내용: {el.contents}</div> */}
                </Row>
            ) )}   
        </div>    
    )
}