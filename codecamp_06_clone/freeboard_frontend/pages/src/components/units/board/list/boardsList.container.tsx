import BoardsListPresenter from "./boardsList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./boardsList.queries";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function BoardsListContainer() {
    const router = useRouter();
    const { data } = useQuery(FETCH_BOARDS);

    const onClickMoveToBoardNew = () => {
        router.push(`/boards/new`);
    };

    const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
        if (event.target instanceof Element) router.push(`/boards/${event.target.id}`);
    };

    return (
        <BoardsListPresenter
            data={data}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
        />
    );
}
