import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { socketService } from '../services/socketService'
import { loadBoard } from '../store/actions/boardActions.js'

class _Board extends Component {
    state = {
        board: {}
    }

    componentDidMount() {
        const boardId = this.props.match.params.id
        console.log('boardId', boardId)
        this.props.loadBoard(boardId)


    }

 



    render() {
        const {selectedBoard} = this.props

        return (
            <section>
                <div> {selectedBoard.title}</div>
            
            </section>

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
