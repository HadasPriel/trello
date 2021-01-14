import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { socketService } from '../services/socketService'

class _AddCoverBar extends Component {
    state = {
    }

    componentDidMount() {
    }


    handleStyle = (ev) => {
        const cardToSave = { ...this.props.card }
        cardToSave.style = (cardToSave.style) ? { ...cardToSave.style, [ev.target.name]: ev.target.value } : { [ev.target.name]: ev.target.value }
        console.log('cardToSave', cardToSave);
        this.props.updateCard(cardToSave)
    }



    render() {

        return (
            <form className="add-cover-bar">
                <h4>size</h4>
                <label>Full
                <input type="radio" name="coverType" value="full" onClick={this.handleStyle} hidden ></input>
                </label>
                <label>Top
                <input type="radio" name="coverType" value="top" onClick={this.handleStyle} hidden></input>
                </label>

                <h4>colors</h4>
                <nav className="colors">
                    <label className="color #61BD4F">
                        <input type="radio" name="bgColor" value="#61BD4F" onClick={this.handleStyle} hidden></input>
                    </label>
                    <label className="color #F2D600">
                        <input type="radio" name="bgColor" value="#F2D600" onClick={this.handleStyle} hidden></input>
                    </label>
                    <label className="color #FF9F1A">
                        <input type="radio" name="bgColor" value="#FF9F1A" onClick={this.handleStyle} hidden></input>
                    </label>
                    <label className="color #EB5A46">
                        <input type="radio" name="bgColor" value="#EB5A46" onClick={this.handleStyle} hidden></input>
                    </label>
                    <label className="color #C377E0">
                        <input type="radio" name="bgColor" value="#C377E0" onClick={this.handleStyle} hidden></input>
                    </label>
                    <label className="color #0079BF">
                        <input type="radio" name="bgColor" value="#0079BF" onClick={this.handleStyle} hidden></input>
                    </label>
                </nav>
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
