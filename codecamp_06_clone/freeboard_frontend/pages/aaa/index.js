import {
    BackGround,
    Entire,
    Wrapper,
    WrapperTitle,
    TextImg,
    PolygonImg,
    WrapperTop,
    WrapperTopLeft,
    WrapperTopLeftProfile,
    ProfileImg,
    WriterDate,
    Writer,
    CreatedAt,
    WrapperTopRight,
    ChainImg,
    LocationImg,
    WrapperBody,
    TitleWrapper,
    Title,
    ContentsWrapper,
    ContentsImg,
    Contents,
    YoutubeWrapper,
    YoutubeUrlImg,
    YoutubeUrl,
    WrapperFooter,
    WrapperLike,
    LikeImg,
    LikeCount,
    WrapperDisLike,
    DisLikeImg,
    DisLikeCount,
    ButtonWrapper,
    SubmitButton,
    
} from '../../../../../../../../styles/freeboard_fetchboard'

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from 'react';

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!) {
        fetchBoard(boardId: $boardId) {
            _id
            writer
            title
            contents
            likeCount
            dislikeCount
            createdAt
        }
    }
`;

export default function FreeBoardFetchPage() {
    // 자바스크립트 부분
    const router = useRouter();
    console.log(router);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
        // variables: { boardId: String(router.query.boardId) },
        //가끔 중간과정에서 제대로 라우팅이 되지 않는 경우가 있어 String으로${}감싸준다.

    });

    console.log(data);

    return (
        <BackGround>
        <Entire>

            <Wrapper>


                <WrapperTitle>
                    <TextImg src="/img/text1.png"></TextImg>
                    {/* <PolygonImg src="/img/polygon1.png"></PolygonImg> */}
                    <PolygonImg></PolygonImg>
                </WrapperTitle>

                <WrapperTop>

                    
                    <WrapperTopLeft>

                        <WrapperTopLeftProfile>
                            <ProfileImg src="/img/people1.png"></ProfileImg>
                        </WrapperTopLeftProfile>
                        
                        <WriterDate>
                            {/* 옵셔널 체이닝 */}
                            <Writer>{data ?.fetchBoard.writer}</Writer>
                            {/* {data?.fetchBoard?.writer} */}
                            {/* 조건부 렌더링 */}
                            {/* {data && data.fetchBoard.writer} */}
                            {/*  {data?.fetchBoard.writer : <div>Loading</div>}*/}
                            <CreatedAt>Date : {data ? data.fetchBoard.createdAt.slice(0,10) : "Loading..."}</CreatedAt>
                            {/* createdAt뒤에 .slice(0,10)을 붙여주어 년월일까지만으로 잘라준다. */}
                        </WriterDate>

                    </WrapperTopLeft>

                    <WrapperTopRight>

                            <ChainImg src="/img/chain1.png"></ChainImg>
                            <LocationImg src="/img/location1.png"></LocationImg>

                    </WrapperTopRight>

                </WrapperTop>




                <WrapperBody>

                    <TitleWrapper>

                        <Title>{data ? data.fetchBoard.title : "Loading..."}</Title>

                    </TitleWrapper>


                    <ContentsWrapper>    

                        <ContentsImg src="/img/contentsImg1.png"></ContentsImg>
                        <Contents>{data ? data.fetchBoard.contents : "Loading..."}</Contents>
                    
                    </ContentsWrapper>

                    <YoutubeWrapper>

                        <YoutubeUrl src = {data ? data.fetchBoard.youtubeUrl : "Loading..."} />
                        {/* <YoutubeUrlImg src = "/img/youtubeImg1.png"></YoutubeUrlImg> */}
                        {/* <YoutubeUrl src = "https://www.youtube.com/embed/YlY2CJaErdE" /> */}
                    
                    </YoutubeWrapper>

                </WrapperBody>




                <WrapperFooter>

                    <WrapperLike>

                        <LikeImg src="/img/likeCount1.png"></LikeImg>
                        <LikeCount>{data ? data.fetchBoard.likeCount : "Loading..."}</LikeCount>
                    
                    </WrapperLike>

                    <WrapperDisLike>

                        <DisLikeImg src="/img/dislikeCount1.png"></DisLikeImg>
                        <DisLikeCount>{data ? data.fetchBoard.dislikeCount : "Loading..."}</DisLikeCount>
                    
                    </WrapperDisLike>

                </WrapperFooter>



            </Wrapper>



            <ButtonWrapper>

                <SubmitButton >목록으로</SubmitButton>
                <SubmitButton >수정하기</SubmitButton>
                <SubmitButton >삭제하기</SubmitButton>

            </ButtonWrapper>


        </Entire>
        </BackGround>
    );
}
