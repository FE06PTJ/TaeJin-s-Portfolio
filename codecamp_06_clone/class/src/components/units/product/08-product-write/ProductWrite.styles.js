import styled from '@emotion/styled'

export const SubmitBtn = styled.button`
    background-color: ${ (props) => props.isActive ? "yellow" : "green"};
`   

export const SellerInput = styled.input`
    border-color: green;
`
