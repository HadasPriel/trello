import React from 'react'

export function CardEditNav(props) {


    return (
        <nav className="card-edit-nav flex column">
            <h3>Add to card</h3>
            <button onClick={props.toggleLabelPalette}>Labels</button>
            <button onClick={props.toggleChecklistBar}>Checklist</button>
            <button onClick={props.toggleCoverBar}>Cover</button>
            <button>Due Date</button>
            <button>Delete</button>

        </nav>
    )

}


