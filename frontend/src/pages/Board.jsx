import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GroupList } from '../cmps/group/GroupList'
// import { socketService } from '../services/socketService'
import { loadBoard, updateBoard } from '../store/actions/boardActions.js'


class _Board extends Component {
    state = {
        board: {},

    }

    async componentDidMount() {
        const boardId = this.props.match.params.id
        console.log('boardId', boardId)
        await this.props.loadBoard(boardId)


    }

    onDragEnd = (result) => {
        console.log('on drag result', result)
        const { destination, source, draggableId, type } = result
        if (!destination) return
        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }
        if (type === 'group') {
            this.onDragGroups(source.index, destination.index)
        }
        if (type === 'card') {
            this.onDragCards(destination, source, draggableId)
        }
    }

    // per react beautiful dnd after performing optimistic update to let server know that a reorder has occurred
    onDragGroups = async (startIndex, endIndex) => {
        console.log('I am in groups')
        let boardToUpdate = this.props.selectedBoard
        const groupToMove = boardToUpdate.groups.splice(startIndex, 1)
        boardToUpdate.groups.splice(endIndex, 0, groupToMove[0])
        await this.props.updateBoard(this.props.selectedBoard)

    }

    onDragCards = async (destination, source) => {
        let boardToUpdate = this.props.selectedBoard
        const groupToMoveFromIdx = boardToUpdate.groups.findIndex(group => group.id === source.droppableId)
        const groupToMoveToIdx = boardToUpdate.groups.findIndex(group => group.id === destination.droppableId)
        const cardToMove = boardToUpdate.groups[groupToMoveFromIdx].cards.splice(source.index, 1)
        boardToUpdate.groups[groupToMoveToIdx].cards.splice(destination.index, 0, cardToMove[0])
        console.log('i am in this on drag cards')
        await this.props.updateBoard(this.props.selectedBoard)

    }


    render() {
        const { selectedBoard } = this.props
        if (!selectedBoard) return <div>Loading...</div>

        return (
            <section className="board-wraper">
                <div className="board-title"> {selectedBoard.title}</div>
                {selectedBoard.groups && <GroupList groups={selectedBoard.groups} boardId={selectedBoard._id} onDragEnd={this.onDragEnd}/>}

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
    loadBoard,
    updateBoard
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
