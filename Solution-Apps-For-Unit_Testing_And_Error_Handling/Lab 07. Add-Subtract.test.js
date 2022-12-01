const { expect } = require('chai');
const { createCalculator } = require("../13 Unit Testing and Error Handling - Lab/07. Add-Subtract");

describe('createCalculator', () => {
    let calc;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('start value should be 0', () => {
        expect(calc.get()).to.be.equal(0);
    });

    it('add function', () => {
        calc.add(4);
        calc.add(3);

        expect(calc.get()).to.be.equal(7);
    });

    it('negative value', () => {
        calc.subtract(3);
        calc.subtract(5);

        expect(calc.get()).to.be.equal(-8);
    });

    it('work with double value', () => {
        calc.add(7.4);
        calc.subtract(2.5);
        let sum = 7.4 - 2.5;
        expect(calc.get()).to.be.equal(sum);
    });

    it('multiple any calculations', () => {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        expect(calc.get()).to.be.equal(2);
    });

    it('add string and return NaN', () => {
        calc.add('Pesho');
        expect(calc.get()).to.be.NaN;
    });

    it('add subtract and return NaN', () => {
        calc.subtract('Patkan');
        expect(calc.get()).to.be.NaN;
    });
});