const example = require('../example')

test('removing adjacent integers in array', () => {
  const result = example.removeAdjacentInArray([1, 2, 5, 5, 5, 4, 0, 8, 8, 8, 8, 2])
  expect(result).toMatchObject({array: [1, 2, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2], removedResponse: true})
})

test('removing adjacent integers in board', () => {
  const board = [
    [7, 7, 7, 5, 1, 7],
    [1, 8, 1, 1, 1, 4],
    [3, 2, 3, 9, 7, 6],
    [9, 9, 3, 3, 6, 2],
    [1, 9, 3, 1, 8, 7],
    [5, 9, 2, 2, 4, 8]
  ];
  const expected = [
    [0, 0, 0, 5, 1, 7],
    [1, 8, 0, 0, 0, 4],
    [3, 2, 0, 9, 7, 6],
    [9, 0, 0, 3, 6, 2],
    [1, 0, 0, 1, 8, 7],
    [5, 0, 2, 2, 4, 8]
  ];
  example.removeAdjacent(board)
  expect(board).toMatchObject(expected)
})

test('dropping integers in board', () => {
  const board = [
    [0, 0, 0, 5, 1, 7],
    [1, 8, 0, 0, 0, 4],
    [3, 2, 0, 9, 7, 6],
    [9, 0, 0, 3, 6, 2],
    [1, 0, 0, 1, 8, 7],
    [5, 0, 2, 2, 4, 8]
  ];
  const expected = [
    [0, 0, 0, 0, 0, 7],
    [1, 0, 0, 5, 1, 4],
    [3, 0, 0, 9, 7, 6],
    [9, 0, 0, 3, 6, 2],
    [1, 8, 0, 1, 8, 7],
    [5, 2, 2, 2, 4, 8]
  ];
  example.dropIntegers(board)
  expect(board).toMatchObject(expected)
})


test('making whole task', () => {
  const board = [
    [7, 7, 7, 5, 1, 7],
    [1, 8, 1, 1, 1, 4],
    [3, 2, 3, 9, 7, 6],
    [9, 9, 3, 3, 6, 2],
    [1, 9, 3, 1, 8, 7],
    [5, 9, 2, 2, 4, 8]
  ];
  const expected = [
    [0, 0, 0, 0, 0, 7],
    [1, 0, 0, 0, 1, 4],
    [3, 0, 0, 5, 7, 6],
    [9, 0, 0, 9, 6, 2],
    [1, 0, 0, 3, 8, 7],
    [5, 8, 0, 1, 4, 8]
  ];
  const result = example.riddleSolver(board)
  expect(result).toMatchObject(expected)

})
