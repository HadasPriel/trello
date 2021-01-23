import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BoardList } from '../cmps/board/BoardList'
import { AddBoard } from '../cmps/board/AddBoard'
import { loadBoards } from '../store/actions/boardActions.js'
import { HomeHeader } from '../cmps/HomeHeader'
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';


// import { socketService } from '../services/socketService'

class _Boards extends Component {
    state = {
        isNewBoard: false
    }

    componentDidMount() {
        this.props.loadBoards({ userId: '6004748cf9fd65ff47dc81e4' })
    }

    toggleNewBoard = () => {
        // console.log('I am in new board')
        this.setState({ isNewBoard: !this.state.isNewBoard })
    }



    onLoadNewBoard = (boardId) => {
        this.toggleNewBoard()
        this.props.history.push(`/board/${boardId}`)
    }




    render() {

        return (

            <React.Fragment>
                <HomeHeader loggedInUser={this.props.loggedInUser} />

                <div className="boards">
                    {/* <div className="board-get-started-container"> */}
                    <h1>TASKX <span> Get on Board </span></h1>

                    <section>
                        <h2>templates boards</h2>
                    </section>
                    <section>
                        <h2>Yours boards</h2>
                        <BoardList boards={this.props.boards} toggleNewBoard={this.toggleNewBoard} />
                        <button onClick={this.toggleNewBoard}>Add board</button>
                    </section>
                    {this.state.isNewBoard && <AddBoard toggleNewBoard={this.toggleNewBoard} onLoadNewBoard={this.onLoadNewBoard} />}
                    {/* </div> */}
                </div >

                {/* <div className="user-boards-container">
          <BoardList boards={this.props.boards} />
          
        </div> */}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        boards: state.boardModule.boards,
        loggedInUser: state.userModule.loggedInUser
    }
}
const mapDispatchToProps = {
    loadBoards,
    // loadBoard,
    //createBoard
}

export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)