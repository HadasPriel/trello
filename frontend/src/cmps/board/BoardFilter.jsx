import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'
import { filterByCardText } from '../../store/actions/boardActions.js'

// TODO TO FIX AFTER BACKEND
class _BoardFilter extends Component {
    state = {
        filterBy: {
            title: ''
        },

    }

    componentDidMount() {

    }

    handleChange = (ev) => {
        const callback = () => {
            this.props.filterByCardText(this.props.selectedBoard, this.state.filterBy);
        };

        const filterBy = { ...this.state.filterBy }
        filterBy[ev.target.name] = ev.target.value;

        this.setState({ filterBy }, callback);
    };



    render() {
        const { selectedBoard } = this.props

        if (!selectedBoard) return <div>Loading...</div>

        return (
            <section className="board-filter">
                <input type="text" name="title"
                    value={this.state.filterBy.title}
                    placeholder="Search in development"
                    autoComplete="off"
                    onChange={this.handleChange} />

            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard,
        filterBy: state.boardModule.filterBy
    }
}
const mapDispatchToProps = {
    filterByCardText
}

export const BoardFilter = connect(mapStateToProps, mapDispatchToProps)(_BoardFilter)