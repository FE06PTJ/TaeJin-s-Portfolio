import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import DynamicRoutedPresenter from './dynamicRouted.presenter'
import {FETCH_BOARD} from './dynamicRouted.queries'


export default function DynamicRoutedContainer(){
// 자바스크립트 부분  
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) },
    });


    return <DynamicRoutedPresenter data={data}/>

}