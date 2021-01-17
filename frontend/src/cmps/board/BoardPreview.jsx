import { Link } from 'react-router-dom'


export function BoardPreview(props) {
    const { board } = props
    const style= {boardStyle: {...board.style}}

    return (
        <div className="board-wraper-home">
            <article className="board-preview-home"
                style={{
                    backgroundImage: "url(" + `${style.boardStyle.bgurl}` + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: "3px",
                    width: "350px",
                    height: "200px",
                    margin: "10px",
                    // marginBottom: "50px"
                }}
            >

                {/* <p>{board.title}</p> */}

                <Link to={`/board/${board._id}`}>{board.title}</Link>
            </article>
        </div>
    )
}