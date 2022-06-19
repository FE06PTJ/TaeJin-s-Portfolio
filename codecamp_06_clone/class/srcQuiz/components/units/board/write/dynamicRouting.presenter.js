import {SubmitBtn, WriterInput, TitleInput, ContentsInput}  from './dynamicRouting.styles'

export default function DynamicRoutingPresenter(props) {
    return(        
        <div>            
            <SubmitBtn onClick={props.callGraphqlApi} isActive={props.isActive}>GRAPHQL-API 요청하기</SubmitBtn>  <br/>
            작성자 : <WriterInput type="text" onChange={props.onChangeMyWriter}/> <br/>
            제목  : <TitleInput type="text" onChange={props.onChangeMyTitle}/> <br/>
            내용  : <ContentsInput type="text" onChange={props.onChangeMyContents}/> <br/>
            {/* <div>{data}</div> */}                   
        </div>    
    )
}