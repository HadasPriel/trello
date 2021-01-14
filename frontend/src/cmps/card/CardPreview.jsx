import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeCard } from '../../store/actions/boardActions.js'

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
                <p>{card.title}</p>
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