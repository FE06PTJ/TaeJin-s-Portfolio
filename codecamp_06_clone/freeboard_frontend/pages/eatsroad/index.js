import { useState } from "react"
import { 
    BackGround, 
    Container,
    ContainerImg,
    Wrapper,
    LocationImg1,
    Rectangle3,
    Title,
    Body,
    Email,
    EmailError,
    Password,
    PasswordError,
    Rectangle,
    LoginBtn,
    Footer,
    Btn,
    EmailBtn,
    Rectangle1,
    PasswordBtn,
    SignUpBtn,
    KaKaoTalkBtn,
    KaKaoImg,
    Label,
} from "../../styles/eatsRoad";

export default function EatsRoad() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [isValid, setIsValid] = useState(false);
    
    // setIsValid(true);

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
        
        if (email.includes("@") === false || email === "") {
            setEmailError("이메일 주소를 다시 확인해주세요.");
            setIsValid(false);
        } else {
            setEmailError("");
        }
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
        if (password.length < 8 || password.length > 16 || password === "" ) {
            setPasswordError("8~16자리의 영문, 숫자, 특수문자만 사용이 가능합니다.");
            setIsValid(false);
        } else {
            setPasswordError("");
        }

    //     if (password === "") {
    //         setPasswordError("8~16자리의 영문, 숫자, 특수문자만 사용이 가능합니다.");
    //         // setIsValid(false);
    //     } else {
    //         setPasswordError("");
    //     }
    };

    const onClickSubmit = () => {
        if (emailError === "" && passwordError === "") {
            alert("환영합니다");
        } 
        //         if (isValid === true) {
        //     alert("환영합니다");
        // }
    }



     
   

    return (
        <BackGround>
            <Container>
                {/* <ContainerImg src="/img/eatsRoad/container1.png"></ContainerImg> */}
                <ContainerImg></ContainerImg>
                <Wrapper>
                    <Rectangle3></Rectangle3>

                    <LocationImg1 src="/img/eatsRoad/location1.png"></LocationImg1>
                    <Title>잇츠로드</Title>
                </Wrapper>
                
                <Body>
                    <Email 
                        type="text"
                        placeholder=""
                        onChange={onChangeEmail}
                    />
                    <Rectangle></Rectangle>
                    <EmailError>{emailError}</EmailError>
                    <Password
                        type="password"
                        placeholder=""
                        onChange={onChangePassword}
                    />
                    <Rectangle></Rectangle>
                    <PasswordError>{passwordError}</PasswordError>
                    <LoginBtn onClick={onClickSubmit}>로그인</LoginBtn>
                </Body>

                <Footer>
                    <Btn>
                        <EmailBtn>이메일 찾기</EmailBtn>
                        <Rectangle1>|</Rectangle1>
                        <PasswordBtn>비밀번호 찾기</PasswordBtn>
                        <Rectangle1>|</Rectangle1>
                        <SignUpBtn >회원가입</SignUpBtn>
                    </Btn>
                    <KaKaoTalkBtn>
                        <KaKaoImg src="/img/eatsRoad/kakao1.png"></KaKaoImg>
                        <Label>카카오톡으로 로그인</Label>
                    </KaKaoTalkBtn>
                </Footer>
            </Container>
        </BackGround>

    );
}