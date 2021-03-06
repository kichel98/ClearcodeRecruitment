/**
 * Main function, change board to meet the requirements of riddle
 * @param {Number[][]} board - board of integers
 */
const riddleSolver = board => {
  let removed = false 
  do { 
    removed = removeAdjacent(board)
    dropIntegers(board)
  } while(removed);
  return board;
}
/**
 * If there are three or more of the same integers adjacent vertically or
 * horizontally, remove them from the board, changing their value to 0.
 * @param {Number[][]} board - board of integers
 */
const removeAdjacent = board => {
  let removed = false

  // removing for rows
  board.forEach(row => {
    const {removedResponse} = removeAdjacentInArray(row)
    if (removedResponse === true)
      removed = true
  })

  // removing for columns
  for(let i = 0; i < board[0].length; i++) {
    let column = board.map(row => row[i]) 
    let {array, removedResponse}  = removeAdjacentInArray(column) 
    if (removedResponse === true)
      removed = true

    // to removeAdjacentInArray we pass copy (from map), so we need to insert returned array to our board
    board.forEach((row, idx) => { 
      row[i] = array[idx]
    })
  }
  return removed
}

/**
 * @typedef {Object} RemoveAdjacentResponse
 * @property {Number[]} array - row or column
 * @property {Boolean} removedResponse - true if array has been changed, false otherwise
 */

/**
 * Remove adjacent integers from one-dimensional array.
 * @param {Number[]} array - row or column
 * @returns {RemoveAdjacentResponse} object with array from arguments and removed info
 */
const removeAdjacentInArray = array => {
  let removed = false
  let count = 0 // how many integers of the same type in row
  let prevNumber = -1 // value of previous integer
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

/**
 * Allows jewels to "drop" if there is an empty place above them.
 * @param {Number[]} array - row or column 
 */
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