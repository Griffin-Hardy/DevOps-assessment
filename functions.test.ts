const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test ("shuffleArray should return an array the same length as the argument", () => {
        expect(shuffleArray([1, 2, 3])).toHaveLength(3)
    })
})