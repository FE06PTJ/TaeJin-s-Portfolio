import {

} from './dynamicRouted.styles'

export default function DynamicRoutedPresenter(props) {
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
                            <Writer>{props.data ?.fetchBoard.writer}</Writer>
                            {/* {data?.fetchBoard?.writer} */}
                            {/* 조건부 렌더링 */}
                            {/* {data && data.fetchBoard.writer} */}
                            {/*  {data?.fetchBoard.writer : <div>Loading</div>}*/}
                            <CreatedAt>Date : {props.data ? data.fetchBoard.createdAt.slice(0,10) : "Loading..."}</CreatedAt>
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

                        <Title>{props.data ? data.fetchBoard.title : "Loading..."}</Title>

                    </TitleWrapper>


                    <ContentsWrapper>    

                        <ContentsImg src="/img/contentsImg1.png"></ContentsImg>
                        <Contents>{props.data ? data.fetchBoard.contents : "Loading..."}</Contents>
                    
                    </ContentsWrapper>

                    <YoutubeWrapper>

                        <YoutubeUrl src = {props.data ? data.fetchBoard.youtubeUrl : "Loading..."} />
                        {/* <YoutubeUrlImg src = "/img/youtubeImg1.png"></YoutubeUrlImg> */}
                        {/* <YoutubeUrl src = "https://www.youtube.com/embed/YlY2CJaErdE" /> */}
                    
                    </YoutubeWrapper>

                </WrapperBody>




                <WrapperFooter>

                    <WrapperLike>

                        <LikeImg src="/img/likeCount1.png"></LikeImg>
                        <LikeCount>{props.data ? data.fetchBoard.likeCount : "Loading..."}</LikeCount>
                    
                    </WrapperLike>

                    <WrapperDisLike>

                        <DisLikeImg src="/img/dislikeCount1.png"></DisLikeImg>
                        <DisLikeCount>{props.data ? data.fetchBoard.dislikeCount : "Loading..."}</DisLikeCount>
                    
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
    )
}