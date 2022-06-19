//Container 컴포넌트

import {useState} from 'react'
import { useMutation } from '@apollo/client'
import ProductWriteUI from "./ProductWrite.presenter"
import{ CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries"
import { useRouter } from 'next/router'


export default function ProductWrite(props) {
    const router = useRouter() 
    const [isActive, setIsActive] = useState(false)
    
    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");

    const [data, setData] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    const onClickUpdate = async () => {
        await updateProduct({
            variables : {
                productId: String(router.query.myid),
                updateProductInput: {
                    name: name,
                    detail: detail,
                    price: price,
                }

            }
        })
        alert("게시글 수정에 성공하였습니다")
        router.push(`/quiz/08-product/${router.query.myid}`)
    }

    // async function callRestApi() { 화살표함수로 바꿈
        // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식

    const callGraphqlApi = async () => { 

        const result = await createProduct({

            variables : {
                seller: seller,
                createProductInput: {
                    name: name,
                    detail: detail,
                    price: price,
                },
        }
    
        }) //graphql-api 방식
        // console.log(result)
        // console.log(result.data.createProduct.message)
        // setData(result.data.createProduct.message)
        alert("게시글 등록에 성공하였습니다")
        router.push(`/quiz/08-product/${result.data.createProduct._id}`)
        
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
        if(event.target.value !== "" && name !== "" && detail !== "" && price !==""){
            setIsActive(true)
        } else {
            setIsActive(false)

        }
    }

    const onChangeName = (event) => {
        setName(event.target.value)
        if(seller !== "" && event.target.value !== "" && detail !== "" && price !==""){
            setIsActive(true)
        } else {
            setIsActive(false)

        }   
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
        if(seller !== "" && name !== "" && event.target.value !== "" && price !==""){
            setIsActive(true)
        } else {
            setIsActive(false)

        }
    }

    const onChangePrice = (event) => {
        setPrice(Number(event.target.value))
        if(seller !== "" && name !== "" && detail !== "" && event.target.value !== ""){
            setIsActive(true)
        } else {
            setIsActive(false)

        }
    }

    

    
    return (

        <ProductWriteUI 
        onChangeSeller={onChangeSeller}  
        onChangeName={onChangeName} 
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        callGraphqlApi={callGraphqlApi}
        onClickUpdate={onClickUpdate}
        isActive={isActive}
        isEdit={props.isEdit}
            //props = {onChangeMyWriter: onChangeWriter
            //onChangeMyTitle={onChangeMyTitle} 
            //onChangeMyContents={onChangeMyContents}
            //callGraphqlApi={callGraphqlApi}}
        />

    )

}




