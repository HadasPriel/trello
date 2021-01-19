import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AboutBoard } from '../boardMenu/AboutBoard'
import { ChangeBoardBackground } from '../boardMenu/ChangeBoardBackground'
import { RemoveBoard } from '../boardMenu/RemoveBoard'

class _BoardSideMenu extends Component {
    state = {
        isAboutBoardShown: false,
        isChangeBackgroundShown: false,
        isBoardAnalysisShown: false,
        isDeleteBoardShown: false
    }

    async componentDidMount() {

    }

    toggleAboutBoard = () => {
        this.setState({ isAboutBoardShown: !this.state.isAboutBoardShown })
    }
    toggleChangeBackground = () => {
        this.setState({ isChangeBackgroundShown: !this.state.isChangeBackgroundShown })
    }
    toggleBoardAnalysis = () => {
        this.setState({ isBoardAnalysisShown: !this.state.isBoardAnalysisShown })
    }
    toggleDeleteBoard = () => {
        this.setState({ isDeleteBoardShown: !this.state.isDeleteBoardShown })

    }


    render() {
        const { isAboutBoardShown } = this.state
        const { isChangeBackgroundShown } = this.state
        const { isBoardAnalysisShown } = this.state
        const { isDeleteBoardShown } = this.state
        const { selectedBoard } = this.props
        return (
            <section className="board-side-menu">
                <header className="menu-header">
                    <h1>Menu</h1>
                    <button className="close-menu" onClick={this.props.toggleSideMenu}>X</button>
                </header>
                {/* <div className="hr"></div> */}

                <div className="menu-container">
                    {(!isAboutBoardShown) ? <div className="menu-item about-board" onClick={this.toggleAboutBoard}> <span className="" ></span><h5> About this board</h5></div> : <AboutBoard toggleAboutBoard={this.toggleAboutBoard} board={selectedBoard} />}
                    {(!isChangeBackgroundShown) ? <p className="change-board-background" onClick={this.toggleChangeBackground}> Change Background</p> : <ChangeBoardBackground toggleChangeBackground={this.toggleChangeBackground} />}
                    {(isBoardAnalysisShown) && <p className="board-analysis" onClick={this.isBoardAnalysisShown}>Board Analysis</p>}
                    {(!isDeleteBoardShown) ? <p className="delete-board" onClick={this.toggleDeleteBoard}> Delete Board</p> : <RemoveBoard toggleDeleteBoard={this.toggleDeleteBoard} board={selectedBoard} />}
                </div>


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

}

export const BoardSideMenu = connect(mapStateToProps, mapDispatchToProps)(_BoardSideMenu)