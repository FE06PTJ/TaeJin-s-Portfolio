import { ChangeEvent } from "react"

//컨테이너 타입
export interface IBoardWriteProps{
    isEdit: boolean
    data?: any
}

export  interface IMyVariables {
    number: number
    writer?: string
    title?: string
    contents?: string
}

//프레젠터타입
export interface IBoardWriteUIProps {
    onChangeMyWriter: (event: ChangeEvent<HTMLInputElement>) => void  //아무것도 리턴하지 않을때는 void 
    onChangeMyTitle: (event: ChangeEvent<HTMLInputElement>) => void 
    onChangeMyContents: (event: ChangeEvent<HTMLInputElement>) => void
    callGraphqlApi: () => void
    onClickUpdate: () => void
    isActive: boolean
    isEdit: boolean
    data?: any     
}

//스타일 타입
export interface ISubmitBtnProps {
    isActive: boolean
}