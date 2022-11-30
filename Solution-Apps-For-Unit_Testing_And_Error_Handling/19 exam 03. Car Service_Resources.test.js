const { carService } = require('../19 JS Advanced Exam - 25 Jun 2022/03. Car Service_Resources');
const { assert, expect } = require('chai');

describe("Tests …", function () {
    describe("isItExpensive ", function () {

        it("Engine test", function () {
            assert.equal(carService.isItExpensive("Engine"), `The issue with the car is more severe and it will cost more money`);
        });
        it("Transmission test", function () {
            assert.equal(carService.isItExpensive("Transmission"), `The issue with the car is more severe and it will cost more money`);
        });
        it("one letter test", function () {
            assert.equal(carService.isItExpensive("r"), `The overall price will be a bit cheaper`);
        });
        it("many letter test", function () {
            assert.equal(carService.isItExpensive("Coupe Transmission"), `The overall price will be a bit cheaper`);
        });
    });

    describe("discount", function () {
        it("str numberOfParts", function () {
            assert.throw(() => carService.discount("pesho", 4), "Invalid input");
        });
        it("arr numberOfParts", function () {
            assert.throw(() => carService.discount(['ivan'], 6), "Invalid input");
        });
        it("obj numberOfParts", function () {
            assert.throw(() => carService.discount({ pen: "vanko", prapa: ['tralo'] }, 3), "Invalid input");
        });
        it("num as an arr numberOfParts", function () {
            assert.throw(() => carService.discount([2, 8, 1], 9), "Invalid input");
        });

        it("str totalPrice", function () {
            assert.throw(() => carService.discount(3, "pesho"), "Invalid input");
        });
        it("arr totalPrice", function () {
            assert.throw(() => carService.discount(6, ['ivan']), "Invalid input");
        });
        it("obj totalPrice", function () {
            assert.throw(() => carService.discount(5, { pen: "vanko", prapa: ['tralo'] }), "Invalid input");
        });
        it("num as an arr totalPrice", function () {
            assert.throw(() => carService.discount(9, [2, 8, 1]), "Invalid input");
        });

        it("str numberOfParts & totalPrice", function () {
            assert.throw(() => carService.discount('ivan', "pesho"), "Invalid input");
        });
        it("arr numberOfParts & totalPrice", function () {
            assert.throw(() => carService.discount(['pesho'], ['ivan']), "Invalid input");
        });
        it("obj numberOfParts & totalPrice", function () {
            assert.throw(() => carService.discount({ pens: 5, pr: ['tra'] }, { pen: "vanko", prapa: [5, 9] }), "Invalid input");
        });

        it("2", function () {
            assert.equal(carService.discount(2, 8), "You cannot apply a discount");
        });
        it("1", function () {
            assert.equal(carService.discount(1, 8), "You cannot apply a discount");
        });
        it("0", function () {
            assert.equal(carService.discount(0, 6), "You cannot apply a discount");
        });
        it("negative num", function () {
            assert.equal(carService.discount(-3, 5), "You cannot apply a discount");
        });

        it('15 %', function () {
            let f = carService.discount(3, 8);
            let result = (15 / 100) * 8;
            let s = `Discount applied! You saved ${result}$`;
            assert.equal(f, s);
        });
        it('15 %', function () {
            let f = carService.discount(7, 9);
            let result = (15 / 100) * 9;
            let s = `Discount applied! You saved ${result}$`;
            assert.equal(f, s);
        });
        it("30 %", function () {
            let f = carService.discount(8, 7);
            let result = (30 / 100) * 7;
            let s = `Discount applied! You saved ${result}$`;
            assert.equal(f, s);
        });
    });
    describe("partsToBuy", function () {
        it("str", function () {
            assert.throw(() => carService.partsToBuy("pesho", 'ivan'), "Invalid input");
        });
        it("num", function () {
            assert.throw(() => carService.partsToBuy(7, 6), "Invalid input");
        });
        it("obj", function () {
            assert.throw(() => carService.partsToBuy({ pen: "vanko", prapa: ['tralo'] }, 3), "Invalid input");
        });
        it("both params", function () {
            assert.throw(() => carService.partsToBuy(9, { pen: "vanko", prapa: ['tralo'] }), "Invalid input");
        });

        it("total sum", function () {
            assert.equal(carService.partsToBuy(
                ([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }]),
                (["blowoff valve", "injectors"])), 145);
        });
        it("0 sum", function () {
            assert.equal(carService.partsToBuy(
                ([{}]),
                (["blowoff valve", "injectors"])), 0);
        });
    });
});