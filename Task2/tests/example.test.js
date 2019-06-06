const example = require('../example')

test('basic', () => {
  const result = example([])
  expect(result).toMatchObject([])
})
