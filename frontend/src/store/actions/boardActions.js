import { boardService } from '../../services/boardService'


export function loadBoards() {
  return async dispatch => {
    try {
      const boards = await boardService.query()
      dispatch({ type: 'SET_BOARDS', boards })

    } catch (err) {
      console.log('ReviewActions: err in loadReviews', err)
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
