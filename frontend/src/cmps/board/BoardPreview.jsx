import { Link } from 'react-router-dom'


export function BoardPreview(props) {
    const { board } = props
    const style = { boardStyle: { ...board.style } }

    return (
        <li className="board-preview"
            style={{
                backgroundImage: "url(" + `${style.boardStyle.bgurl}` + ")",
            }}>
            <Link to={`/board/${board._id}`}></Link>
            <p>{board.title}</p>
        </li>
    )
}