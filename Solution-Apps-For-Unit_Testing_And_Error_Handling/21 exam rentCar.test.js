const { rentCar } = require('../21 JS Advanced Exam - 13 March 2022/rentCar');
const { assert, expect } = require('chai');

describe("Tests …", function() {
    describe("searchCar", function() {
        it("true input", function() {
            assert.equal(rentCar.searchCar(['Audi', 'BMW', 'Ferrari'], 'BMW'),
            `There is 1 car of model BMW in the catalog!`)
        });
        it("2 input", function() {
            assert.equal(rentCar.searchCar(['BMW', 'Audi', 'BMW', 'Ferrari'], 'BMW'),
            `There is 2 car of model BMW in the catalog!`)
        });
        it("0 input", function() {
            assert.throw(() =>rentCar.searchCar(['BMW', 'Audi', 'BMW', 'Ferrari'], 'Trabant'),
            `There are no such models in the catalog!`)
        });
        it("str", function() {
            assert.throw(() =>rentCar.searchCar('BMW', 'Trabant'),
            `Invalid input!`)
        });
        it("num", function() {
            assert.throw(() =>rentCar.searchCar(23, 'Trabant'),
            `Invalid input!`)
        });
        it("obj", function() {
            assert.throw(() =>rentCar.searchCar({asd: 'asd'}, 'Trabant'),
            `Invalid input!`)
        });
        it("arr", function() {
            assert.throw(() =>rentCar.searchCar(['Trabant'], ['Trabant']),
            `Invalid input!`)
        });
        it("num", function() {
            assert.throw(() =>rentCar.searchCar(['Trabant'], 32),
            `Invalid input!`)
        });
        it("obj", function() {
            assert.throw(() =>rentCar.searchCar(['Trabant'], {asd: 'asd'}),
            `Invalid input!`)
        });
     });
     
     describe("calculatePriceOfCar", function() {
        it("true input", function() {
            assert.equal(rentCar.calculatePriceOfCar('Volkswagen', 3),
            `You choose Volkswagen and it will cost $60!`)
        });
        it("2 input", function() {
            assert.equal(rentCar.calculatePriceOfCar('BMW', 2),
            `You choose BMW and it will cost $90!`)
        });
        it("No such model", function() {
            assert.throw(() =>rentCar.calculatePriceOfCar('Trabant', 4),
            'No such model in the catalog!')
        });
        //----------------
        it("str", function() {
            assert.throw(() =>rentCar.calculatePriceOfCar('BMW', 'Trabant'),
            `Invalid input!`)
        });
        it("num", function() {
            assert.throw(() =>rentCar.calculatePriceOfCar(23, 'Trabant'),
            `Invalid input!`)
        });
        it("obj", function() {
            assert.throw(() =>rentCar.calculatePriceOfCar({asd: 'asd'}, 'Trabant'),
            `Invalid input!`)
        });
        it("arr", function() {
            assert.throw(() =>rentCar.calculatePriceOfCar(['Trabant'], ['Trabant']),
            `Invalid input!`)
        });
        it("num", function() {
            assert.throw(() =>rentCar.calculatePriceOfCar(['Trabant'], 32),
            `Invalid input!`)
        });
        it("obj", function() {
            assert.throw(() =>rentCar.calculatePriceOfCar(['Trabant'], {asd: 'asd'}),
            `Invalid input!`)
        });
    });
    describe("checkBudget", function() {
        it("hight budget", function() {
            assert.equal(rentCar.checkBudget(5, 3, 30),
            `You rent a car!`)
        });
        it("equal budget", function() {
            assert.equal(rentCar.checkBudget(5, 3, 15),
            `You rent a car!`)
        });
        it("small budget", function() {
            assert.equal(rentCar.checkBudget(5, 6, 15),
            'You need a bigger budget!')
        });
        //----------------
        it("str", function() {
            assert.throw(() =>rentCar.checkBudget('BMW', 'Trabant', 'asd'),
            `Invalid input!`)
        });
        it("num str", function() {
            assert.throw(() =>rentCar.checkBudget(23, 'Trabant', 78),
            `Invalid input!`)
        });
        it("obj", function() {
            assert.throw(() =>rentCar.checkBudget({asd: 'asd'}, {asd: 'asd'}, {asd: 'asd'}),
            `Invalid input!`)
        });
        it("arr", function() {
            assert.throw(() =>rentCar.checkBudget(['Trabant'], ['Trabant'], ['Trabant']),
            `Invalid input!`)
        });
        it("num", function() {
            assert.throw(() =>rentCar.checkBudget(['Trabant'], 32, ['Trabant']),
            `Invalid input!`)
        });
        it("obj", function() {
            assert.throw(() =>rentCar.checkBudget(['Trabant'],'Trabant', {asd: 'asd'}),
            `Invalid input!`)
        });
    });
});
