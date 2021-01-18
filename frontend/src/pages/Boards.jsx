import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BoardList } from '../cmps/board/BoardList'
import { AddBoard } from '../cmps/board/AddBoard'
import { loadBoards } from '../store/actions/boardActions.js'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


// import { socketService } from '../services/socketService'

class _Boards extends Component {
    state = {
        isNewBoard: false
    }

    componentDidMount() {
        this.props.loadBoards()
    }

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
            <div className="boards-wraper">

                <div className="boards-container">
                    <div className="board-get-started-container">
                        <h1>TASKX</h1>
                        <h3>Manage your teamwork with the ease of your fingers</h3>
                        {/* <AddBoard toggleNewBoard={this.toggleNewBoard} onLoadNewBoard={this.onLoadNewBoard} /> */}


                        <AddBoard toggleNewBoard={this.toggleNewBoard} onLoadNewBoard={this.onLoadNewBoard} />
                    </div>
                </div >


                {/* <div className="user-boards-container">
          <BoardList boards={this.props.boards} />
       
        </div> */}
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

export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)