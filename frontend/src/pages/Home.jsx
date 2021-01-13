import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BoardList } from '../cmps/board/BoardList'
import { loadBoards } from '../store/actions/boardActions.js'
// import { socketService } from '../services/socketService'

class _Home extends Component {
  state = {

  }

  componentDidMount() {
    this.props.loadBoards()
  }



  render() {

    return (
      <div>
        <h1> home! </h1>

        <BoardList boards={this.props.boards} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boardModule.boards
  }
}
const mapDispatchToProps = {
  loadBoards,
  // loadBoard,
  //createBoard
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)
