const { flowerShop } = require('../22 Js Advanced Final Exam - 19 February 2022/flowerShop');
const { assert } = require('chai');
describe("Tests …", () => {
    describe("calcPriceOfFlowers", () => {

        it("str", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(
                "asd", "pen4o", 'qv4o'));
        });
        it("num", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(
                1, 2, 3));
        });
        it("arr", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(
                [1, 2, 3], ['asd', 23], [23, 'sad']));
        });
        it("obj", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(
                { 1: 23, 2: 32, 3: 34 }, { 'asd': 24, 23: '23' }, { 'we': 23, yh: 'sad' }));
        });
        it("mix", () => {
            assert.throw(() => flowerShop.calcPriceOfFlowers(
                45, { 'asd': 24, 23: '23' }, 'tralo'));
        });
        it("true", () => {
            assert.equal(flowerShop.calcPriceOfFlowers(
                "lale", 3, 2),
                `You need $${(3 * 2).toFixed(2)} to buy lale!`);
        });
    });
    describe("checkFlowersAvailable", () => {
        it("false", () => {
            assert.equal(flowerShop.checkFlowersAvailable(
                "roza", ['laika', 'roza', 'bor']),
                `The roza are available!`);
        });
        it("true", () => {
            assert.equal(flowerShop.checkFlowersAvailable(
                "lale", ['laika', 'roza', 'bor']),
                `The lale are sold! You need to purchase more!`);
        });
    });
    describe("sellFlowers", () => {
        it("str", () => {
            assert.throw(() => flowerShop.sellFlowers(
                "asd", "pen4o"));
        });
        it("num", () => {
            assert.throw(() => flowerShop.sellFlowers(
                1, 2));
        });
        it("arr", () => {
            assert.throw(() => flowerShop.sellFlowers(
                [1, 2, 3], ['asd', 23]));
        });
        it("obj", () => {
            assert.throw(() => flowerShop.sellFlowers(
                { 'asd': 24, 23: '23' }, { 'we': 23, yh: 'sad' }));
        });
        it("space under 0", () => {
            assert.throw(() => flowerShop.sellFlowers(
                ['lale', 'roza', 'bor'], -1));
        });
        it("space over L1", () => {
            assert.throw(() => flowerShop.sellFlowers(
                ['lale', 'roza', 'bor'], 3));
        });
        it("space over L2", () => {
            assert.throw(() => flowerShop.sellFlowers(
                ['lale', 'roza', 'bor'], 5));
        });
        it("push 2", () => {
            assert.equal(flowerShop.sellFlowers(
                ['lale', 'roza', 'bor'], 2), 'lale / roza');
        });
        it("push 3", () => {
            assert.equal(flowerShop.sellFlowers(
                ['lale', 'roza', 'bor', 'min'], 3), 'lale / roza / bor');
        });
    });
});