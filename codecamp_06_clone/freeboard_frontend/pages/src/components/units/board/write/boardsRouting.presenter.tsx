import * as S from "./boardsRouting.styles";
import { IBoardsRoutingPresenter } from "./BoardWrite.types";

export default function BoardsRoutingPresenter(props: IBoardsRoutingPresenter) {
    return (
        <S.Wrapper>
            <S.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</S.Title>

            <S.WriterWrapper>
                <S.InputWrapper>
                    <S.Label>작성자</S.Label>
                    <S.Writer
                        type="text"
                        placeholder="작성자를 적어주세요"
                        onChange={props.onChangeWriter}
                        defaultValue={props.data?.fetchBoard.writer}
                        readOnly={props.data?.fetchBoard.writer}
                    />
                    <S.Error>{props.writerError}</S.Error>
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.Label>비밀번호</S.Label>
                    <S.Password
                        type="password"
                        placeholder="비밀번호를 적어주세요"
                        onChange={props.onChangePassword}
                    />
                    <S.Error>{props.passwordError}</S.Error>
                </S.InputWrapper>
            </S.WriterWrapper>

            <S.InputWrapper>
                <S.Label>제목</S.Label>
                <S.Subject
                    type="text"
                    placeholder="제목을 작성해주세요"
                    onChange={props.onChangeTitle}
                    defaultValue={props.data?.fetchBoard.title}
                />
                <S.Error>{props.titleError}</S.Error>
            </S.InputWrapper>

            <S.InputWrapper>
                <S.Label>내용</S.Label>
                <S.Contents
                    placeholder="내용을 작성해주세요"
                    onChange={props.onChangeContents}
                    defaultValue={props.data?.fetchBoard.contents}
                />
                <S.Error>{props.contentsError}</S.Error>
            </S.InputWrapper>

            <S.InputWrapper>
                <S.Label>주소</S.Label>

                <S.ZipCodeWrapper>
                    <S.ZipCode placeholder="07250" />
                    <S.SearchButton>우편번호검색</S.SearchButton>
                </S.ZipCodeWrapper>
                <S.Address />
                <S.Address />
            </S.InputWrapper>

            <S.InputWrapper>
                <S.Label>유튜브</S.Label>
                <S.Youtube placeholder="링크를 복사해주세요" />
            </S.InputWrapper>

            <S.ImageWrapper>
                <S.Label>사진첨부</S.Label>
                <S.UploadButton>+</S.UploadButton>
                <S.UploadButton>+</S.UploadButton>
                <S.UploadButton>+</S.UploadButton>
            </S.ImageWrapper>

            <S.OptionWrapper>
                <S.Label>메인설정</S.Label>
                <S.RadioButton type="radio" id="youtube" name="radio-button" />
                <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
                <S.RadioButton type="radio" id="image" name="radio-button" />
                <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
            </S.OptionWrapper>

            <S.ButtonWrapper>
                <S.SubmitButton
                    onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
                    isActive={props.isEdit ? true : props.isActive}
                >
                    {props.isEdit ? "수정하기" : "등록하기"}
                </S.SubmitButton>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
}