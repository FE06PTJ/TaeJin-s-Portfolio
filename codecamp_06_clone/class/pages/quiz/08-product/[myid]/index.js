//상세보기 페이지

import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`

    query fetchProduct($productId: ID) {
        fetchProduct ( productId : $productId  ) {
            _id
            seller
            name
            detail
            price    
        }
    }
`

export default function StaticRoutedPage() {
    // 자바스크립트 부분
    const router = useRouter()
    const {data} = useQuery(FETCH_PRODUCT, {
    //data는 undefined 상태였다가 FETCH_PRODUCT가 데이터를 요청하면 data가 값을 가지게 된다
    //불러오는 동안 텍스트 들을 보여주고 data가 채워지면 값들이 나타난다.
    //그러므로 아래 JSX부분에 data && : 조건부 렌더링 을 추가해주어야 한다
    //하지만 너무 기므로 ?를 data 뒤에 붙여주는 Optional-Chaining으로 대신 해준다
        variables: {productId: String(router.query.myid)}
        // ${router.query.myid} 가 [myid]이므로 대신 경로에 넣어준다.
    })
    
    console.log(data)

    const onClickMove = () => {
        router.push(`/quiz/08-product/${router.query.myid}/edit`)
    }

    return (
    // JSX부분
    // data && data(조건부 렌더링) = data?(optional chaining)
        <div>   
            <div>{data?.fetchProduct._id}번 게시글 이동완료</div> 
          {/*_id??  */}
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>판매물품: {data?.fetchProduct.name}</div>
            <div>판매내용: {data?.fetchProduct.detail}</div>
            <div>판매가격: {data?.fetchProduct.price}</div>

            <button onClick={onClickMove}>수정하러 이동하기</button>
        </div>    
    )



}