import React, { Component } from 'react'
import { connect } from 'react-redux'
import { utilService } from '../../services/utilService.js'

// import { socketService } from '../services/socketService'

class _AddChecklistBar extends Component {
    state = {
        checklist: { title: '' }
    }

    handleChange = (ev) => {
        const checklist = { ...this.state.checklist }
        checklist[ev.target.name] = ev.target.value

        this.setState({ checklist })
    }

    addChecklist = (ev) => {
        ev.preventDefault()
        const checklist = { id: utilService.makeId(), title: this.state.checklist.title }
        const cardToSave = { ...this.props.card }
        cardToSave.checklists = (cardToSave.checklists) ? [...cardToSave.checklists, checklist] : [checklist]
        // console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
    }



    render() {

        return (
            <form onSubmit={this.addChecklist}>
                <h3>Add Checklist</h3>
                <label>Title
                    <input type="text" name="fullname" value={this.state.checklist.title}
                        onChange={this.handleChange} autoComplete="off"></input>
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
