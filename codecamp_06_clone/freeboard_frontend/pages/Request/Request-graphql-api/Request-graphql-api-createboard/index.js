// import axios from 'axios'
import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql`

    mutation createBoard($writer: String, $title: String, $contents: String){
        
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
        
    }
`

// export default function GraphqlBoardPage() { 밑에처럼 바꿔줄 수 있다 대신 맽 밑에 export default GraphqlBoardPage; 를 붙여준다.
const GraphqlBoardPage = () => {

    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const[writer, setWriter] = useState("")
    const[title, setTitle] = useState("")
    const[contents, setContents] = useState("")

    // async function callRestApi() { 화살표함수로 바꿈
    const callGraphqlApi = async () => {    
        // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식
        const result = await callApi({

            variables : {
                    writer : writer,
                    title : title,
                    contents : contents   
            }
        }) //graphql-api 방식

        console.log(result)
        console.log(result.data.createBoard.number)
        setData(result.data.createBoard.number)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter}/><br/>
            제목: <input type="text" onChange={onChangeTitle}/><br/>
            내용: <input type="text" onChange={onChangeContents}/><br/>
            <button onClick={callGraphqlApi}>글 등록하기</button>
            <div>{data}</div>   
        </>    

    )

}

export default GraphqlBoardPage;