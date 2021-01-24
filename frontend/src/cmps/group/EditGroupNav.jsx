

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddCard } from './AddCard.jsx'
import { GroupPreview } from './GroupPreview.jsx'



export class _EditGroupNav extends Component {

    state = {
        isOnAddCardMode: false,
        // isEditMode: false,
        isDeleteBarShow: false
    }


    toggleDeleteBar = () => {
        this.setState({ isDeleteBarShow: !this.state.isDeleteBarShow })
    }

    // toggleEditMode = () => {

    //     this.setState({ isEditMode: !this.state.isEditMode })
    // }
    toggleAddCardMode = () => {

        this.setState({ isOnAddCardMode: !this.state.isOnAddCardMode })
    }

    render() {
        const { onRemoveGroup } = this.props
        const { isDeleteBarShow } = this.state
        const { isOnAddCardMode } = this.state
        const { group } = this.props
        return (
            <React.Fragment>
                < nav className="edit-group-container">
                    {(!isOnAddCardMode) ? <button onClick={this.toggleAddCardMode}>Add another card...</button> : <AddCard group={group} toggleAddCardMode={this.toggleAddCardMode} />}
                    
                </nav >
                <nav>

                </nav>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard
    };
};

const mapDispatchToProps = {

};

export const EditGroupNav = connect(mapStateToProps, mapDispatchToProps)(_EditGroupNav);
