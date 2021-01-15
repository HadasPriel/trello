import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'
import { loadBoard, updateBoard } from '../store/actions/boardActions.js'
import { CardEditNav } from '../cmps/cardEdit/CardEditNav'
import { LabelPalette } from '../cmps/cardEdit/LabelPalette'
import { AddChecklistBar } from '../cmps/cardEdit/AddChecklistBar'
import { AddCoverBar } from '../cmps/cardEdit/AddCoverBar'
import { CardLabelShow } from '../cmps/cardEdit/CardLabelShow'
import { CardChecklistShow } from '../cmps/cardEdit/CardChecklistShow'

class _CardEdit extends Component {
    state = {
        board: null,
        groupId: null,
        card: null,
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


    render() {
        const { card } = this.state
        const isLabels = (card && card.labels && card.labels.length > 0)
        const isChecklists = (card && card.checklists && card.checklists.length > 0)
        if (!card) return <div>Loading...</div>
        return (
            <section className="card-edit">
                {/* <Link to={`/board/${this.props.selectedBoard.id}`}>X</Link> */}
                <div className="permanent">
                    <main>
                        <h1>{card.title}</h1>
                        <div>{isLabels && <div> <h3>Labels: </h3><CardLabelShow labels={card.labels} card={card} updateCard={this.updateCard} /></div>}</div>
                        <h3>Description: </h3>
                        <p>{card.description && ''}</p>
                        <div>{isChecklists && <div> <h3>Checklists: </h3><CardChecklistShow checklists={card.checklists} card={card} updateCard={this.updateCard} /></div>}</div>
                    </main>
                    <CardEditNav card={card} toggleLabelPalette={this.toggleLabelPalette} toggleChecklistBar={this.toggleChecklistBar} toggleCoverBar={this.toggleCoverBar} />
                </div>
                {this.state.isLabelPaletteShowing && <LabelPalette card={card} updateCard={this.updateCard} />}
                {this.state.isAddChecklistShowing && <AddChecklistBar card={card} updateCard={this.updateCard} />}
                {this.state.isCoverShowing && <AddCoverBar card={card} updateCard={this.updateCard} />}
            </section>
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
    // updateBoard
}

export const CardEdit = connect(mapStateToProps, mapDispatchToProps)(_CardEdit)
