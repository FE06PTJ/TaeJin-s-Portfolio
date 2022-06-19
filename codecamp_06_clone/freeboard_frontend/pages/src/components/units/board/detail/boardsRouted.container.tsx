import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardsRoutedPresenter from "./boardsRouted.presenter";
import { FETCH_BOARD } from "./boardsRouted.queries";
import { IBoardsRoutedContainer } from "./boardsRouted.types";

export default function BoardsRoutedContainer(props: IBoardsRoutedContainer) {
    // 자바스크립트 부분
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const onClickMoveToBoardList = () => {
        router.push("/boards");
    };

    const onClickMoveToBoardEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`);
    };

    return (
        <BoardsRoutedPresenter
            data={data}
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
        />
    );
}
