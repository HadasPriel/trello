import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { removeCard } from '../../store/actions/boardActions.js'
import { CardLabelShow } from '../cardEdit/CardLabelShow'

export class _CardPreview extends Component {

    state = {

    }


    onRemoveCard = (cardId) => {
        console.log('cardId to remove', cardId)
        this.props.removeCard(cardId, this.props.groupId, this.props.selectedBoard)
    }


    render() {
        const { card } = this.props
        return (

            <article className="card-preview">
                <Link to={`/board/${this.props.selectedBoard._id}/${this.props.groupId}/card/${card.id}`}>
                    <p>{card.title}</p>
                    {/* {card.labels && <CardLabelShow />} */}
                </Link>
                <button onClick={() => this.onRemoveCard(card.id)}>Remove Card</button>


            </article>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard
    };
};

const mapDispatchToProps = {
    removeCard

};

export const CardPreview = connect(mapStateToProps, mapDispatchToProps)(_CardPreview);