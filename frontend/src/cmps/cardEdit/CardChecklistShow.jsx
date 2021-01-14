// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// // import { socketService } from '../services/socketService'

// class _CardChecklistShow extends Component {
//     state = {
//         task: { txt: '', isDone: false }
//     }

//     removeChecklist = (labelId) => {
//         // const labelsToSave = this.props.labels.filter(label => label.id !== labelId)
//         const cardToSave = { ...this.props.card }
//         cardToSave.labels.filter(label => label.id !== labelId)
//         console.log('cardToSave', cardToSave);
//         this.props.updateCard(cardToSave)
//     }

//     handleChange = (ev) => {
//         const item = { ...this.state.task }
//         checklist[ev.target.name] = ev.target.value

//         this.setState({ item })
//     }

//     addTask = (ev) => {
//         ev.preventDefault()

//         // const checklist = { id: utilService.makeId(), title: this.state.checklist.title }
//         // const cardToSave = { ...this.props.card }
//         // cardToSave.checklists = (cardToSave.checklists) ? [...cardToSave.checklists, checklist] : [checklist]
//         // // console.log('cardToSave', cardToSave);
//         // this.props.updateCard(cardToSave)
//     }

//     render() {
//         return (
//             <ul>
//                 {this.props.checklists.map(checklist => {
//                     return (
//                         <li key={checklist.id} >
//                             <h4>{checklist.title}</h4>
//                             <button onClick={() => { this.removeChecklist(checklist.id) }}>X</button>
//                             <form onSubmit={this.addTask}>
//                                 <input type="text" name="txt" value={this.state.task.txt}
//                                     onChange={this.handleChange} placeholder="Add an item" autoComplete="off"></input>
//                                 <button>Add</button>
//                             </form>
//                         </li>

//                     )
//                 })}
//             </ul>
//         )
//     }

// }

// const mapStateToProps = state => {
//     return {
//     }
// }
// const mapDispatchToProps = {
// }

// export const CardChecklistShow = connect(mapStateToProps, mapDispatchToProps)(_CardChecklistShow)
