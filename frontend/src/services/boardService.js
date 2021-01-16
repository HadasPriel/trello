

import { httpService } from './httpService'
// import { storageService } from './asyncStorageService'
// import userService from './userService'
import { utilService } from './utilService'

export const boardService = {
  add,
  query,
  remove,
  getById,
  makeGroup,
  updateBoard,
  makeCard
}


// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

function query() {
  return httpService.get(`board`)
  // return storageService.query('board')
}

function getById(boardId) {
  return httpService.get(`board/${boardId}`)
}

function remove(boardId) {
  return httpService.delete(`board/${boardId}`)
  // return storageService.delete('board', boardId)

}

async function updateBoard(board) {
  const updatedBoard = await httpService.put(`board/${board._id}`, board)
  return updatedBoard
}
async function add(board) {
  const addedBoard = await httpService.post(`board`, board)

  // board.byUser = userService.getLoggedinUser()
  // board.aboutUser = await userService.getById(board.aboutUserId)
  // const addedBoard = storageService.post('board', board)

  return addedBoard
}


function makeGroup(groupTitle) {
  let group = {
    id: 'g' + utilService.makeId(),
    title: groupTitle,
    cards: []

  }

  return group

}


function makeCard(cardTitle) {
  let card = {
    id: 'c' + utilService.makeId(),
    title: cardTitle,
    description: '',
    comments: [],
    checklists: [],
    members: [],
    labels: [],
    createdAt: '',
    dueDate: '',
    byMember: {},
    style: { coverType: 'top' }

  }
  return card

}