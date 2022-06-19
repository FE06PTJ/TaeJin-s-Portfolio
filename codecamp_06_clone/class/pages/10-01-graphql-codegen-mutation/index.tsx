// import axios from 'axios'
import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'
import { IMutation, IMutationCreateBoardArgs } from '../../src/commons/types/generated/types'

const CREATE_BOARD = gql`
    #  아래의 variables의 writer,title,contents가 여기 들어가서 아래의 createBoard에 들어간다.묶음 배송을 해줄 수 있기 때문에 이런식으로 2번 해준다.
    mutation createBoard($writer: String, $title: String, $contents: String) {

        # createProduct(title: $title){
        # }
        # fetchBoard(title: $title) {
        # }

        createBoard(writer: $writer, title : $title,contents : $contents
        ) {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage() {

    let aaa: number = 3

    const[myWriter, setMyWriter] = useState("")
    // const[myWriter, setMyWriter] = useState<string>("") //이런식으로 useState뒤에 넣어줘야한다.

    const[myTitle, setMyTitle] = useState("")
    const[myContents, setMyContents] = useState("")

    const [data, setData] = useState("")
    const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(CREATE_BOARD) 
    //Pick을 유틸리티 타입이라고 한다.

    // async function callRestApi() { 화살표함수로 바꿈
    const callGraphqlApi = async () => {    
        // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식
        const result = await createBoard({

            variables : {
                writer: myWriter,
                title : myTitle,
                contents : myContents
            }

        }) //graphql-api 방식

        result.data?.createBoard

        console.log(result)
        console.log(result.data?.createBoard?.message)
        if(result.data?.createBoard?.message) setData(result.data?.createBoard?.message)

    }

    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
    }

    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
    }

    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
    }

    return (

        <div>            
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button>  <br/>
            작성자 : <input type="text" onChange={onChangeMyWriter}/> <br/>
            제목 : <input type="text" onChange={onChangeMyTitle}/> <br/>
            내용 : <input type="text" onChange={onChangeMyContents}/> <br/>
            {/* <div>{data}</div> */}                   
        </div>    

    )

}