// import axios from 'axios'
import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'

const CREATE_BOARD = gql`
    #  아래의 variables의 writer,title,contents가 여기 들어가서 아래의 createBoard에 들어간다.묶음 배송을 해줄 수 있기 때문에 이런식으로 2번 해준다.
    mutation createBoard($writer: String, $title: String, $contents: String) {

        # createProduct(title: $title){
        # }
        # fetchBoard(title: $title) {
        # }

        createBoard(
            writer: $writer,
            title : $title,
            contents : $contents
        ) {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    // async function callRestApi() { 화살표함수로 바꿈
    const callGraphqlApi = async () => {    
        // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식
        const result = await callApi({

            variables : {
                writer: "철수",
                title : "제목",
                contents : "내용"
            }

        }) //graphql-api 방식

        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }

    return (
        <>            
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>  
            <div>{data}</div>         
        </>    

    )

}