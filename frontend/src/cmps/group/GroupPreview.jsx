import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeGroup } from '../../store/actions/boardActions.js'
import { EditGroupTitle } from './EditGroupTitle'
import { CardList } from '../card/CardList'
import { AddCard } from './AddCard.jsx'
import { Draggable } from 'react-beautiful-dnd'


export class _GroupPreview extends Component {

    state = {
        isOnAddCardMode: false,
        isEditMode: false,
        // isOnAddGroupMode: false,
        title: ''
    }

    componentDidMount() {

    }

    onRemoveGroup = (groupId) => {
        // console.log('groupId to remove', groupId)
        this.props.removeGroup(groupId, this.props.selectedBoard)
    }

    toggleEditMode = () => {

        this.setState({ isEditMode: !this.state.isEditMode })
    }
    toggleAddCardMode = () => {

        this.setState({ isOnAddCardMode: !this.state.isOnAddCardMode })
    }

    // toggleAddGroupMode = () => {

    //     this.setState({ isOnAddGroupMode: !this.state.isOnAddGroupMode })
    // }



    render() {
        const { isEditMode, isOnAddCardMode } = this.state
        const { group } = this.props
        return (
            <Draggable draggableId={group.id} index={this.props.index}>
                {(provided) => {
                    return (
                        <li className="group" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <article className="group-preview">
                                <div className="group-wraper" >
                                    {(!isEditMode) ? <p onClick={this.toggleEditMode}>{group.title} </p> : <EditGroupTitle group={group} toggleEditMode={this.toggleEditMode} />}
                                    <button className="delete-group" onClick={() => this.onRemoveGroup(group.id)}></button>
                                    {group.cards && <CardList groupId={group.id} cards={group.cards} />}
                                    {(!isOnAddCardMode) ? <p className="add-another-card" onClick={this.toggleAddCardMode}> Add another card</p> : <AddCard group={group} toggleAddCardMode={this.toggleAddCardMode} />}
                                </div>
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
    removeGroup,

};

export const GroupPreview = connect(mapStateToProps, mapDispatchToProps)(_GroupPreview);
