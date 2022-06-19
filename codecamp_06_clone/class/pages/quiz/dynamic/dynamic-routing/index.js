// import axios from 'axios'
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

const CREATE_PRODUCT = gql`
    #  아래의 variables의 writer,title,contents가 여기 들어가서 아래의 createProduct에 들어간다.묶음 배송을 해줄 수 있기 때문에 이런식으로 2번 해준다.
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const router = useRouter();

    const [seller, setSeller] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState("");

    const [createProduct] = useMutation(CREATE_PRODUCT);

    const onChangeSeller = (event) => {
        setSeller(event.target.value);
    };

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeDetail = (event) => {
        setDetail(event.target.value);
    };

    const onChangePrice = (event) => {
        setPrice(parseInt(event.target.value));
    };

    // async function callRestApi() { 화살표함수로 바꿈
    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1") //rest-api방식

        try {
            const result = await createProduct({
                variables: {
                    seller: seller,
                    createProductInput: {
                        name: name,
                        detail: detail,
                        price: price,
                    },
                },
            }); //graphql-api 방식

            console.log(result);
            // console.log(result.data.createProduct.message);
            alert("게시글 등록 성공");
            alert("상세페이지 이동");
            // router.push("/05-08-dynamic-routed-input/" + result.data.createProduct.number)
            router.push(`/quiz/dynamic/${result.data.createProduct._id}`);

            //문자열과 숫자열을 더해주면 하나의 문자열이 된다.
            //``안에 넣어주고 자바스크립트 변수,상수 등을 ${ }안에 넣어준다
            //이런 방식을 템플릿 리터럴 이라고 부른다.
            //예제
            //const banana = 3
            //const apple = 2

            //"철수는 바나나를" + banana +"개 가지고 있고," + "사과를" + apple + "개 가지고 있다"
            //`철수는 바나나를 ${banana}개 가지고 있고, 사과를 ${apple}개 가지고 있다`
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기</button> <br />
            판매자 : <input type="text" onChange={onChangeSeller} /> <br />
            상품명 : <input type="text" onChange={onChangeName} /> <br />
            상품내용 : <input type="text" onChange={onChangeDetail} /> <br />
            상품가격 : <input type="number" onChange={onChangePrice} /> <br />
            {/* <div>{data}</div> */}
        </div>
    );
}
