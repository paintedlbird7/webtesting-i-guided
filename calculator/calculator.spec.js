const { add } = require('./calculator.js');

describe('calculator.js', () => {
    test('run the tests', () => {
        expect(true).toBe(true)
    })
})


describe('add()', ( ) => {
    it('should return the sum of two numbers', () => {
        expect(add(2,2)).toBe(4)
        expect(add(3,2)).toBe(5)

    })
})



it('Should return 0 when called with no arguments', () => {
    expect(add()).toBe(0)
})


it('Should return the value passed when only one argument is present', () => {
expect(add(2)).toBe(2)
expect(add(-1)).toBe(-1)
expect(add(1)).toBe(1)
})

it('Should handle any number of arguments, separated by comma', () => {
    expect(add(1,2,3)).toBe(6)
    expect(add(1,2,3,5)).toBe(11)
})

it('Should handle an array of', () => {
    expect(add([1,2,3])).toBe(6)
    expect(add([1,2,3,5])).toBe(11)
})

// it.todo('Should return 0 when called with no arguments')


// test away!
