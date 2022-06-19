import {useMutation} from '@apollo/client'
import {useState} from 'react'
import {useRouter} from 'next/router'
import DynamicRoutingPresenter from './dynamicRouting.presenter'
import {CREATE_BOARD} from './dynamicRouting.queries'

export default function DynamicRoutingContainer() {
    const [isActive, setIsActive] = useState(false)

    const router = useRouter()

    const[myWriter, setMyWriter] = useState("")
    const[myTitle, setMyTitle] = useState("")
    const[myContents, setMyContents] = useState("")

    const [callApi] = useMutation(CREATE_BOARD)

    // async function callRestApi() { 화살표함수로 바꿈
    const callGraphqlApi = async () => {    
        // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식
        
        try {

            const result = await callApi({

                variables : {
                    writer: myWriter,
                    title : myTitle,
                    contents : myContents
                }
    
            }) //graphql-api 방식
    
            console.log(result)
            console.log(result.data.createBoard.message)
            alert("게시글 등록 성공")
            alert("상세페이지 이동")
            // router.push("/05-08-dynamic-routed-input/" + result.data.createBoard.number)
            router.push(`/quiz/05-dynamic2-routed/${result.data.createBoard.number}`)
        
        //문자열과 숫자열을 더해주면 하나의 문자열이 된다.
        //``안에 넣어주고 자바스크립트 변수,상수 등을 ${ }안에 넣어준다
        //이런 방식을 템플릿 리터럴 이라고 부른다.
        //예제
        //const banana = 3
        //const apple = 2

        //"철수는 바나나를" + banana +"개 가지고 있고," + "사과를" + apple + "개 가지고 있다"
        //`철수는 바나나를 ${banana}개 가지고 있고, 사과를 ${apple}개 가지고 있다`

        } catch(error){

            alert(error.message)

        } 

    }

    const onChangeMyWriter = (event) => {
        setMyWriter(event.target.value)
        setIsActive(true)
    }

    const onChangeMyTitle = (event) => {
        setMyTitle(event.target.value)
        setIsActive(true)
    }

    const onChangeMyContents = (event) => {
        setMyContents(event.target.value)
        setIsActive(true)
    }

    return (
        <DynamicRoutingPresenter
        onChangeMyWriter={onChangeMyWriter}
        onChangeMyTitle={onChangeMyTitle}
        onChangeMyContents={onChangeMyContents}
        callGraphqlApi={callGraphqlApi}
        isActive={isActive}
        />

    )

}