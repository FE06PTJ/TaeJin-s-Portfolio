import {useRouter} from 'next/router'

export default function DynamicRoutingPage() {
    // 자바스크립트 부분
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-06-dynamic-routed-board/83011")
        // http://localhost3000이 생략되어있음
    }

    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/83012")
        // http://localhost3000이 생략되어있음
    }

    const onClickMove3 = () => {
        router.push("/05-06-dynamic-routed-board/83013")
        // http://localhost3000이 생략되어있음
    }

    return (
    // JSX부분    
        <div>
            <button onClick={onClickMove1}>83011번 게시글 이동 버튼</button>
            <button onClick={onClickMove2}>83012번 게시글 이동 버튼</button>
            <button onClick={onClickMove3}>83013번 게시글 이동 버튼</button>
        </div>
    )


}