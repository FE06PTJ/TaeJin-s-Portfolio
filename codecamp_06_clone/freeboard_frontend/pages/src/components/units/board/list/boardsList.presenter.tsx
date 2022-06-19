import * as S from "./boardsList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardsListPresenter } from "./boardList.types";

export default function BoardsListPresenter(props: IBoardsListPresenter) {
    return (
        <S.BackGround>
            <S.Wrapper>
                <S.Title>베스트게시글</S.Title>

                <S.TitleBoard>
                    <S.TitleBoardWrapper>
                        {/* Board */}

                        <S.TitleBoardImg src="/img/youtubeImg1.png"></S.TitleBoardImg>
                        <S.TitleBoardTitle>타이틀</S.TitleBoardTitle>
                        <S.TitleBoardDown>
                            <S.TitleBoardLeft>
                                <S.TitleBoardProfile>
                                    <S.TitleBoardProfileImg src="/img/people1.png"></S.TitleBoardProfileImg>
                                    <S.TitleBoardWriter>작성자</S.TitleBoardWriter>
                                </S.TitleBoardProfile>
                                <S.TitleBoardDate>Date : </S.TitleBoardDate>
                            </S.TitleBoardLeft>

                            <S.TitleBoardRight>
                                <S.TitleBoardLike>
                                    <S.TitleBoardLikeImg src="/img/likeCount1.png"></S.TitleBoardLikeImg>
                                    <S.TitleBoardLikeCount>1</S.TitleBoardLikeCount>
                                </S.TitleBoardLike>
                            </S.TitleBoardRight>
                        </S.TitleBoardDown>
                    </S.TitleBoardWrapper>

                    <S.TitleBoardWrapper>
                        {/* Board2 */}

                        <S.TitleBoardImg src="/img/youtubeImg1.png"></S.TitleBoardImg>
                        <S.TitleBoardTitle>타이틀</S.TitleBoardTitle>

                        <S.TitleBoardLeft>
                            <S.TitleBoardProfile>
                                <S.TitleBoardProfileImg src="/img/people1.png"></S.TitleBoardProfileImg>
                                <S.TitleBoardWriter>작성자</S.TitleBoardWriter>
                            </S.TitleBoardProfile>
                            <S.TitleBoardDate>Date : </S.TitleBoardDate>
                        </S.TitleBoardLeft>

                        <S.TitleBoardRight>
                            <S.TitleBoardLike>
                                <S.TitleBoardLikeImg src="/img/likeCount1.png"></S.TitleBoardLikeImg>
                                <S.TitleBoardLikeCount>1</S.TitleBoardLikeCount>
                            </S.TitleBoardLike>
                        </S.TitleBoardRight>
                    </S.TitleBoardWrapper>

                    <S.TitleBoardWrapper>
                        {/* Board3 */}

                        <S.TitleBoardImg src="/img/youtubeImg1.png"></S.TitleBoardImg>
                        <S.TitleBoardTitle>타이틀</S.TitleBoardTitle>

                        <S.TitleBoardLeft>
                            <S.TitleBoardProfile>
                                <S.TitleBoardProfileImg src="/img/people1.png"></S.TitleBoardProfileImg>
                                <S.TitleBoardWriter>작성자</S.TitleBoardWriter>
                            </S.TitleBoardProfile>
                            <S.TitleBoardDate>Date : </S.TitleBoardDate>
                        </S.TitleBoardLeft>

                        <S.TitleBoardRight>
                            <S.TitleBoardLike>
                                <S.TitleBoardLikeImg src="/img/likeCount1.png"></S.TitleBoardLikeImg>
                                <S.TitleBoardLikeCount>1</S.TitleBoardLikeCount>
                            </S.TitleBoardLike>
                        </S.TitleBoardRight>
                    </S.TitleBoardWrapper>

                    <S.TitleBoardWrapper>
                        {/* Board4 */}

                        <S.TitleBoardImg src="/img/youtubeImg1.png"></S.TitleBoardImg>
                        <S.TitleBoardTitle>타이틀</S.TitleBoardTitle>

                        <S.TitleBoardLeft>
                            <S.TitleBoardProfile>
                                <S.TitleBoardProfileImg src="/img/people1.png"></S.TitleBoardProfileImg>
                                <S.TitleBoardWriter>작성자</S.TitleBoardWriter>
                            </S.TitleBoardProfile>
                            <S.TitleBoardDate>Date : </S.TitleBoardDate>
                        </S.TitleBoardLeft>

                        <S.TitleBoardRight>
                            <S.TitleBoardLikeImg src="/img/likeCount1.png"></S.TitleBoardLikeImg>
                            <S.TitleBoardLikeCount>1</S.TitleBoardLikeCount>
                        </S.TitleBoardRight>
                    </S.TitleBoardWrapper>
                </S.TitleBoard>
                {/* Board끝 */}

                <S.SearchWrapper>
                    <S.SearchInputBox>
                        <S.SearchImg src="/img/search.png"></S.SearchImg>
                        <S.SearchInput>제목을 검색해주세요.</S.SearchInput>
                    </S.SearchInputBox>

                    <S.SearchDate>YYYY.MM.DD ~ YYYY.MM.DD</S.SearchDate>

                    <S.SearchBtn>검색하기</S.SearchBtn>
                </S.SearchWrapper>

                <S.ListWrapper>
                    <S.Row>
                        <S.TableUpper>번호</S.TableUpper>
                        <S.TableUpper>제목</S.TableUpper>
                        <S.TableUpper>작성자</S.TableUpper>
                        <S.TableUpper>날짜</S.TableUpper>
                    </S.Row>

                    {props.data?.fetchBoards.map((el: any) => (
                        <S.Row key={el._id}>
                            <S.Column>
                                {String(el._id).slice(-4).toUpperCase()}
                                {/* {el.index} */}
                            </S.Column>
                            <S.Column id={el._id} onClick={props.onClickMoveToBoardDetail}>
                                {el.title}
                            </S.Column>
                            <S.Column>{el.writer}</S.Column>
                            <S.Column>{getDate(el.createdAt)}</S.Column>
                            {/* <S.Column>{el.createdAt}</S.Column> */}
                        </S.Row>
                    ))}
                </S.ListWrapper>

                <S.FooterWrapper>
                    <S.FooterWrapperCenter>
                        <S.LeftArrowImg src="/img/leftArrow1.png"></S.LeftArrowImg>
                        <S.Number1>1</S.Number1>
                        <S.Number2>2</S.Number2>
                        <S.RightArrowImg src="/img/rightArrow1.png"></S.RightArrowImg>
                    </S.FooterWrapperCenter>
                </S.FooterWrapper>

                <S.FooterWrapperBtn>
                    <S.FooterWrapperImg src="/img/pencil1.png"></S.FooterWrapperImg>
                    <S.FooterWrapperSubmitBtn onClick={props.onClickMoveToBoardNew}>
                        게시물 등록하기
                    </S.FooterWrapperSubmitBtn>
                </S.FooterWrapperBtn>
            </S.Wrapper>
        </S.BackGround>
    );
}
