import { boardService } from '../../services/boardService'


export function loadBoards() {
  return async dispatch => {
    try {
      const boards = await boardService.query()
      dispatch({ type: 'SET_BOARDS', boards })

    } catch (err) {
      console.log('BoardActions: err in loadBoards', err)
    }
  }
}



export function loadBoard(id) {
  return async dispatch => {
    try {
      const board = await boardService.getById(id)
      console.log('What got form server', board)
      dispatch({ type: 'SET_BOARD', board })

    } catch (err) {
      console.log('BoardActions: err in loadBoard', err)
    }
  }
}


export function addGroup (title, board){
  return async dispatch =>{
    try {
      let groupToAdd = boardService.makeGroup(title)
      let boardToUpdate = JSON.parse(JSON.stringify(board))
      boardToUpdate.groups.push(groupToAdd)
      const updatedBoard = await boardService.updateBoard(boardToUpdate)
      console.log('Updated board from addGroup', updatedBoard)
      dispatch({ type: 'SET_BOARD', updatedBoard })


    }catch (err) {
      console.log('BoardActions: err in loadBoard', err)
    }
  }
}
// export function addReview(review) {
//   return async dispatch => {
//     try {
//       const addedReview = await reviewService.add(review)
//       dispatch({ type: 'ADD_REVIEW', review: addedReview })

//       const score = await userService.increaseScore()
//       dispatch({ type: 'SET_SCORE', score })

//     } catch (err) {
//       console.log('ReviewActions: err in addReview', err)
//     }
//   }
// }

// export function removeReview(reviewId) {
//   return async dispatch => {
//     try {
//       await reviewService.remove(reviewId)
//       dispatch({ type: 'REMOVE_REVIEW', reviewId })
//     } catch (err) {
//       console.log('ReviewActions: err in removeReview', err)
//     }
//   }
// }
