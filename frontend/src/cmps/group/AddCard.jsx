import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCard } from '../../store/actions/boardActions.js'

export class _AddCard extends Component {

    state = {
        title: ''
    }

    componentDidMount() {

    }

    handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        this.setState({ [field]: value })
    }

    onSubmit = async (ev) => {
        ev.preventDefault()
        if (!this.state.title) return
        await this.props.addCard(this.state.title, this.props.group.id, this.props.selectedBoard)
        this.props.toggleAddCardMode()

    }

    onCancelAdd = (ev) => {
        ev.preventDefault()
        this.props.toggleAddCardMode()
    }

    render() {
        return (
            <div className="add-new-group">
                <form onSubmit={this.onSubmit} >
                    <input placeholder="Add Card Title" type="text" onChange={this.handleChange} value={this.state.title} name="title" autoComplete="off" />
                    <button className="save-btn">Add Card</button>
                    <button className="cancel - btn" onClick={this.onCancelAdd}>Cancel</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard
    };
};

const mapDispatchToProps = {
    addCard

};

export const AddCard = connect(mapStateToProps, mapDispatchToProps)(_AddCard);