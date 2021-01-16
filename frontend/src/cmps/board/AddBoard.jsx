import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createBoard } from '../../store/actions/boardActions.js'

export class _AddBoard extends Component {

    state = {
        title: '',
        bgurl: ''

    }

    componentDidMount() {

    }

    handleChange = (ev) => {
        const value = ev.target.value
        const field = ev.target.name
        this.setState({ [field]: value })
    }

    onChooseBackground = ( bgUrl) => {
       
        this.setState({ bgurl: bgUrl })
    }

    onSubmit = async (ev) => {
        ev.preventDefault()
        if (!this.state.title) return
        const board = await this.props.createBoard(this.state.title, this.state.bgurl)
        this.props.onLoadNewBoard(board._id)

    }

    onCancelAdd = (ev) => {
        ev.preventDefault()
        this.props.toggleNewBoard()
    }

    render() {
        const backgroundImages = [
            {
                id: 'bg101',
                bgurl: "https://cdn.pixabay.com/photo/2020/04/11/18/24/star-5031540_1280.jpg"
            },
            {
                id: 'bg102',
                bgurl: "https://cdn.pixabay.com/photo/2016/11/29/08/00/abstract-1868269_1280.jpg"
            },
            {
                id: 'bg103',
                bgurl: "https://cdn.pixabay.com/photo/2019/03/23/20/54/bamboo-4076262_1280.jpg"
            }
        ]
        return (
            <div className="add-board">
                <form onSubmit={this.onSubmit} >
                    <input placeholder="Enter a title for this board..." type="text" onChange={this.handleChange} value={this.state.title} name="title" autoComplete="off" />
                    <section className="add-board-backgrounds">
                        {backgroundImages.map(background => {
                            return <div key={background.id}
                                style={{
                                    backgroundImage: "url(" + `${background.bgurl}` + ")",
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    width: "100px", 
                                    height:"100px"
                                }}
                                onClick={() => this.onChooseBackground( background.bgurl)}></div>
                        })}
                    </section>
                    <button className="save-btn">Add Board</button>
                    <button className="cancel-btn" onClick={this.onCancelAdd}>Cancel</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {
    createBoard

};

export const AddBoard = connect(mapStateToProps, mapDispatchToProps)(_AddBoard);