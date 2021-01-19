import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BoardList } from '../cmps/board/BoardList'
import { AddBoard } from '../cmps/board/AddBoard'
import { loadBoards } from '../store/actions/boardActions.js'
import { HomeHeader } from '../cmps/HomeHeader'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
// import Icon from '@material-ui/core/Icon';
// import Uploader from '../cmps/Uploader';

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
        <HomeHeader />

        <div className="home-img-container">
          <div className="get-started-container">
            <h1>TASKX</h1>
            <h3>Manage your teamwork with the ease of your fingers</h3>
            {/* <Link to="/board" ><button className="header-board"> Boards </button></Link> */}

            <div className="get-started-btn">
              <Link to="/board" >
                <Button variant="contained" size="large" color="primary" className="get-started" onClick={this.toggleNewBoard}>
                  Get Started
            </Button>
              </Link>
            </div>
            {/* {this.state.isNewBoard && <AddBoard toggleNewBoard={this.toggleNewBoard} onLoadNewBoard={this.onLoadNewBoard} />} */}
          </div>
        </div >

        <div className="welcome-container">
          <article className="welcome1">
            <h3>Hit your deadlines, follow your your team’s progress and keep work moving across teams  — all from one place.</h3>
            <img className="img1" src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1610985446/pen-2373521_1920_m98lid.jpg" alt="" />

          </article>

          <article className="welcome2">
            <h3>Collaborate and build total alignment on your project by adding comments to any task or document. </h3>
            <img className="img1" src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1610985635/pen-5690144_1920_p5ledt.jpg" alt="" />

          </article>

          <article className="welcome3">
            <h3>Keep everyone automatically looped in on task and project updates with our all-in-one project and task management App.</h3>
            <img className="img1" src="https://res.cloudinary.com/ddgevj2yp/image/upload/v1610985931/notebook-2723406_1920_kywzpe.jpg" alt="" />

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
