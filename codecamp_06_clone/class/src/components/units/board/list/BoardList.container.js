import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import DynamicRoutedPresenter from './dynamicRouted.presenter'
import {FETCH_BOARD} from './dynamicRouted.queries'

export default function DynamicRoutedContainer () {
    // 자바스크립트 부분
      const router = useRouter();
      console.log(router);
    
      const { data } = useQuery(FETCH_BOARD, { 
        //   variables: { boardId: router.query.detail },
          variables: { boardId: String(router.query.boardId) },
          //가끔 중간과정에서 제대로 라우팅이 되지 않는 경우가 있어 String으로${}감싸준다.
    
      });
    
      console.log(data);
      return (
          <DynamicRoutedPresenter data={data}/>
      )
    }