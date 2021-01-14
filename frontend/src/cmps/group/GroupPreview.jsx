import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeGroup } from '../../store/actions/boardActions.js'
import { EditGroupTitle } from './EditGroupTitle'
import { CardList } from '../card/CardList'


export class _GroupPreview extends Component {

    state = {
        isEditMode: true,
        title: ''
    }

    componentDidMount() {

    }

    onRemoveGroup = (groupId) => {
        console.log('this will be removed', groupId)
        this.props.removeGroup(groupId, this.props.selectedBoard)
    }

    toggleEditMode = () => {

        this.setState({ isEditMode: !this.state.isEditMode })


    }


    render() {
        const { isEditMode } = this.state
        const { group } = this.props
        return (
            <article className="group-preview">
                <div className="group-wraper">
                    {(isEditMode) ? <p onClick={this.toggleEditMode}>{group.title} </p> : <EditGroupTitle group={group} toggleEditMode={this.toggleEditMode} />}
                    <button onClick={() => this.onRemoveGroup(group.id)}>X</button>
                    {group.cards && <CardList groupId={group.id} cards={group.cards} />}
                    <p>Add new Card</p>
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
