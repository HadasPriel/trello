import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGroup } from '../../store/actions/boardActions.js'
import Icon from '@material-ui/core/Icon';



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

    onSubmit = async (ev) => {
        ev.preventDefault()
        if (!this.state.title) return
        await this.props.addGroup(this.state.title, this.props.selectedBoard)


    }

    render() {
        return (
            <div className="add-new-group">
                <form className="add-new-wraper" onSubmit={this.onSubmit} >
                    <input className="add-another-group" placeholder="Add another list" type="text" onChange={this.handleChange} value={this.state.title} name="title" />
                    
                    <button className="save-btn">+ Add List</button>
               
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
    addGroup,

};

export const AddNewGroup = connect(mapStateToProps, mapDispatchToProps)(_AddNewGroup);