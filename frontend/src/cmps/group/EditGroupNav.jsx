

import React, { Component } from 'react'
import { connect } from 'react-redux'



export class _EditGroupNav extends Component {

    state = {
        isDeleteBarShow: false
    }


    toggleDeleteBar = () => {
        this.setState({ isDeleteBarShow: !this.state.isDeleteBarShow })
    }

    render() {
        const { onRemoveGroup } = this.props
        const { isDeleteBarShow } = this.state
        return (
            <React.Fragment>
                < nav >
                    <button onClick={this.toggleDeleteBar}>Delete group</button>
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
