export default function RandomLetPage(){

    function rdnumber(){

    let random = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
    document.getElementById("rgnumber").innerText = random

}

return(
    <div>
        <div id="rgnumber">000000</div>
        <button onClick={rdnumber}>인증번호전송</button>
    </div>

)

}