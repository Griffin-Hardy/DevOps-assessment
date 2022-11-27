const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test ("shuffleArray should return an array the same length as the argument", () => {
        expect(shuffleArray([1, 2, 3])).toHaveLength(3)
    })

    test('should shuffle array of items', () => {
        let myArray = [1,2,3]
        let result = shuffleArray(myArray)

        expect(result.join()).not.toEqual(myArray.join())
    })

})