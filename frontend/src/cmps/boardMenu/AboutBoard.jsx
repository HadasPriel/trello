

export function AboutBoard(props) {
    return (
        <div className="about-board-container">
             <p> I am  About Board CMP</p>
          {props.board.title}
          <button onClick={()=>{props.toggleAboutBoard()}}>Back to Menu</button>
        </div>
    )
}

