import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'

class _TodoShow extends Component {
    state = {
    }

    componentDidMount() {
        this.setState({ todo: this.props.todo })
    }


    handleChange = async (ev) => {
        const todo = { ...this.state.todo }
        todo.isDone = ev.target.checked
        await this.setState({ todo })

        const cardToSave = { ...this.props.card }
        const checklistIndex = cardToSave.checklists.findIndex(checklist => checklist.id === this.props.checklistId)
        const todoIndex = cardToSave.checklists[checklistIndex].todos.findIndex(todo => todo.id === this.state.todo.id)
        cardToSave.checklists[checklistIndex].todos[todoIndex] = this.state.todo
        try {
            await this.props.updateCard(cardToSave)
        } catch (err) {
            console.log(err);
        }
    }





    render() {
        const { todo } = this.state
        if (!todo) return <div>Loading...</div>
        return (
            <li>
                <p>{todo.txt}</p>
                <input type="checkbox" name="isDone" value={todo.isDone} checked={todo.isDone} onChange={this.handleChange} ></input>
                <button onClick={() => { this.props.removeTodo(todo.id, this.props.checklistId) }} >delete todo</button>
            </li>)


    }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
}

export const TodoShow = connect(mapStateToProps, mapDispatchToProps)(_TodoShow)
