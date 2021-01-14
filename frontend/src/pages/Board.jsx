import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GroupList } from '../cmps/group/GroupList'
// import { socketService } from '../services/socketService'
import { loadBoard } from '../store/actions/boardActions.js'

class _Board extends Component {
    state = {
        board: {}
    }

    async componentDidMount() {
        const boardId = this.props.match.params.id
        console.log('boardId', boardId)
        await this.props.loadBoard(boardId)


    }





    render() {
        const { selectedBoard } = this.props
        if (!selectedBoard) return <div>Loading...</div>

        return (
            <section>
                <div> {selectedBoard.title}</div>

                {selectedBoard.groups && <GroupList groups={selectedBoard.groups} />}

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
