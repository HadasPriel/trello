import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGroup } from '../../store/actions/boardActions.js'

export class _AddNewGroup extends Component {

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

    onSubmit = (ev) => {
        ev.preventDefault()
        if (!this.state.title) return
        console.log(this.state.title)

    }

    render() {
        return (
            <div className="add-new-group">
                <form onSubmit={this.onSubmit} >
                    <input placeholder="Add another list" type="text" onChange={this.handleChange} value={this.state.title} name="title" />
                    <button className="save-btn">Add List</button>
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
    addGroup
};

export const AddNewGroup = connect(mapStateToProps, mapDispatchToProps)(_AddNewGroup);