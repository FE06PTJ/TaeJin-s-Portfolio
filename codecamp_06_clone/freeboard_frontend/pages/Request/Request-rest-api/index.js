import axios from 'axios'
import {useState} from 'react'


export default function RestGetPage() {

    const [data, setData] = useState("")

    // async function callRestApi() { 화살표함수로 바꿈
    const callRestApi = async() => {    
        const result = await axios.get("https://koreanjson.com/users")

        console.log(result)
        console.log(result.data[0].name)
        setData(result.data[0].name)
    }

    return (
        <>
            
            <button onClick={callRestApi}>REST-API 요청하기</button>
            <div>{data}</div>            
        </>    

    )

}