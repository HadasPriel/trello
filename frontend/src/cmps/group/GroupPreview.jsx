import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeGroup } from '../../store/actions/boardActions.js'
import { EditGroupTitle } from './EditGroupTitle'
import { CardList } from '../card/CardList'
import { AddCard } from './AddCard.jsx'
import { Draggable } from 'react-beautiful-dnd'
import { EditGroupNav } from './EditGroupNav'


export class _GroupPreview extends Component {

    state = {
        isOnAddCardMode: false,
        isEditMode: false,
        isEditGroupNavShow: false,
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
    toggleEditGroupNav = () => {
        this.setState({ isEditGroupNavShow: !this.state.isEditGroupNavShow })
    }

    // toggleAddGroupMode = () => {

    //     this.setState({ isOnAddGroupMode: !this.state.isOnAddGroupMode })
    // }



    render() {
        const { isEditMode, isOnAddCardMode, isEditGroupNavShow } = this.state
        const { group } = this.props
        return (
            <Draggable draggableId={group.id} index={this.props.index}>
                {(provided) => {
                    return (
                        <li className="group" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            <article className="group-preview">
                                <div className="group-wraper" >
                                    <header>
                                        {(!isEditMode) ? <p onClick={this.toggleEditMode}>{group.title} </p> : <EditGroupTitle group={group} toggleEditMode={this.toggleEditMode} />}
                                        <button className="menu-group" onClick={() => this.toggleEditGroupNav(group.id)}></button>
                                        {isEditGroupNavShow && <EditGroupNav group={group} onRemoveGroup={this.onRemoveGroup} />}
                                    </header>
                                    <main>
                                        {group.cards && <CardList groupId={group.id} cards={group.cards} />}
                                        {(!isOnAddCardMode) ? <p className="add-another-card" onClick={this.toggleAddCardMode}> Add another card</p> : <AddCard group={group} toggleAddCardMode={this.toggleAddCardMode} />}
                                    </main>
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
