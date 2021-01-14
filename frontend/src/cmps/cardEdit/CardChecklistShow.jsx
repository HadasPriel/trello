import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'
import { utilService } from '../../services/utilService.js'

class _CardChecklistShow extends Component {
    state = {
        task: { txt: '', isDone: false }
    }

    removeChecklist = (checklistId) => {
        // const labelsToSave = this.props.labels.filter(label => label.id !== labelId)
        const cardToSave = { ...this.props.card }
        const checklistsToSave = cardToSave.checklists.filter(checklist => checklist.id !== checklistId)

        cardToSave.checklists = checklistsToSave
        console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
    }

    handleTaskChange = (ev) => {
        const task = { ...this.state.task }
        if (ev.target.name === 'isDone') task.isDone = ev.target.checked
        else task[ev.target.name] = ev.target.value

        this.setState({ task })
    }

    addTask = (ev, checklistId) => {
        ev.preventDefault()

        const task = { ...this.state.task, id: utilService.makeId() }
        const cardToSave = { ...this.props.card }
        const checklistToSave = cardToSave.checklists.find(checklist => checklist.id === checklistId)
        checklistToSave.todos = (checklistToSave.todos) ? [...checklistToSave.todos, task] : [task]
        const checklistsToSave = cardToSave.checklists.map(checklist => {
            if (checklist.id === checklistId) return checklistToSave
            else return checklist
        })
        cardToSave.checklists = checklistsToSave

        console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
            .then(this.setState({ task: { txt: '', isDone: false } }))
    }

    updateIsDone = (checklistId, todoId) => {
        console.log('here');
    }



    render() {
        const { task } = this.state
        return (
            <ul>
                {this.props.checklists.map(checklist => {
                    return (
                        <li key={checklist.id} >
                            <h4>{checklist.title}</h4>
                            <button onClick={() => { this.removeChecklist(checklist.id) }}>X</button>
                            <ul>
                                {checklist.todos.map(todo => {
                                    return (
                                        <li key={todo.id}>
                                            <p>{todo.txt}</p>
                                            <input type="checkbox" name="isDone" checked={todo.isDone}
                                                onChange={(event) => { this.updateIsDone(event, checklist.id, todo) }} ></input>
                                        </li>)
                                })}
                            </ul>
                            <form onSubmit={(event) => { this.addTask(event, checklist.id) }}>
                                <input type="text" name="txt" value={task.txt}
                                    onChange={this.handleTaskChange} placeholder="Add an item" autoComplete="off"></input>
                                <input type="checkbox" name="isDone" checked={task.isDone} onChange={this.handleTaskChange} ></input>
                                <button>Add</button>
                            </form>
                        </li>

                    )
                })}
            </ul>
        )
    }

}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
}

export const CardChecklistShow = connect(mapStateToProps, mapDispatchToProps)(_CardChecklistShow)
