import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID) {
        fetchProduct(productId: $productId) {
            _id
            seller
            name
            detail
            price
        }
    }
`;

export default function StaticRoutedPage() {
    // 자바스크립트 부분
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: { productId: router.query.dynamic_routed },
    });

    console.log(data);
    //console에 query:aaa 들어와있음
    //주소창에 직접 넣어서 이동할 수도 있다.

    return (
        // JSX부분
        // data && data(조건부 렌더링) = data?(optional chaining)
        <div>
            <div>{data ? data.fetchProduct.productId : "Loading..."}번 게시글 이동완료</div>
            <div>판매자: {data ? data.fetchProduct.seller : "Loading..."}</div>
            <div>상품명: {data ? data.fetchProduct.name : "Loading..."}</div>
            <div>상품내용: {data ? data.fetchProduct.detail : "Loading..."}</div>
            <div>상품가격: {data ? data.fetchProduct.price : "Loading..."}</div>
        </div>
    );
}
