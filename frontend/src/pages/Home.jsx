import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BoardList } from '../cmps/board/BoardList'
import { loadBoards } from '../store/actions/boardActions.js'
import Button from '@material-ui/core/Button';
// import { socketService } from '../services/socketService'

class _Home extends Component {
  state = {

  }

  componentDidMount() {
    this.props.loadBoards()
  }



  render() {

    return (
      <div className="home-container">

        <div className="home-img-container">
          {/* <div className="home-header">HEADER</div> */}
          <div className="get-started-container">
            <img src="./imgs/homebg.jpg" alt="" />
            <h1>TASKX</h1>
            <h3>Manage your teamwork with the ease of your fingers</h3>
            <Button variant="contained" size="large" color="primary" className="get-started">
              Get Started
        </Button>
          </div>
        </div>
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
