import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { socketService } from '../services/socketService'

class _Board extends Component {
    state = {

    }

    componentDidMount() {

    }



    render() {
        return (
            <div>Board</div>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
}

export const Board = connect(mapStateToProps, mapDispatchToProps)(_Board)
