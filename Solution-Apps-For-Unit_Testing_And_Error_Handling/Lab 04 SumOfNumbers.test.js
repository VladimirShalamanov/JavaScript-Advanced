const { expect } = require('chai');
const { sum } = require("../13 Unit Testing and Error Handling - Lab/04. Sum of Numbers");

describe('sum', () => {
    it('return correct result of numbers', () =>{
        let array = ['1', '2', '3'];
        let result = sum(array);
        expect(result).to.be.equal(6);
    });
});