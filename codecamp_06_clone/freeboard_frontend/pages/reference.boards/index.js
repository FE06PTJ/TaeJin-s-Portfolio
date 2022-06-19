import {
    Wrapper,
    Title,
    WriterWrapper,
    Writer,
    Password,
    Label,
    InputWrapper,
    Subject,
    Contents,
    ZipCodeWrapper,
    ZipCode,
    SearchButton,
    Address,
    Youtube,
    ImageWrapper,
    UploadButton,
    OptionWrapper,
    RadioButton,
    RadioLabel,
    ButtonWrapper,
    SubmitButton,
    Error,
} from "../../../styles/emotion";

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            title
            contents
        }
    }
`;

export default function SignupPage() {
    const [createBoard] = useMutation(CREATE_BOARD);

    const [writer, setWriter] = useState("");
    const [writerError, setWriterError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    const [contents, setContents] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [isValid, setIsValid] = useState(false);

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    };

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const onChangeContents = (event) => {
        setContents(event.target.value);
    };

    // const callApi = async () => {
    //     const result = await createBoard({
    //         variables : {
    //             createBoardInput : {
    //                 writer : writer,
    //                 password: password,
    //                 title : title,
    //                 contents : contents,
    //             }
    //         }
    //     })
    //     console.log(result)
    // }

    const onClickSubmit = async () => {
        setIsValid(true);

        if (writer === "") {
            setWriterError("작성자를 입력해주세요");
            setIsValid(false);
        } else {
            setWriterError("");
        }

        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요");
            setIsValid(false);
        } else {
            setPasswordError("");
        }

        if (title === "") {
            setTitleError("제목을 입력해주세요");
            setIsValid(false);
        } else {
            setTitleError("");
        }

        if (contents === "") {
            setContentsError("내용을 입력해주세요");
            setIsValid(false);
        } else {
            setContentsError("");
        }

        if (isValid === true) {
            // callApi();
            // alert("게시글이 등록되었습니다");
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            // 객체에서 키랑 value가 같은면 해당 value를 생략할 수 있다
                            // => shorthand property
                            writer,
                            password,
                            title,
                            contents,
                        },
                    },
                });
                console.log(result);
                alert("게시글이 등록되었습니다");
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    // function onClickSubmit() {

    // }

    return (
        <Wrapper>
            <Title>게시판 등록</Title>

            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer
                        type="text"
                        placeholder="작성자를 적어주세요"
                        onChange={onChangeWriter}
                    />
                    <Error>{writerError}</Error>
                </InputWrapper>

                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password
                        type="password"
                        placeholder="비밀번호를 적어주세요"
                        onChange={onChangePassword}
                    />
                    <Error>{passwordError}</Error>
                </InputWrapper>
            </WriterWrapper>

            <InputWrapper>
                <Label>제목</Label>
                <Subject type="text" placeholder="제목을 작성해주세요" onChange={onChangeTitle} />
                <Error>{titleError}</Error>
            </InputWrapper>

            <InputWrapper>
                <Label>내용</Label>
                <Contents
                    type="text"
                    placeholder="내용을 작성해주세요"
                    onChange={onChangeContents}
                />
                <Error>{contentsError}</Error>
            </InputWrapper>

            <InputWrapper>
                <Label>주소</Label>

                <ZipCodeWrapper>
                    <ZipCode placeholder="07250" />
                    <SearchButton>우편번호검색</SearchButton>
                </ZipCodeWrapper>
                <Address />
                <Address />
            </InputWrapper>

            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요" />
            </InputWrapper>

            <ImageWrapper>
                <Label>사진첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>

            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>

            <ButtonWrapper>
                <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    );
}
