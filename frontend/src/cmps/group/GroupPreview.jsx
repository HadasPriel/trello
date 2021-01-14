import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeGroup } from '../../store/actions/boardActions.js'
import { EditGroupTitle } from './EditGroupTitle'
import { CardList } from '../card/CardList'
import { AddCard } from './AddCard.jsx';


export class _GroupPreview extends Component {

    state = {
        isOnAddCardMode: false,
        isEditMode: false,
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



    render() {
        const { isEditMode, isOnAddCardMode } = this.state
        const { group } = this.props
        return (
            <article className="group-preview">
                <div className="group-wraper">
                    {(!isEditMode) ? <p onClick={this.toggleEditMode}>{group.title} </p> : <EditGroupTitle group={group} toggleEditMode={this.toggleEditMode} />}
                    <button onClick={() => this.onRemoveGroup(group.id)}>X</button>
                    {group.cards && <CardList groupId={group.id} cards={group.cards} />}
                    {(!isOnAddCardMode) ? <p onClick={this.toggleAddCardMode}>Add new Card</p> : <AddCard group={group} toggleAddCardMode={this.toggleAddCardMode} />}
                </div>
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
    removeGroup,

};

export const GroupPreview = connect(mapStateToProps, mapDispatchToProps)(_GroupPreview);
