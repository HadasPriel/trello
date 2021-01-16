import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TodoListShow } from './TodoListShow'

// import { socketService } from '../services/socketService'
import { utilService } from '../../services/utilService.js'

class _CardChecklistShow extends Component {
    state = {
        todo: { txt: '', isDone: false }
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
        const todo = { ...this.state.todo }
        if (ev.target.name === 'isDone') todo.isDone = ev.target.checked
        else todo[ev.target.name] = ev.target.value

        this.setState({ todo })
    }

    addTask = (ev, checklistId) => {
        ev.preventDefault()

        const todo = { ...this.state.todo, id: utilService.makeId() }
        const cardToSave = { ...this.props.card }
        const checklistToSave = cardToSave.checklists.find(checklist => checklist.id === checklistId)
        checklistToSave.todos = (checklistToSave.todos) ? [...checklistToSave.todos, todo] : [todo]
        const checklistsToSave = cardToSave.checklists.map(checklist => {
            if (checklist.id === checklistId) return checklistToSave
            else return checklist
        })
        cardToSave.checklists = checklistsToSave

        console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
            .then(this.setState({ todo: { txt: '', isDone: false } }))
    }


    removeTodo = (todoId, checklistId) => {
        const cardToSave = { ...this.props.card }
        const checklistIndex = cardToSave.checklists.findIndex(checklist => checklist.id === checklistId)
        const todoToSave = cardToSave.checklists[checklistIndex].todos.filter(todo => todo.id !== todoId)
        cardToSave.checklists[checklistIndex].todos = todoToSave
        this.props.updateCard(cardToSave)
    }


    render() {
        const { todo } = this.state
        return (
            <ul className="card-checklist-show card-show ">
                {this.props.checklists.map(checklist => {
                    return (
                        <li key={checklist.id} >
                            <header>
                                <h4 className="checklist-title" > {checklist.title}</h4>
                                <button className="edit-btn" onClick={() => { this.removeChecklist(checklist.id) }}>Delete</button>
                            </header>
                            <TodoListShow checklist={checklist} card={this.props.card} updateCard={this.props.updateCard}
                                removeTodo={this.removeTodo} />
                            <form onSubmit={(event) => { this.addTask(event, checklist.id) }}>
                                <input className="blabla" type="text" name="txt" value={todo.txt} onChange={this.handleTaskChange}
                                    placeholder="Add an item" autoComplete="off" required></input>
                                {/* <input type="checkbox" name="isDone" checked={todo.isDone} onChange={this.handleTaskChange} ></input> */}
                                <button className="add-btn">Add</button>
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
