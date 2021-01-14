import React, { Component } from 'react'
import { connect } from 'react-redux'
import { utilService } from '../../services/utilService.js'

// import { socketService } from '../services/socketService'

class _LabelPalette extends Component {
    state = {
        card: null
    }

    componentDidMount() {
        this.setState({ card: this.props.card })
    }


    addLable = (color) => {
        const lable = { id: utilService.makeId(), title: '', color }
        const cardToSave = { ...this.state.card }
        cardToSave.lables = (cardToSave.lables) ? [...cardToSave.lables, lable] : [lable]
        console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
    }



    render() {

        return (
            <section>
                <ul>
                    <li key="#61BD4F" onClick={() => { this.addLable("#61BD4F") }} className="#61BD4F">61BD4F</li>
                    <li key="#F2D600" onClick={() => { this.addLable("#F2D600") }} className="#F2D600">F2D600</li>
                    <li key="#FF9F1A" onClick={() => { this.addLable("#FF9F1A") }} className="#FF9F1A">FF9F1A</li>
                    <li key="#EB5A46" onClick={() => { this.addLable("#EB5A46") }} className="#EB5A46">EB5A46</li>
                    <li key="#C377E0" onClick={() => { this.addLable("#C377E0") }} className="#C377E0">C377E0</li>
                    <li key="#0079BF" onClick={() => { this.addLable("#0079BF") }} className="#0079BF">0079BF</li>
                </ul>
            </section>

        )
    }
}

const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = {
}

export const LabelPalette = connect(mapStateToProps, mapDispatchToProps)(_LabelPalette)
