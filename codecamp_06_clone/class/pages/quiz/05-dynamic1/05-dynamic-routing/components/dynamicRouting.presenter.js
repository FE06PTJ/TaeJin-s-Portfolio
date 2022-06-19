import {Button} from './dynamicRouting.styles'

export default function DynamicRoutingPresenter(props) {
    return (
    // JSX부분    
        <div>
            <Button onClick={props.onClickMove1} isActive={props.isActive}>83011번 게시글 이동 버튼</Button>
            <Button onClick={props.onClickMove2} isActive={props.isActive}>83012번 게시글 이동 버튼</Button>
            <Button onClick={props.onClickMove3} isActive={props.isActive}>83013번 게시글 이동 버튼</Button>
        </div>
    )
}