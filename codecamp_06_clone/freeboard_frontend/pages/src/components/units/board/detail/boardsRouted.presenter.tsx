import * as S from "./boardsRouted.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardsRoutedPresenter } from "./boardsRouted.types";

export default function BoardsRoutedPresenter(props: IBoardsRoutedPresenter) {
    return (
        <S.BackGround>
            <S.Entire>
                <S.Wrapper>
                    <S.WrapperTitle>
                        <S.TextImg src="/img/text1.png"></S.TextImg>
                        {/* <PolygonImg src="/img/polygon1.png"></PolygonImg> */}
                        <S.PolygonImg></S.PolygonImg>
                    </S.WrapperTitle>

                    <S.WrapperTop>
                        <S.WrapperTopLeft>
                            <S.WrapperTopLeftProfile>
                                <S.ProfileImg src="/img/people1.png"></S.ProfileImg>
                            </S.WrapperTopLeftProfile>

                            <S.WriterDate>
                                {/* 옵셔널 체이닝 */}
                                <S.Writer>{props.data?.fetchBoard?.writer}</S.Writer>
                                {/* {data?.fetchBoard?.writer} */}
                                {/* 조건부 렌더링 */}
                                {/* {data && data.fetchBoard.writer} */}
                                {/*  {data?.fetchBoard.writer : <div>Loading</div>}*/}
                                <S.CreatedAt>
                                    {/* {" "} */}
                                    Date : {getDate(props.data?.fetchBoard?.createdAt)}
                                </S.CreatedAt>
                                {/* <S.CreatedAt> Date : {props.data?.fetchBoard.createdAt}</S.CreatedAt> */}
                                {/* createdAt뒤에 .slice(0,10)을 붙여주어 년월일까지만으로 잘라준다. */}
                            </S.WriterDate>
                        </S.WrapperTopLeft>

                        <S.WrapperTopRight>
                            <S.ChainImg src="/img/chain1.png"></S.ChainImg>
                            <S.LocationImg src="/img/location1.png"></S.LocationImg>
                        </S.WrapperTopRight>
                    </S.WrapperTop>

                    <S.WrapperBody>
                        <S.TitleWrapper>
                            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
                        </S.TitleWrapper>

                        <S.ContentsWrapper>
                            <S.ContentsImg src="/img/contentsImg1.png"></S.ContentsImg>
                            <S.Contents>{props.data?.fetchBoard?.contents}</S.Contents>
                        </S.ContentsWrapper>

                        <S.YoutubeWrapper>
                            <S.YoutubeUrl src={props.data?.fetchBoard?.youtubeUrl}></S.YoutubeUrl>
                            {/* <YoutubeUrlImg src = "/img/youtubeImg1.png"></YoutubeUrlImg> */}
                            {/* <YoutubeUrl src = "https://www.youtube.com/embed/YlY2CJaErdE" /> */}
                        </S.YoutubeWrapper>
                    </S.WrapperBody>

                    <S.WrapperFooter>
                        <S.WrapperLike>
                            <S.LikeImg src="/img/likeCount1.png"></S.LikeImg>
                            <S.LikeCount>{props.data?.fetchBoard?.likeCount}</S.LikeCount>
                        </S.WrapperLike>

                        <S.WrapperDisLike>
                            <S.DisLikeImg src="/img/dislikeCount1.png"></S.DisLikeImg>
                            <S.DisLikeCount>{props.data?.fetchBoard?.dislikeCount}</S.DisLikeCount>
                        </S.WrapperDisLike>
                    </S.WrapperFooter>
                </S.Wrapper>

                <S.ButtonWrapper>
                    {/* {props.data?.fetchBoard.map((el) => ( */}
                    {/* <S.Row key={el._id}> */}
                    <S.SubmitButton onClick={props.onClickMoveToBoardList}>목록으로</S.SubmitButton>
                    <S.SubmitButton onClick={props.onClickMoveToBoardEdit}>수정하기</S.SubmitButton>
                    <S.SubmitButton>삭제하기</S.SubmitButton>
                    {/* </S.Row> */}
                    {/* ))} */}
                </S.ButtonWrapper>
            </S.Entire>
        </S.BackGround>
    );
}
