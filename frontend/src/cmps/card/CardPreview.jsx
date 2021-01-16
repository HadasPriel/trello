import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeCard } from '../../store/actions/boardActions.js'
import { CardLabelShowMin } from '../cardEdit/CardLabelShowMin'
import { CardEdit } from '../../pages/CardEdit'
import { Draggable } from 'react-beautiful-dnd'
import { ChecklistSign } from './ChecklistSign'
import { CardCoverShowMin } from './CardCoverShowMin'

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
        const cardBgc = (card.style && card.style.coverType && card.style.coverType === 'full') ? `full ${card.style.bgColor}` : ''

        return (


            <Draggable draggableId={String(card.id)} index={this.props.index} direction="horizontal" type="card">
                {(provided) => {
                    return (

                        <li key={card.id}  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <article className={`card-preview ${cardBgc}`}>
                                {(card.style && card.style.coverType && card.style.coverType === 'top') ? <CardCoverShowMin card={card} /> : ''}
                                <button className="delete" onClick={() => this.onRemoveCard(card.id)}></button>
                                {card.labels && <CardLabelShowMin labels={card.labels} />}
                                <p onClick={this.toggleCardEdit} >{card.title}</p>
                                <nav>
                                    {(card.checklists && card.checklists.length > 0) ? <ChecklistSign checklists={card.checklists} /> : ''}
                                </nav>
                                {isCardEtidShow && <CardEdit card={card} groupId={this.props.groupId} toggleCardEdit={this.toggleCardEdit} />}
                            </article>
                        </li>
                    )
                }}
            </Draggable>
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