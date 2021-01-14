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

