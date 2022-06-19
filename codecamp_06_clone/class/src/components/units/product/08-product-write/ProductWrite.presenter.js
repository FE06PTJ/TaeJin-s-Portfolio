//Presenter 컴포넌트

import {SubmitBtn, SellerInput} from './ProductWrite.styles'

export default function ProductWriteUI(props) {

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

        판매자 : <SellerInput type="text" onChange={props.onChangeSeller}/> <br/>
        판매물품 : <SellerInput type="text" onChange={props.onChangeName}/> <br/>
        판매내용 : <SellerInput type="text" onChange={props.onChangeDetail}/> <br/>
        판매가격 : <SellerInput type="text" onChange={props.onChangePrice}/> <br/>
        <SubmitBtn onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
        {props.isEdit ? "수정" : "등록"}하기</SubmitBtn>
        {/* <SubmitBtn onClick={qqq}>{props.isEdit ? "수정" : "등록"}하기</SubmitBtn>  */}
        {/* <div>{data}</div> */}                   
    </div>   
    )
}
