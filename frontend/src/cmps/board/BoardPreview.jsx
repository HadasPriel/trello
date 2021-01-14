import { Link } from 'react-router-dom'


export function BoardPreview(props) {
    const { board } = props
    return (
        <article className="board-preview">
            {/* <p>{board.title}</p> */}
            
            <Link to={`/board/${board._id}`}>{board.title}</Link>
        </article>
    )
}