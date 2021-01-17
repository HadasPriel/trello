
export function ChangeBoardBackground(props) {
    return (
        <div className="change-board-background-container">
            <p> I am  Change Board BackGround CMP</p>
   
          <button onClick={()=>{props.toggleChangeBackground()}}>Back to Menu</button>
        </div>
    )
}
