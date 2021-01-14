import React, { Component } from 'react'
import { connect } from 'react-redux'
import { utilService } from '../../services/utilService.js'

// import { socketService } from '../services/socketService'

class _AddChecklistBar extends Component {
    state = {
        checklist: { title: '', todos: [] }
    }

    handleChange = (ev) => {
        const checklist = { ...this.state.checklist }
        checklist[ev.target.name] = ev.target.value

        this.setState({ checklist })
    }

    onAddChecklist = (ev) => {
        ev.preventDefault()
        const checklist = { id: utilService.makeId(), ...this.state.checklist }
        const cardToSave = { ...this.props.card }
        cardToSave.checklists = (cardToSave.checklists) ? [...cardToSave.checklists, checklist] : [checklist]
        // console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
    }



    render() {

        return (
            <form onSubmit={this.onAddChecklist}>
                <h3>Add Checklist</h3>
                <label>Title
                    <input type="text" name="title" value={this.state.checklist.title}
                        onChange={this.handleChange} autoComplete="off" required></input>
                    <button>Add</button>
                </label>
            </form>

        )
    }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
}

export const AddChecklistBar = connect(mapStateToProps, mapDispatchToProps)(_AddChecklistBar)