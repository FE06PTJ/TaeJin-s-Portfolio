//Presenter 컴포넌트

import {SubmitBtn, WriterInput} from './BoardWrite.styles'

export default function BoardWriteUI(props) {

//     let qqq;
// function apple(){

// }
// function banana(){
    
// }

// function podo(){
    
// }


// if(aaa === "사과"){
//     qqq=apple
// } else if(aaa="바나나") {
//     qqq=banana
// } else {
//     qqq=podo
// }

    return (
        <div>  
        <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
        {/* {props.aaa === "사과" && <div>나는사과다</div>}
        {props.aaa === "바나나" && <div>나는바나나다</div>}
        {props.aaa === "포도" && <div>나는포도다</div>}       */}

        작성자 : <WriterInput type="text" onChange={props.onChangeMyWriter}/> <br/>
        제목 : <input type="text" onChange={props.onChangeMyTitle}/> <br/>
        내용 : <input type="text" onChange={props.onChangeMyContents}/> <br/>
        <SubmitBtn onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
        {props.isEdit ? "수정" : "등록"}하기</SubmitBtn>
        {/* <SubmitBtn onClick={qqq}>{props.isEdit ? "수정" : "등록"}하기</SubmitBtn>  */}
        {/* <div>{data}</div> */}                   
    </div>   
    )
}
