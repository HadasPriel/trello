import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'

class _AddCoverBar extends Component {
    state = {
    }

    componentDidMount() {
    }


    addCover = (bgColor) => {
        const cardToSave = { ...this.props.card }
        cardToSave.style = (cardToSave.style) ? { ...cardToSave.style, bgColor } : { bgColor }
        console.log('cardToSave', cardToSave);
        // this.props.updateCard(cardToSave)
    }



    render() {

        return (
            <form>
                <label>Full
                <input type="radio" name="coverType" value="full"></input>
                </label>
                <label>Top
                <input type="radio" name="coverType" value="top"></input>
                </label>
                <ul>
                    <li key="#61BD4F" onClick={() => { this.addCover("#61BD4F") }} className="#61BD4F">61BD4F</li>
                    <li key="#F2D600" onClick={() => { this.addCover("#F2D600") }} className="#F2D600">F2D600</li>
                    <li key="#FF9F1A" onClick={() => { this.addCover("#FF9F1A") }} className="#FF9F1A">FF9F1A</li>
                    <li key="#EB5A46" onClick={() => { this.addCover("#EB5A46") }} className="#EB5A46">EB5A46</li>
                    <li key="#C377E0" onClick={() => { this.addCover("#C377E0") }} className="#C377E0">C377E0</li>
                    <li key="#0079BF" onClick={() => { this.addCover("#0079BF") }} className="#0079BF">0079BF</li>
                </ul>
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

export const AddCoverBar = connect(mapStateToProps, mapDispatchToProps)(_AddCoverBar)
