import { useState } from 'react';

export default function RandomStatePage(){

    const[random,setRandom] = useState("000000")

    function rgnumber(){
        setRandom(String(Math.floor(Math.random()*1000000)).padStart(6, "0"))
    }

    return(
        <div>
          <div>{random}</div>
         <button onClick={rgnumber}>인증번호전송</button>
        </div>
    )

}