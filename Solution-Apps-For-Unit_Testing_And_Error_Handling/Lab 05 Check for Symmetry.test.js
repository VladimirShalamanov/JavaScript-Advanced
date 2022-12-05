const { expect } = require('chai');
const { isSymmetric } = require("../13 Unit Testing and Error Handling - Lab/05. Check for Symmetry");

describe('isSymmetric', () => {

    it('return correct Array', () => {
        let array = 'not array';
        let resFalse = isSymmetric(array);
        expect(resFalse).to.be.false;
    });

    it('return correct Symmetric Array', () => {
        let array = ['1', '2', '3', '2', '4'];
        let resFalse = isSymmetric(array);
        expect(resFalse).to.be.false;
    });

    it('return correct Array', () => {
        let array = ['1', '2', '3', '2', '1'];
        let resTrue = isSymmetric(array);
        expect(resTrue).to.be.true;
    });

    it("should return false for [-1,2,1]", function () {
        expect(isSymmetric([-1, 2, 1])).to.be.equal(false);
    });

    it("should return true for [1]", function () {
        expect(isSymmetric([1])).to.be.equal(true);
    });

    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.be.equal(true);
    });

    //-----------------------

    // it("should return false for [1,2,3,4,2,1]", function () {
    //     expect(isSymmetric([1,2,3,4,2,1])).to.be.equal(false);
    // });

    // it("should return false for [-1,2,1]", function () {
    //     expect(isSymmetric([-1,2,1])).to.be.equal(false);
    // });

    // it("should return true for [1]", function () {
    //     expect(isSymmetric([1])).to.be.equal(true);
    // });
    // it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
    //     expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.equal(true);
    // });

    // it("should return false for 1,2,2,1", function () {
    //     expect (isSymmetric(1,2,2,1)).to.be.equal(false);
    // });
});