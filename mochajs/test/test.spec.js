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
        expect(true).to.equal(false)
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

    each([
        {value: 'Success', timeout: 300},
        {value: 'Not', timeout: 250},
        {value: 'Hello', timeout: 250}
    ]).it('should return promise after 3 seconds', async ({value, timeout}) => {
        const result = await getPromise(value, timeout)
        expect(result).to.equal(value)
    })
})