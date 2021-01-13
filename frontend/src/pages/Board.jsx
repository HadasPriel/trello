import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { socketService } from '../services/socketService'
import { loadBoard } from '../store/actions/boardActions.js'

class _Board extends Component {
    state = {

    }

    componentDidMount() {
      const boardId =this.props.match.params.id
      this.props.loadBoard(boardId)
 

    }



    render() {
        return (
            <div>Board</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard
    }
}
const mapDispatchToProps = {
    loadBoard
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
