import {useState} from 'react'

export default function SignupStatePage() {

    const [hello,setHello] = useState("안녕하세요")
    const onClickSignup = () => setHello("반갑습니다")

    return (
        <div>
            <button onClick={onClickSignup}>{hello}</button>
        </div>
    )
} 