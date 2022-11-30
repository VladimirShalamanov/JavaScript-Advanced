const { expect } = require('chai');
const { mathEnforcer } = require("../14 Unit Testing and Error Handling - Exercise/04. Math Enforcer");

describe('mathEnforcer', function () {
    describe('addFive', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive('5')).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(-14)).to.equal(-9, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(5)).to.equal(10, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5, 'The function did not return the correct result')
        });
    });
    describe('subtractTen', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen('gergi')).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(-20)).to.equal(-30, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(9)).to.equal(-1, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.subtractTen(15.5)).to.equal(5.5, 'The function did not return the correct result')
        });
    });
    describe('sum', function () {
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.sum('gergi', 5)).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a non-number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(8, 'gosho')).to.equal(undefined, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(10, -5)).to.equal(5, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(8, 3)).to.equal(11, 'The function did not return the correct result')
        });
        it('with a number parameter, should return correct result', function () {
            expect(mathEnforcer.sum(8.6, 3.14)).to.equal(11.74, 'The function did not return the correct result')
        });
    });

});