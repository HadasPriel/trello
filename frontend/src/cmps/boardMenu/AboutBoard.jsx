import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EditBoardTitle } from './EditBoardTitle'



export class _AboutBoard extends Component {

    state = {
        isEditMode: false,

    }

    toggleEditMode = () => {
        this.setState({ isEditMode: !this.state.isEditMode })
    }

    render() {
        const { isEditMode } = this.state
        const { selectedBoard } = this.props
        return (
            <div className="about-board-container">
                <p> Created by </p>
                <div className="user-img inline-block" style={{ backgroundImage: `url(${selectedBoard.createdBy.imgUrl})` }}></div>
                <span>{selectedBoard.createdBy.username} </span>
                {(!isEditMode) ? <p onClick={this.toggleEditMode}> {selectedBoard.title} </p> : <EditBoardTitle toggleEditMode={this.toggleEditMode} />}
                <button onClick={() => { this.props.toggleAboutBoard() }}>Back to Menu</button>
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


};

export const AboutBoard = connect(mapStateToProps, mapDispatchToProps)(_AboutBoard);


