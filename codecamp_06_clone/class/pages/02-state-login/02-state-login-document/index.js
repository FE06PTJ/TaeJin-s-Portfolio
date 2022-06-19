import {useState} from 'react'

export default function SignupStatePage() {

    function onClickSignup(){
        let result = document.getElementById("hello").innerText
        document.getElementById("hello").innerText = "반갑습니다"
    }

    return (
        <div>
            <div >
             <button id="hello" onClick={onClickSignup}>안녕하세요</button>
            </div>
        </div>
    )
    
    
} 