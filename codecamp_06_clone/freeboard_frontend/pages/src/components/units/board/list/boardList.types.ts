import { MouseEvent } from "react";

export interface IBoardsListPresenter {
    data: any;
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
}
