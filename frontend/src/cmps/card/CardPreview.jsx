import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeCard } from '../../store/actions/boardActions.js'
// import { CardLabelShow } from '../cardEdit/CardLabelShow'
import { CardEdit } from '../../pages/CardEdit'

export class _CardPreview extends Component {

    state = {
        isCardEtidShow: false
    }


    onRemoveCard = (cardId) => {
        console.log('cardId to remove', cardId)
        this.props.removeCard(cardId, this.props.groupId, this.props.selectedBoard)
    }

    toggleCardEdit = () => {
        this.setState({ isCardEtidShow: !this.state.isCardEtidShow })
    }

    render() {
        const { card } = this.props
        const { isCardEtidShow } = this.state
        return (

            <article className="card-preview">
                <p onClick={this.toggleCardEdit} >{card.title}</p>
                {/* {card.labels && <CardLabelShow />} */}
                <button onClick={() => this.onRemoveCard(card.id)}>Remove Card</button>
                {isCardEtidShow && <CardEdit card={card} groupId={this.props.groupId} toggleCardEdit={this.toggleCardEdit} />}


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