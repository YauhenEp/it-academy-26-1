// const {expect} = require('chai');
// const {calculateSquare, filterUser} = require('../feature')
import {expect} from "chai"
import {calculateSquare, getPromise} from "../feature.js"

describe('Our first test suite', function() {
    const ssa1 = [
        {name: "a", width: "10", height: "12"},
        {name: "b", width: "12", height: "14"},
        {name: "c", width: "15", height: "11"},
        {name: "d", width: "16", height: "12"},
        {name: "e", width: "19", height: "14"},
    ]

    const obj = [
        {string: 'fall', substr: 'fa'},
        {string: 'spring', substr: 'ing'},
        {string: 'autumn', substr: 'tu'}
    ]

    const testData = [
        {value: 'Success', timeout: 300},
        {value: 'Not', timeout: 250},
        {value: 'Hello', timeout: 250}
    ]

    before(async () => {
        console.log('I am running before all tests');
    })

    beforeEach(async () => {
        console.log('I am running before EACH test');
    })

    after(async () => {
        console.log('I am running after all tests');
    })

    afterEach(async () => {
        console.log('I am running after EACH test');
    })

    it('true should be equal true', async () => {
        console.log('I am test')
        expect(true).to.equal(true)
    })

    it('should be key square in new objects', async() => {
        const newArr = calculateSquare(ssa1)
        for(let ssa of newArr) {
            expect(ssa).to.have.nested.deep.keys('name', 'square')
        }
    })

    it('should be the same length', async () => {
        const newArr = calculateSquare(ssa1)
        expect(ssa1.length).to.equal(newArr.length)
    })

    testData.forEach(({value, timeout} = obj) => {
        it(`should return promise after ${timeout} ms`, async () => {
            const result = await getPromise(value, timeout)
            expect(result).to.equal(value)
        })
    })

    obj.forEach((obj) => {
        it(`string ${obj.string} should contain substring ${obj.substr}`, async() => {
            expect(obj.string).to.contain(obj.substr)
        })
    })
})