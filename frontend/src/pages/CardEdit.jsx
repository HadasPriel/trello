import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'
import { loadBoard, updateBoard } from '../store/actions/boardActions.js'
import { CardEditNav } from '../cmps/cardEdit/CardEditNav'
import { AddDescription } from '../cmps/cardEdit/AddDescription'
import { LabelPalette } from '../cmps/cardEdit/LabelPalette'
import { AddChecklistBar } from '../cmps/cardEdit/AddChecklistBar'
import { AddCoverBar } from '../cmps/cardEdit/AddCoverBar'
import { CardLabelShow } from '../cmps/cardEdit/CardLabelShow'
import { CardChecklistShow } from '../cmps/cardEdit/CardChecklistShow'
import { CardCoverShow } from '../cmps/cardEdit/CardCoverShow'

class _CardEdit extends Component {
    state = {
        board: null,
        groupId: null,
        card: null,
        isDescriptionShowing: false,
        isLabelPaletteShowing: false,
        isAddChecklistShowing: false,
        isCoverShowing: false
    }

    async componentDidMount() {
        this.loadCard()
    }

    componentDidUpdate(prevprops) {
        if (this.props.match !== prevprops.match) this.loadCard()
    }




    loadCard = async () => {
        const boardId = this.props.selectedBoard._id
        const groupId = this.props.groupId
        const cardId = this.props.card.id
        try {
            await this.props.loadBoard(boardId)
            const groups = this.props.selectedBoard.groups
            const group = groups.find(group => group.id === groupId)
            const card = group.cards.find(currCard => currCard.id === cardId)
            this.setState({ board: this.props.selectedBoard, groupId, card })
        } catch (err) {
            console.log(err);
        }
    }

    updateCard = async (cardToSave) => {
        const boardToSave = { ...this.state.board }
        const groupToSave = boardToSave.groups.find(group => group.id === this.state.groupId)
        const cardsToSave = groupToSave.cards.map(card => {
            if (card.id === cardToSave.id) return cardToSave
            else return card
        })
        groupToSave.cards = cardsToSave
        const groupsToSave = boardToSave.groups.map(group => {
            if (group.id === groupToSave.id) return groupToSave
            else return group
        })
        boardToSave.groups = groupsToSave
        // console.log('boardToSave', boardToSave)

        try {
            await updateBoard(boardToSave)
            this.loadCard()

        } catch (err) {
            console.log('BoardActions: err in loadBoard', err)
        }
    }

    toggleLabelPalette = () => {
        this.setState({ isLabelPaletteShowing: !this.state.isLabelPaletteShowing })
    }
    toggleChecklistBar = () => {
        this.setState({ isAddChecklistShowing: !this.state.isAddChecklistShowing })
    }
    toggleCoverBar = () => {
        this.setState({ isCoverShowing: !this.state.isCoverShowing })
    }
    toggleAddDescription = () => {
        this.setState({ isDescriptionShowing: !this.state.isDescriptionShowing })

    }


    render() {
        const { card, isDescriptionShowing } = this.state
        const isLabels = (card && card.labels && card.labels.length > 0)
        const isChecklists = (card && card.checklists && card.checklists.length > 0)
        if (!card) return <div>Loading...</div>
        return (
            <React.Fragment>
                <div className="screen" onClick={this.props.toggleCardEdit}></div>
                <section className="card-edit">
                    {(card.style && card.style.coverType) ? <CardCoverShow card={card} /> : ''}
                    <header className="edit-header">
                        <button className="close" onClick={this.props.toggleCardEdit}></button>
                        <button className="title-sign"></button>
                        <h1>{card.title}</h1>
                    </header>

                    <div className="permanent">
                        <main>
                            <div className="show">{isLabels && <div> <h5>Labels </h5><CardLabelShow labels={card.labels} card={card} updateCard={this.updateCard} /></div>}</div>
                            <h4>Description </h4>
                            {(isDescriptionShowing) ? <AddDescription card={card} toggleAddDescription={this.toggleAddDescription} updateCard={this.updateCard} /> : ((card.description) ?
                                <div className="description show">{card.description} <button className="edit-btn" onClick={this.toggleAddDescription}>edit</button></div> :
                                <div className="show description" onClick={this.toggleAddDescription}>add a more detailed description...</div>)}
                            <p>{card.description && ''}</p>
                            <div>{isChecklists && <div><CardChecklistShow checklists={card.checklists} card={card} updateCard={this.updateCard} /></div>}</div>
                        </main>
                        <CardEditNav card={card} toggleLabelPalette={this.toggleLabelPalette} toggleChecklistBar={this.toggleChecklistBar} toggleCoverBar={this.toggleCoverBar} />
                    </div>


                    {this.state.isLabelPaletteShowing && <LabelPalette card={card} updateCard={this.updateCard} toggleLabelPalette={this.toggleLabelPalette} />}
                    {this.state.isAddChecklistShowing && <AddChecklistBar card={card} updateCard={this.updateCard} toggleChecklistBar={this.toggleChecklistBar} />}
                    {this.state.isCoverShowing && <AddCoverBar card={card} updateCard={this.updateCard} toggleCoverBar={this.toggleCoverBar} />}
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBoard: state.boardModule.selectedBoard

    }
}
const mapDispatchToProps = {
    loadBoard
}

export const CardEdit = connect(mapStateToProps, mapDispatchToProps)(_CardEdit)
