import styled from "@emotion/styled"



export default function AAAPage() {

    const MyTitle = styled.div`
      color: red;
    `
    const MyEmail = styled.input`
      width: 200px;
    `

    //여기는 자바스크립트 쓰는곳

  return (
    //html 쓰는 곳
    <MyTitle>
        안녕하세요
        <MyEmail type="text"/>
        <img src="/lotto.png"/>
    </MyTitle>
  )
}
