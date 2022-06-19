import styled from "@emotion/styled";

export const BackGround = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`

export const Container = styled.div`

    width: 640px;
    height: 1138px;
    padding: 30px 50px 0px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const ContainerImg = styled.img`
    position: absolute;
    width: 640px;
    height: 1095px;
    background-image: url(/img/eatsRoad/container1.png);
    background-size: cover;
    opacity: 0.7;
    z-index: -1;
    /* background-color: rgba(0, 0, 0, 0.55); */
    background-blend-mode: normal;

`

export const Wrapper = styled.div`
    width: 640px;
    height: 189px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LocationImg1 = styled.img`
    width: 100px;
    height: 100px;
    position: relative;

    /* background-color: gray; */
`

export const Rectangle3 = styled.div`
    position: absolute;
    width: 63px;
    height: 17px;
    border-radius: 8.6px;
    margin-top: 10px;
    background-color: rgba(255 ,255, 123 ,0.4);
    
`

export const Title = styled.div`
    width: 305px;
    height: 62px;
    padding: 30px;
    font-size: 60px;
    color: white;
`

export const Body = styled.div`

`

export const Email = styled.input`
    width: 540px;
    font-size: 24px;
    border: none;
    margin-top: 162px;
    background-color: transparent;
    color: white;  
    /* border-bottom: 1px solid black; */
`

export const EmailError = styled.div`
    font-size: 18px;
    color: red;
    margin-top: 10px;
`

export const Password = styled.input`
    width: 540px;
    font-size: 24px;
    margin-top: 30px; 
    color: white;   
    border: none; 
    background-color:transparent
    /* border-bottom: 1px solid black; */
`

export const PasswordError = styled.div`
    font-size: 18px;
    color: red;
    margin-top: 10px;
`

export const Rectangle = styled.div`
    width: 540px;
    height: 2px;
    margin-top: 20px;
    background-color: white;
`

export const LoginBtn = styled.button`
    width: 540px;
    height: 76px;
    border: none;
    border-radius: 38px;
    background-color: red;
    margin-top: 20px;
    font-size: 26px;
    color: white;
    text-align: center;
    cursor: pointer;

`

export const Footer = styled.div`
    text-align: center;
`

export const Btn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 44.3px;

`

export const EmailBtn = styled.button`
    /* width: 95px;
    height: 20px; */
    font-size: 20px;
    color: white;
    background-color:transparent;
    border: none;
    cursor: pointer;
`

export const Rectangle1 = styled.div`
    width: 60px;
    height: 20px;
    font-size: 20px;
    color: white;
`

export const PasswordBtn = styled.button`
    /* width: 113px;
    height: 20px; */
    font-size: 20px;
    color: white;
    background-color:transparent;
    cursor: pointer;

    border: none;
`

export const SignUpBtn = styled.button`
    /* width: 74px;
    height: 20px; */
    font-size: 20px;
    color: white;
    background-color:transparent;
    cursor: pointer;

    border: none;
`

export const KaKaoTalkBtn = styled.button`
    width: 540px;
    height: 76px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 60.7px;
    border-radius: 38px;
    border: solid 2px yellow;
    background-color:transparent;
    cursor: pointer;


    `

export const KaKaoImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    background-size: cover;

`

export const Label = styled.div`
    width: 242px;
    height: 26px;
    font-size: 26px;
    color: yellow;
`