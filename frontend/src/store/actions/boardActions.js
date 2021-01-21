import { boardService } from '../../services/boardService'
import { socketService } from '../../services/socketService'

export function loadBoards(filterBy = {}) {
  return async dispatch => {
    try {
      const boards = await boardService.query(filterBy)
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
      // console.log('What got form server', board)
      dispatch({ type: 'SET_BOARD', board })

    } catch (err) {
      console.log('BoardActions: err in loadBoard', err)
    }
  }
}

export function createBoard(boardTitle, backgroundImageUrl) {
  return async dispatch => {
    try {
      const board = await boardService.makeBoard(boardTitle, backgroundImageUrl)

      dispatch({ type: 'SET_BOARD', board })
      return board
    } catch (err) {
      console.log('BoardActions: err in loadBoard', err)
    }
  }
}



export function addGroup(title, boardToChange) {
  return async dispatch => {
    try {

      let groupToAdd = boardService.makeGroup(title)

      let activity = await boardService.makeActivity(`created new list ${groupToAdd.title}`)

      console.log('Add group checking activity', activity)

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      boardToUpdate.groups.push(groupToAdd)

      boardToUpdate.activities.unshift(activity)

      const board = await boardService.updateBoard(boardToUpdate)

      socketService.emit('update board', board)

      // dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in addGroup', err)
    }
  }
}

export function removeGroup(groupId, boardToChange) {
  return async dispatch => {
    try {

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      const updatedGroups = boardToUpdate.groups.filter(group => group.id !== groupId)

      boardToUpdate.groups = updatedGroups

      console.log(boardToUpdate)

      const board = await boardService.updateBoard(boardToUpdate)

      dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in removeGroup', err)
    }
  }
}


export function updateGroup(groupTitleToUpdate, groupId, boardToChange) {
  return async dispatch => {
    try {

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      const groupToUpdateIdx = boardToUpdate.groups.findIndex(group => group.id === groupId)

      boardToUpdate.groups[groupToUpdateIdx].title = groupTitleToUpdate

      const board = await boardService.updateBoard(boardToUpdate)

      dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in updateGroup', err)
    }
  }
}



export function addCard(title, groupId, boardToChange) {
  return async dispatch => {
    try {


      let newCard = boardService.makeCard(title)

      let activity = await boardService.makeActivity(`created new card ${newCard.title}`)

      console.log('Add card checking activity', activity)

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      const groupToUpdateIdx = boardToUpdate.groups.findIndex(group => group.id === groupId)

      boardToUpdate.groups[groupToUpdateIdx].cards.push(newCard)

      boardToUpdate.activities.unshift(activity)

      const board = await boardService.updateBoard(boardToUpdate)

      socketService.emit('update board', board)

      // dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in addCard', err)
    }
  }
}



export function removeCard(cardId, groupId, boardToChange) {
  return async dispatch => {
    try {

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      const groupToUpdateIdx = boardToUpdate.groups.findIndex(group => group.id === groupId)

      const updatedCardList = boardToUpdate.groups[groupToUpdateIdx].cards.filter(card => card.id !== cardId)

      boardToUpdate.groups[groupToUpdateIdx].cards = updatedCardList

      const board = await boardService.updateBoard(boardToUpdate)

      dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in removeGroup', err)
    }
  }
}


export function updateBoard(boardToChange) {
  return async dispatch => {
    try {

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      const board = await boardService.updateBoard(boardToUpdate)

      socketService.emit('update board', board)

      // dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in updateGroupOrder', err)
    }
  }

}

export function filterByCardText(boardId, filterBy) {
  return async dispatch => {
    try {
      const boardToFilter = await boardService.getById(boardId)

      const board = await boardService.filterByCardTitle(boardToFilter, filterBy)

      dispatch({ type: 'SET_BOARD', board })
      dispatch({ type: 'SET_FILTER', filterBy })

    } catch (err) {
      console.log('BoardActions: err in updateGroupOrder', err)
    }
  }

}


export function updateBoardAfterSocket(changedBoard) {
  return async dispatch => {
    try {

      let board = JSON.parse(JSON.stringify(changedBoard))

      dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in updateBoardAfterSocket', err)
    }
  }

}



// export async function updateBoard(board) {
//   try {

//     await boardService.updateBoard(board)

//   } catch (err) {
//     console.log('BoardActions: err in update board', err)
//   }
// }

// export function updateBoard(newBoard) {
//   return async dispatch => {
//     try {
//       const board = await boardService.updateBoard(newBoard)
//       dispatch({ type: 'SET_BOARD', board })
//     } catch (err) {
//     }
//   }
// }
