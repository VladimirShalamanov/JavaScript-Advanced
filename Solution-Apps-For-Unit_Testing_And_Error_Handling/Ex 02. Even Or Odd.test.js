const { expect } = require('chai');
const { isOddOrEven } = require("../14 Unit Testing and Error Handling - Exercise/02. Even Or Odd");

describe('isOddOrEven', () => {
    it('get number', () => {
        expect(isOddOrEven(3.4)).to.be.undefined;
    })
    it('get obj', () => {
        expect(isOddOrEven({ 2: 28, 'Petko': [2, 3] })).to.be.undefined;
    })
    it('get array', () => {
        expect(isOddOrEven([6, 9, 23])).to.be.undefined;
    })
    it('even str', () => {
        expect(isOddOrEven('Nemo')).to.equal('even');
    })
    it('odd str', () => {
        expect(isOddOrEven('Mouse')).to.equal('odd');
    })
    it('multiple str', () => {
        let arr = ['Riko', 'Baba', 'Dqdo', 'Papa'];
        for (const a of arr) {
            expect(isOddOrEven(a)).to.equal('even');
        }
    })
})