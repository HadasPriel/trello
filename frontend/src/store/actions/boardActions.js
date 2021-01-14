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

