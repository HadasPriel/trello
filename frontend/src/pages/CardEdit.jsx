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

export const CardEdit = connect(mapStateToProps, mapDispatchToProps)(_CardEdit)
