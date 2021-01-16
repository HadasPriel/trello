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


export async function updateBoard(board) {
  try {

    await boardService.updateBoard(board)
  } catch (err) {
    console.log('BoardActions: err in update board', err)
  }
}


export function addGroup(title, boardToChange) {
  return async dispatch => {
    try {

      let groupToAdd = boardService.makeGroup(title)

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      boardToUpdate.groups.push(groupToAdd)

      const board = await boardService.updateBoard(boardToUpdate)

      dispatch({ type: 'SET_BOARD', board })


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

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      const groupToUpdateIdx = boardToUpdate.groups.findIndex(group => group.id === groupId)

      boardToUpdate.groups[groupToUpdateIdx].cards.push(newCard)

      const board = await boardService.updateBoard(boardToUpdate)

      dispatch({ type: 'SET_BOARD', board })


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


export function updateBoardAfterDrag(boardToChange) {
  return async dispatch => {
    try {

      let boardToUpdate = JSON.parse(JSON.stringify(boardToChange))

      const board = await boardService.updateBoard(boardToUpdate)

      dispatch({ type: 'SET_BOARD', board })


    } catch (err) {
      console.log('BoardActions: err in updateGroupOrder', err)
    }
  }

}

