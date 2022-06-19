import {useQuery, gql} from '@apollo/client'
import styled from '@emotion/styled'
import { useMutation } from '@apollo/client'

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

const DELETE_BOARD = gql`
    mutation deleteBoard($number: Int){
        deleteBoard(number: $number){
            message
        }
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row; //있어도 되고 없어도 된다.
`

const Column = styled.div`
    width: 20%;
`



export default function MapBoardPage() {
    // 자바스크립트 부분
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const {data} = useQuery(FETCH_BOARDS)
    const onClickDelete = (event) => {
        deleteBoard({
            variables: { number: Number(event.target.id) },
            refetchQueries: [{query: FETCH_BOARDS}]
            //삭제를 하게되면 백엔드에 삭제를 해달라고 요청을 한다. 
            //삭제를 해서 데이터는 없어져 있지만 보고 있는 화면은 그대로 이므로 바뀐 데이터로 다시 fetch board를 해줘야 한다.
        })
    }

    return (
    // JSX부분
        <div>
            {data?.fetchBoards.map( (el) => (
            // {data?.fetchBoards.map( (el, index) => (
            // index는 map이 실행시켜준 순서이다
            // map에서 key를 줄 때는 index를 주면 안된다.
            //원래는 return이 들어있으나 생략해준것이다. 생략만 해줬으니 <Row></Row>로 감싸주었다.
                <Row key={el.number}>
                {/* <Fragment key={el.number}></Fragment> */}
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    {/* el.number나 el.id처럼 고유한 것에 키를 주기 */}
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                    <Column>
                        <button id ={el.number} onClick={onClickDelete}>삭제</button>
                        {/* onClickDelete를 이벤트핸들러함수 라고한다. */}
                    </Column>
                    {/* <Column>{index}</Column> */}
                    {/* <div>내용: {el.contents}</div> */}
                </Row>
            ))}   
        </div>  
        //<Fragment></Fragment>, <></> : 아무 의미 없는 빈 태그
        //단, <></>에는 key를 쓸 수 없지만 <Fragment></Fragment>에는 쓸 수 있다.<Fragment key={}></Fragment>  
    )
}