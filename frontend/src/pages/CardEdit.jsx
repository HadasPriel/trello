import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { socketService } from '../services/socketService'
import { loadBoard } from '../store/actions/boardActions.js'
import { CardEditNav } from '../cmps/cardEdit/CardEditNav'
import { LabelPalette } from '../cmps/cardEdit/LabelPalette'
import { AddChecklistBar } from '../cmps/cardEdit/AddChecklistBar'
import { CardLabelShow } from '../cmps/cardEdit/CardLabelShow'
import { CardChecklistShow } from '../cmps/cardEdit/CardChecklistShow'

class _CardEdit extends Component {
    state = {
        board: null,
        groupId: null,
        card: null,
        isLabelPaletteShowing: false,
        isAddChecklistShowing: false
    }

    async componentDidMount() {
        const boardId = this.props.match.params.id
        const groupId = 'g101' //todo: change to props
        const cardId = this.props.match.params.cardId
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
        const group = boardToSave.groups.find(group => group.id === this.state.groupId)
        const groupsToSave = group.cards.map(card => {
            if (card.id === cardToSave.id) return cardToSave
            else return card
        })
        boardToSave.groups = groupsToSave
        console.log('boardToSave', boardToSave)


    }

    toggleLabelPalette = () => {
        this.setState({ isLabelPaletteShowing: !this.state.isLabelPaletteShowing })
    }
    toggleChecklistBar = () => {
        this.setState({ isAddChecklistShowing: !this.state.isAddChecklistShowing })
    }

    addChecklist = () => {

    }


    render() {
        const { card } = this.state
        if (!card) return <div>Loading...</div>
        return (
            <section className="card-edit">
                <main>
                    <h1>{card.title}</h1>
                    <div>{card.labels && <div> <h3>Labels: </h3><CardLabelShow labels={card.labels} card={card} updateCard={this.updateCard} /></div>}</div>
                    <h3>Description: </h3>
                    <p>{card.description && ''}</p>
                    {/* <div>{card.checklists && <div> <h3>Checklists: </h3><CardChecklistShow checklists={card.checklists} card={card} updateCard={this.updateCard} /></div>}</div> */}
                </main>
                <CardEditNav card={card} toggleLabelPalette={this.toggleLabelPalette} toggleChecklistBar={this.toggleChecklistBar} />
                {this.state.isLabelPaletteShowing && <LabelPalette card={card} updateCard={this.updateCard} />}
                {this.state.isAddChecklistShowing && <AddChecklistBar card={card} updateCard={this.updateCard} />}
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
}

export const CardEdit = connect(mapStateToProps, mapDispatchToProps)(_CardEdit)





{/* <aside className="card-details-sidebar" ref={this.ref}>
<CardSidebar anchorRef={this.ref} 
addActivity={this.createActivity} 
isUploading={this.state.isUploading} 
toggleCoverSelector={this.toggleCoverSelector} 
toggleUploadDropzone={this.toggleUploadDropzone} 
toggleDisplayMembers={this.toggleDisplayMembers} 
dueDate={card.dueDate} 
toggleLabelPallete={this.toggleLabelPalette} 
onUpdateDueDate={this.onUpdateDueDate} 
onArchiveCard={this.onArchiveCard} 
onUpdateChecklists={this.onUpdateChecklists} />
</aside> */}