import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import IBoardsRoutingPresenter from "./boardsRouting.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardsRouting.queries";
import { IBoardsRoutingContainer, IUpdateBoardInput } from "./BoardWrite.types";

export default function BoardsRoutingContainer(props: IBoardsRoutingContainer) {
    const [isActive, setIsActive] = useState(false);

    const router = useRouter();

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const [writer, setWriter] = useState("");
    const [writerError, setWriterError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    const [contents, setContents] = useState("");
    const [contentsError, setContentsError] = useState("");

    const [isValid, setIsValid] = useState(false);

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        setIsActive(true);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        setIsActive(true);
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        setIsActive(true);
    };

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
        setIsActive(true);
    };

    const onClickSubmit = async () => {
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
            router.push(`/boards/${result.data.createBoard._id}`);
            //${ }안에 띄어쓰기 같은 공백이 없어야 한다.
        } catch (error) {
            console.log(error.message);
        }
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
        }
        setIsActive(true);
    };

    const onClickUpdate = async () => {
        if (!title && !contents) {
            alert("수정한 내용이 없습니다.");
            return;
        }

        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const updateBoardInput: IUpdateBoardInput = {};
        if (title) updateBoardInput.title = title;
        if (contents) updateBoardInput.contents = contents;

        try {
            await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password: password,
                    updateBoardInput,
                },
            });
            alert("게시물 수정에 성공하였습니다!");
            router.push(`/boards/${router.query.boardId}`);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <IBoardsRoutingPresenter
            isActive={isActive}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
            data={props.data}
        />
    );
}
