import DynamicRoutedPresenter from './dynamicRouted.presenter'
import { useRouter } from 'next/router'
import {FETCH_BOARD} from './dynamicRouted.queries'
import { useQuery } from '@apollo/client'

export default function DynamicRoutedContainer() {
    // 자바스크립트 부분
    const router = useRouter()
    console.log(router)

    const {data} = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.components)}
    })
    console.log(data)

    return (
        <DynamicRoutedPresenter data={data}/>
    )
}
