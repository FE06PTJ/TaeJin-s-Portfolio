export default function ProductComponent(props){
    return(
        <div>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            {/* <h1>{props.isEdit === true ? "수정" : "등록"}페이지</h1>     boolean 값이므로 === true값을 굳이 줄 필요가 없다 */}
            제목: <input type="text" /><br />
            내용: <input type="text" /><br />
            <button>{props.isEdit  ? "수정" : "등록"}하기</button>
            {/* <button>{props.isEdit === true ? "수정" : "등록"}하기</button>    boolean 값이므로 === true값을 굳이 줄 필요가 없다  */}

        </div>
    )
}