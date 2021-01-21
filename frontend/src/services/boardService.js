

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
  makeCard,
  makeBoard,
  filterByCardTitle
}


// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

function query(filterBy) {
  let queryParams = new URLSearchParams()
  queryParams.set('userId', filterBy.userId)
  return httpService.get(`board?${queryParams}`)
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
    cards: [{
      id: 'c' + utilService.makeId(),
      title: 'default-empty',
      description: '',
      comments: [],
      checklists: [],
      members: [],
      labels: [],
      createdAt: '',
      dueDate: '',
      byMember: {},
      style: { coverType: 'top' }
    }]

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

async function makeBoard(boardTitle, bgUrl, currUser = null) {

  let miniUser = (currUser) ? currUser : { _id: "6004748cf9fd65ff47dc81e4", username: "Avi", imgUrl: 'http://some-img' }

  const newBoard = {
    title: boardTitle,
    createdAt: Date.now(),
    createdBy: miniUser,
    style: {
      bgurl: bgUrl
    },
    members: [miniUser],
    groups: [makeGroup('New List')],
    activities: []
  }

  console.log(newBoard);

  const addedBoard = await httpService.post(`board`, newBoard);
  return addedBoard

}


async function filterByCardTitle(board, filterBy) {
  if (filterBy.title) {
    const filterRegex = new RegExp(filterBy.title, 'i')
    board.groups = board.groups.map(group => {
      const newGroup = { ...group }
      newGroup.cards = newGroup.cards.filter(card => filterRegex.test(card.title))
      return newGroup
    })
  }

  return board;

}