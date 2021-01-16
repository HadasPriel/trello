const initialState = {
  boards: [],
  selectedBoard: {},
  filterBy: {}
}

export function boardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_BOARDS':
      return { ...state, boards: action.boards }
    case 'SET_BOARD':
      return { ...state, selectedBoard: action.board }
    case 'SET_FILTER':
      return { ...state, filterBy: action.filterBy }

    case 'ADD_REVIEW':
      return { ...state, reviews: [...state.reviews, action.review] }
    case 'REMOVE_REVIEW':
      return { ...state, reviews: state.reviews.filter(review => review._id !== action.reviewId) }
    case 'UPDATE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review._id === action.review._id ? action.review : review
        )
      }
    default:
      return state
  }
}
