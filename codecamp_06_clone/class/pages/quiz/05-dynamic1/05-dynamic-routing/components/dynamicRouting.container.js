import {useRouter} from 'next/router'
import DynamicRoutingPresenter from '../../../../../srcQuiz/components/units/board/write/dynamicRouting.presenter'
import { useState } from 'react'

export default function DynamicRoutingContainer() {
    // 자바스크립트 부분
    const [isActive, setIsActive] = useState(false)
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/quiz/05-dynamic1/05-dynamic-routed/83011")
        setIsActive(true)

    }

    const onClickMove2 = () => {
        router.push("/quiz/05-dynamic1/05-dynamic-routed/83012")
        setIsActive(true)

    }

    const onClickMove3 = () => {
        router.push("/quiz/05-dynamic1/05-dynamic-routed/83013")
        setIsActive(true)

    }

    return (

        <DynamicRoutingPresenter
        onClickMove1={onClickMove1}
        onClickMove2={onClickMove2}
        onClickMove3={onClickMove3}
        isActive={isActive}
        />

    )
}