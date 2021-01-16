

import React from 'react'

export function ChecklistSign(props) {

    const progress = props.checklists.map(Checklist => {
        let done = 0
        let all = 0
        Checklist.todos.forEach(todo => {
            if (todo.isDone === true) done++
            all++
        })
        return `${done} / ${all}`
    })

    return (
        <span className="checklistSign" > {progress} </span>
    )

}


