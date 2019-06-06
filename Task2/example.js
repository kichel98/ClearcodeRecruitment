const riddleSolver = board => {
  let removed = false
  do {
    removed = removeAdjacent(board)
    dropIntegers(board)
  } while(removed);
  return board;
}

const removeAdjacent = board => {
  let removed = false
  board.forEach(row => {
    const {array, removedResponse} = removeAdjacentInArray(row)
    if (removedResponse === true)
      removed = true
  })
  for(let i = 0; i < board[0].length; i++) {
    let column = board.map(row => row[i])
    let {array, removedResponse}  = removeAdjacentInArray(column)
    if (removedResponse === true)
      removed = true
    board.forEach((row, idx) => {
      row[i] = array[idx]
    })
  }
  return removed
}

const removeAdjacentInArray = array => {
  let removed = false
  let count = 0
  let prevNumber = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === prevNumber && array[i] !== 0) {
      count++
      if (count === 3) {
        removed = true
        array[i - 2] = 0
        array[i - 1] = 0
        array[i] = 0
      } else if (count > 3) {
        array[i] = 0
      }
    } else {
      count = 1
      prevNumber = array[i]
    }
  }
  return {array: array, removedResponse: removed}
}

const dropIntegers = board => {
  for(let i = 0; i < board[0].length; i++) {
    const column = board.map(row => row[i])
    column.sort((a, b) => {
      if(a === 0)
        return -1
      if(b === 0)
        return 1
      else
        return 0
    })
    board.forEach((row, idx) => {
      row[i] = column[idx]
    })
  }
}

module.exports.removeAdjacentInArray = removeAdjacentInArray
module.exports.removeAdjacent = removeAdjacent
module.exports.dropIntegers = dropIntegers
module.exports.riddleSolver = riddleSolver