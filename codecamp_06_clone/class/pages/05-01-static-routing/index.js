import {useRouter} from 'next/router'

export default function StaticRoutingPage() {
    // 자바스크립트 부분
    const router = useRouter()

    const onClickMove = () => {
        router.push("/05-02-static-routed")
        // http://localhost3000이 생략되어있음
    }

    return (
    // JSX부분    
        <button onClick={onClickMove}>페이지 이동 버튼</button>
    )


}