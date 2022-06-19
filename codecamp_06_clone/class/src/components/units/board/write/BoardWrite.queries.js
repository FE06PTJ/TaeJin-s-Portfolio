import {gql} from '@apollo/client'

export const CREATE_BOARD = gql`
    #  아래의 variables의 writer,title,contents가 여기 들어가서 아래의 createBoard에 들어간다.묶음 배송을 해줄 수 있기 때문에 이런식으로 2번 해준다.
    mutation createBoard($writer: String, $title: String, $contents: String) {

        createBoard(writer: $writer, title : $title,contents : $contents
        ) {
            _id
            number
            message
        }
    }
`