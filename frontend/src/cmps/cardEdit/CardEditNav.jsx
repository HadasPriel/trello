import React from 'react'

export function CardEditNav(props) {


    return (
        <nav>
            <h3>Add to card</h3>
            <button onClick={props.toggleLabelPalette}>Labels</button>
            <button onClick={props.toggleChecklistBar}>Checklist</button>
            <button>Due Date</button>

        </nav>
    )

}


