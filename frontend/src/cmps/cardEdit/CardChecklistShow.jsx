import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'

class _CardChecklistShow extends Component {

    removeChecklist = (labelId) => {
        // const labelsToSave = this.props.labels.filter(label => label.id !== labelId)
        const cardToSave = { ...this.props.card }
        cardToSave.labels.filter(label => label.id !== labelId)
        console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
    }

    render() {
        return (
            <ul>
                {this.props.checklists.map(checklist => {
                    return (
                        <li key={checklist.id} >
                            <h4>{checklist.title}</h4>
                            <button onClick={() => { this.removeChecklist(checklist.id) }}>X</button>
                            <form>
                                <input type="text" name="fullname" value={this.state.checklist.title}
                                    onChange={this.handleChange} placeholder="Add an item" autoComplete="off"></input>
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
