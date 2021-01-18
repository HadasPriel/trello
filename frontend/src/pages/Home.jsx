import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BoardList } from '../cmps/board/BoardList'
import { AddBoard } from '../cmps/board/AddBoard'
import { loadBoards } from '../store/actions/boardActions.js'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Uploader from '../cmps/Uploader';

// import { socketService } from '../services/socketService'

class _Home extends Component {
  state = {
    isNewBoard: false
  }

  componentDidMount() {
    this.props.loadBoards()
  }
  // onUploadImage = (url) =>{
  //   console.log('URL:', url)
  //   //   const toy = {
  //   //     imgUrl: url
  //   //   }
  //   //   this.props.updateToy(toy)
  // }



  toggleNewBoard = () => {
    console.log('I am in new board')
    this.setState({ isNewBoard: !this.state.isNewBoard })
  }

  onLoadNewBoard = (boardId) => {
    this.toggleNewBoard()
    this.props.history.push(`/board/${boardId}`)
  }




  render() {

    return (
      <div className="home-wraper">
        <div className="homepage-header">
          <div className="login-icon"><Icon >login</Icon></div>



        </div>

        <div className="home-img-container">
          <div className="get-started-container">
            <h1>TASKX</h1>
            <h3>Manage your teamwork with the ease of your fingers</h3>
            <Button variant="contained" size="large" color="primary" className="get-started" onClick={this.toggleNewBoard}>
              Get Started
            </Button>
            {this.state.isNewBoard && <AddBoard toggleNewBoard={this.toggleNewBoard} onLoadNewBoard={this.onLoadNewBoard} />}
          </div>
        </div >

        <div className="welcome-container">
        <article className="welcome1">
          <img  className="img1" src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1610907748/homebg_tfe2ha.jpg" alt=""/>
          <h3>Hit your deadlines, follow your your team’s progress and keep work moving across teams  — all from one place.</h3>
          </article>
          {/* <h3>Save time, avoid losing work and information, delegate, prioritize your tasks and keep track to stay on schedule.</h3> */}

        </div>
        <div className="boards-container">
          {/* <BoardList boards={this.props.boards} />
          <Uploader /> */}
        </div>
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
