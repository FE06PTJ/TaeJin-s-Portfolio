import {gql} from '@apollo/client'

export const CREATE_PRODUCT = gql`
    #  아래의 variables의 writer,title,contents가 여기 들어가서 아래의 createBoard에 들어간다.묶음 배송을 해줄 수 있기 때문에 이런식으로 2번 해준다.
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput : $createProductInput
        ) {
            _id
            number
            message
        }
    }
`

export const UPDATE_PRODUCT = gql`
    #  아래의 variables의 writer,title,contents가 여기 들어가서 아래의 createBoard에 들어간다.묶음 배송을 해줄 수 있기 때문에 이런식으로 2번 해준다.
    mutation updateProduct($productId: ID, $updateProductInput: UpdateProductInput!) {
        updateProduct(productId: $productId, updateProductInput: $updateProductInput
        ) {
            _id
            number
            message
        }
    }
`