// import axios from 'axios'
import {useMutation, gql} from '@apollo/client'
import {useState} from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
            createProduct(seller: $seller, createProductInput: $createProductInput){
                _id
                number
                message
            }
        
    }
`

// export default function GraphqlBoardPage() { 밑에처럼 바꿔줄 수 있다 대신 맽 밑에 export default GraphqlBoardPage; 를 붙여준다.
const GraphqlProductPage = () => {

    const [data, setData] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const[seller, setSeller] = useState("")
    const[name, setName] = useState("")
    const[detail, setDetail] = useState("")
    const[price, setPrice] = useState("")



    // async function callRestApi() { 화살표함수로 바꿈
    const onClickSubmit = async () => {    
        // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식
        const result = await createProduct({
            variables : {
                seller: seller,
                createProductInput : {
                    name : name,
                    detail : detail,
                    price : price,

                }
            }
        }) //graphql-api 방식

        console.log(result)
        console.log(result.data.createProduct._id)
        setData(result.data.createProduct._id)
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }

    const onChangePrice = (event) => {
        setPrice(parseInt(event.target.value))
    }

    return (
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br />
            상품명: <input type="text" onChange={onChangeName}/><br />
            상품내용: <input type="text" onChange={onChangeDetail}/><br />
            상품가격: <input type="text" onChange={onChangePrice}/><br />
            <button onClick={onClickSubmit}>상품 등록하기</button>
            <div>{data}</div>   
        </> 
    )

}

export default GraphqlProductPage;