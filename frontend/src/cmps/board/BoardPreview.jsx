import { Link } from 'react-router-dom'


export function BoardPreview(props) {
    const { board } = props

    return (
        <div className="board-wraper">
            <article className="board-preview">
            {/* style={{`backgroundImage: url(${board.style.bgurl})`}} */}
            {/* backgroundImage: `url(${Background})` */}
            
                {/* <p>{board.title}</p> */}

                <Link to={`/board/${board._id}`}>{board.title}</Link>
            </article>
        </div>
    )
}