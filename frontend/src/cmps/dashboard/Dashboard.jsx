import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PieBoard } from './PieBoard'
import { BarBoard } from './BarBoard'
import { LineBoard } from './LineBoard'


class _Dashboard extends Component {

    render() {


        return (
            <section className="dashboard side-menu-sub-item">
                <header>
                    <h1>Board Statistics</h1>
                    <button className="close-menu" onClick={this.props.toggleDashboard}>x</button>
                </header>
                <main className="menu-container">
                    <PieBoard board={this.props.selectedBoard} />
                    <BarBoard board={this.props.selectedBoard} />
                    <LineBoard board={this.props.selectedBoard} />
                </main>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard,

    }
}

const mapDispatchToProps = {
}

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(_Dashboard)
