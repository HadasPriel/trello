import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BoardFilter } from '../cmps/board/BoardFilter'
import { GroupList } from '../cmps/group/GroupList'
import { BoardSideMenu } from '../cmps/board/BoardSideMenu'
import { BoardHeader } from '../cmps/board/BoardHeader'
import { socketService } from '../services/socketService'
import { loadBoard, updateBoard, updateBoardAfterSocket } from '../store/actions/boardActions.js'
import { AppHeader } from '../cmps/AppHeader'


class _Board extends Component {
    state = {
        board: {},
        isBoardMenuShown: false
    }

    async componentDidMount() {
        const boardId = this.props.match.params.id
        socketService.setup()
        await this.props.loadBoard(boardId)
        socketService.emit('join board', boardId)
        socketService.on('update board', this.onChangeBoard)


    }

    onDragEnd = (result) => {
        // console.log('on drag result', result)
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

    onChangeBoard = async (board) => {
        // console.log('on change board', board)
        await this.props.updateBoardAfterSocket(board)
    }

    // per react beautiful dnd after performing optimistic update to let server know that a reorder has occurred
    onDragGroups = async (startIndex, endIndex) => {
        // console.log('I am in groups')
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
        // console.log('i am in this on drag cards')
        await this.props.updateBoard(this.props.selectedBoard)

    }

    toggleSideMenu = () => {
        this.setState({ isBoardMenuShown: !this.state.isBoardMenuShown })
    }


    render() {
        const { selectedBoard } = this.props
        const { isBoardMenuShown } = this.state

        if (!selectedBoard) return <div>Loading...</div>
        // console.log('BBB', selectedBoard.style.bgurl)
        const style = {
            boardStyle: { ...selectedBoard.style }
        }
        return (
            <section className="board-wraper"
                style={{
                    backgroundImage: "url(" + `${style.boardStyle.bgurl}` + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}>
                <AppHeader toggleSideMenu={this.toggleSideMenu} />
                {/* <BoardHeader board={selectedBoard} toggleSideMenu={this.toggleSideMenu} /> */}
                {/* <div className="board-title"> {selectedBoard.title}</div> */}
                <nav>
                    <BoardFilter />
                    {/* <button onClick={this.toggleSideMenu}>Side Menu In Development</button> */}
                </nav>
                {isBoardMenuShown && <BoardSideMenu toggleSideMenu={this.toggleSideMenu} />}
                {selectedBoard.groups && <GroupList groups={selectedBoard.groups} boardId={selectedBoard._id} onDragEnd={this.onDragEnd} />}
            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard,
        users: state.userModule.users,

    }
}
const mapDispatchToProps = {
    loadBoard,
    updateBoard,
    updateBoardAfterSocket
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
