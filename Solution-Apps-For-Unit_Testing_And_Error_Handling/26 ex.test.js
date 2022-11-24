const { chooseYourCar } = require('../26 NEW/03. Choose Your Car_Ресурси/03.Choose_Your_Car_Resources/chooseYourCar');
const { assert } = require('chai');

describe("Tests …", function () {
    describe("choosingType", function () {

        it("iNvalid year", function () {
            assert.throw(() => chooseYourCar.choosingType('asd', 'red', 1899));
        });
        it("iNvalid year 2", function () {
            assert.throw(() => chooseYourCar.choosingType('asd', 'red', 2023));
        });
        it("iNvalid year 3", function () {
            assert.throw(() => chooseYourCar.choosingType('asd', 'red', 1790));
        });
        it("iNvalid type", function () {
            assert.throw(() => chooseYourCar.choosingType('asd', 'red', 2012));
        });
        it("Sedan", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010),
                `This red Sedan meets the requirements, that you have.`);
        });
        it("Sedan 1", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'blue', 2012),
                `This blue Sedan meets the requirements, that you have.`);
        });
        it("Sedan 2", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 's', 2009),
                `This Sedan is too old for you, especially with that s color.`);
        });
        it("Sedan 3", function () {
            assert.equal(chooseYourCar.choosingType('Sedan', 'd', 2006),
                `This Sedan is too old for you, especially with that d color.`);
        });
    });

    describe("brandName", function () {

        it("str", function () {
            assert.throw(() => chooseYourCar.brandName('asd', 'red'));
        });
        it("arr", function () {
            assert.throw(() => chooseYourCar.brandName(['asd'], ['red']));
        });
        it("obj", function () {
            assert.throw(() => chooseYourCar.brandName({ dd: 'asd' }, { ss: 'red' }));
        });
        it("mix", function () {
            assert.throw(() => chooseYourCar.brandName(65, ['asd']));
        });
        it("in i", function () {
            assert.throw(() => chooseYourCar.brandName(['as', 'ss', 'tt'], -1));
        });
        it("in i 2", function () {
            assert.throw(() => chooseYourCar.brandName(['as', 'ss', 'tt'], -4));
        });
        it("in i 3", function () {
            assert.throw(() => chooseYourCar.brandName(['as', 'ss', 'tt'], 3));
        });
        it("in i 4", function () {
            assert.throw(() => chooseYourCar.brandName(['as', 'ss', 'tt'], 5));
        });
        it("one brand", function () {
            let arr = ['as', 'ss', 'tt'];
            let res = ['ss', 'tt'];
            assert.equal(chooseYourCar.brandName(arr, 0),
                res.join(", "));
        });
        it("2 brand", function () {
            let arr = ['as', 'ss', 'tt'];
            let res = ['as', 'tt'];
            assert.equal(chooseYourCar.brandName(arr, 1),
                res.join(", "));
        });
        it("3 brand", function () {
            let arr = ['as', 'ss', 'tt'];
            let res = ['as', 'ss'];
            assert.equal(chooseYourCar.brandName(arr, 2),
                res.join(", "));
        });
    });
    describe("carFuelConsumption", function () {

        it("str", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption('asd', 'red'));
        });
        it("arr", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(['asd'], ['red']));
        });
        it("obj", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption({ dd: 'asd' }, { ss: 'red' }));
        });
        it("str", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(2, 'red'));
        });
        it("str", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption('red', 3));
        });
        it("a", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(2, 0));
        });
        it("b", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 3));
        });
        it("c", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 0));
        });
        it("d", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(-1, 3));
        });
        it("e", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(2, -4));
        });
        it("i", function () {
            assert.throw(() => chooseYourCar.carFuelConsumption(-3, -8));
        });
        it("< 7", function () {
            assert.equal(chooseYourCar.carFuelConsumption(10, 100), 
            `The car burns too much fuel - 1000.00 liters!`);
        });
        it("< 7", function () {
            assert.equal(chooseYourCar.carFuelConsumption(10, 89), 
            `The car burns too much fuel - 890.00 liters!`);
        });
        it("> 7", function () {
            assert.equal(chooseYourCar.carFuelConsumption(100, 1), 
            `The car is efficient enough, it burns 1.00 liters/100 km.`);
        });
        it("> 7", function () {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), 
            `The car is efficient enough, it burns 7.00 liters/100 km.`);
        });
    });
});
