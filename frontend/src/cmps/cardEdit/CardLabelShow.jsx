import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'

class _CardLabelShow extends Component {

    removeLable = (labelId) => {
        const cardToSave = { ...this.props.card }
        const labelsToSave = cardToSave.labels.filter(label => label.id !== labelId)
        cardToSave.labels = labelsToSave
        this.props.updateCard(cardToSave)
    }

    render() {
        return (
            <ul>
                {this.props.labels.map(label => {
                    return (
                        <li
                            key={label.id} className={label.color} > {label.title}
                            <button onClick={() => { this.removeLable(label.id) }}>X</button>
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

export const CardLabelShow = connect(mapStateToProps, mapDispatchToProps)(_CardLabelShow)
