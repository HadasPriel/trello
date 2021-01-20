

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TodoListShow } from './TodoListShow'

// import { socketService } from '../services/socketService'
import { utilService } from '../../services/utilService.js'

class _CardActivitiesShow extends Component {



    render() {
        this.props.activities.filter(activity => {
            if (activity.card.id === this.props.card.id) return <div></div>
        })
        return (
            <ul className="card-activities-show card-show ">
                {this.props.activities.map(activity => {
                    if (activity.card.id === this.props.card.id) return (
                        <li key={activity.id} >
                            <div className="user-img inline-block" style={{ backgroundImage: `url(${activity.byMember.imgUrl})` }}></div>
                            <span>{activity.byMember.fullname} </span> {` ${activity.txt} to this card`}
                        </li>

                    )
                })}
            </ul>
        )
    }

}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
}

export const CardActivitiesShow = connect(mapStateToProps, mapDispatchToProps)(_CardActivitiesShow)
