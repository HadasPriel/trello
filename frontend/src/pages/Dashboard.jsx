import React, { Component } from 'react'
import { connect } from 'react-redux'


class _Dashboard extends Component {

    componentDidMount() {

    }

    // createDoughnut = () => {
    //     const board = this.props.selectedBoard

    //     const data = {
    //         datasets: [{
    //             data: [10, 20, 30]
    //         }],

    //         labels: board.members
    //     }


    //     var myPieChart = new Chart(ctx, {
    //         type: 'pie',
    //         data: data,
    //         // options: options
    //     });
    // }



    render() {


        return (
            <section>
                <h1>Dashboard!</h1>
                {/* <canvas id="myChart" width="400" height="400"></canvas> */}
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
