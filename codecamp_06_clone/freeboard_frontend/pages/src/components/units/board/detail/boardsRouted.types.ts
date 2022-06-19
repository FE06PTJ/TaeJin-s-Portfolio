export interface IBoardsRoutedContainer {
    // isEdit: boolean;
    data?: any;
}

export interface IBoardsRoutedPresenter {
    data: any;
    onClickMoveToBoardList: () => void;
    onClickMoveToBoardEdit: () => void;
}
