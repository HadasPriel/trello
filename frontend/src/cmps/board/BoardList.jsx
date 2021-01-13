import { BoardPreview } from './BoardPreview.jsx'

export function BoardList(props) {
    return (
        <ul className="board-list clean-list">
            { props.boards.map(board =>
                <li key={board._id} className="board">
                    <BoardPreview board={board} />
                </li>)}
        </ul>
    )
}

