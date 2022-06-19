import {useState} from 'react'
import { 
    PasswordError,
    EmailError
 } from '../../../styles/emotion.js'



export default function SignupStatePage() {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [passwordError, setPasswordError] = useState("")
 
    const [isValid, setIsValid] = useState("true")


    function onChangeEmail(event){
        setEmail(event.target.value)
    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }

    function onChangePasswordCheck(event){
        setPasswordCheck(event.target.value)

    }


    function onClickSignup(){
       

        setIsValid(true)
        if(email.includes("@") === false) {
            setEmailError("이메일이 올바르지 않습니다 @가 없습니다")
            setIsValid(false)
        } else {
            setEmailError("")            
        }
        
        if(password !== passwordCheck) {
            setPasswordError("비밀번호가 올바르지 않습니다")
            setIsValid(false)
        } else if (password === "") {
            setPasswordError("비밀번호를 입력해주세요")
            setIsValid(false)
        } else {
            setPasswordError("")           
        }
        
        if(isValid === true){
            alert("회원가입을 축하합니다.")
        }
    }
    

    return (
        <div>
            이메일: <input type ="text" onChange={onChangeEmail} /><br />
            <EmailError>{emailError}</EmailError>

            비밀번호: <input type="password" onChange={onChangePassword} /><br />
            비밀번호 확인: <input type ="password" onChange={onChangePasswordCheck} /><br />
            <PasswordError>{passwordError}</PasswordError>

            <button onClick={onClickSignup}>회원가입</button>
        </div>
    )

} 