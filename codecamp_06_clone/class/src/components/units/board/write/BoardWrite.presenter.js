import {SubmitBtn, WriterInput} from './BoardWrite.styles'

export default function BoardWriteUI(props) {
    return (
        <div>            
        <SubmitBtn onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기</SubmitBtn>  <br/>
        작성자 : <WriterInput type="text" onChange={props.onChangeMyWriter}/> <br/>
        제목 : <input type="text" onChange={props.onChangeMyTitle}/> <br/>
        내용 : <input type="text" onChange={props.onChangeMyContents}/> <br/>
        {/* <div>{data}</div> */}                   
    </div>   
    )
}
