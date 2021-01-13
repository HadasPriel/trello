import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { socketService } from '../services/socketService'


class _CardEdit extends Component {
    state = {

    }

    componentDidMount() {

    }



    render() {
        return (
            <div>cardEdit</div>
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

export const CardEdit = connect(mapStateToProps, mapDispatchToProps)(_CardEdit)
