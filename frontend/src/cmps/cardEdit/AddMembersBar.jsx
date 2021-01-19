import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'

class _AddMembersBar extends Component {
    state = {
        member: { fullname: '' }
    }



    handleChange = (ev) => {
        const member = { ...this.state.member }
        member[ev.target.name] = ev.target.value

        this.setState({ member })
    }

    onAddMembers = (ev) => {
        ev.preventDefault()
        const { card, users } = this.props
        const cardToSave = { ...card }
        const userToRemove = card.members.find((currUser) => {
            return currUser.fullname === this.state.member.fullname
        })
        if (userToRemove) {
            // const newMembers = card.members?.filter(currUser => currUser.fullname !== this.state.member.fullname)
            // cardToSave.members = newMembers
            this.setState({ member: { fullname: '' } })
            return
        } else {
            const user = users.find(currUser => currUser.fullname === this.state.member.fullname)
            const miniUser = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl }
            cardToSave.members = (cardToSave.members) ? [...cardToSave.members, miniUser] : [miniUser]
        }
        // console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
        this.setState({ member: { fullname: '' } })
        // this.props.toggleAddMembers()
    }

    render() {
        const { toggleAddMembers, users, card } = this.props

        return (

            <form className="add-members-bar edit-bar" onSubmit={this.onAddMembers}>
                <header className="seconde">
                    <h3>Add Members</h3>
                    <button onClick={toggleAddMembers}>x</button>

                </header>
                <main>
                    <label>Members
                    <input list="members" name="fullname" value={this.state.member.fullname}
                            onChange={this.handleChange} autoFocus autoComplete="off" ></input>
                    </label>
                    <datalist id="members">
                        {users.map(user => {
                            const alreadyMember = (card.members?.find(currUser => currUser.fullname === user.fullname)) ? 'alreadyMember' : ''
                            return <option className={alreadyMember} key={user._id} value={user.fullname}> </option>
                        })}
                    </datalist>
                    <button className="add-btn">Add</button>
                </main>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {

}

export const AddMembersBar = connect(mapStateToProps, mapDispatchToProps)(_AddMembersBar)
