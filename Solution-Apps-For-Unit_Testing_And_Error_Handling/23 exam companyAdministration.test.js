const { companyAdministration } = require('../23 Js Advanced Final Retake Exam - 10 December 2021/companyAdministration');
const { assert } = require('chai');

describe("Tests …", function () {

    describe("hiringEmployee", function () {
        it("other work", function () {
            assert.throw(() => companyAdministration.hiringEmployee('Ivan', 'car', 3),
                `We are not looking for workers for this position.`);
        });
        it("other work 2", function () {
            assert.throw(() => companyAdministration.hiringEmployee('Ivan', 'a', 5),
                `We are not looking for workers for this position.`);
        });
        it("P 3", function () {
            assert.equal(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3),
                `Ivan was successfully hired for the position Programmer.`);
        });
        it("P 5", function () {
            assert.equal(companyAdministration.hiringEmployee('Ivan', 'Programmer', 5),
                `Ivan was successfully hired for the position Programmer.`);
        });
        it("P 2", function () {
            assert.equal(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2),
                `Ivan is not approved for this position.`);
        });
        it("P 1", function () {
            assert.equal(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1),
                `Ivan is not approved for this position.`);
        });
    });

    describe("calculateSalary", function () {
        it("str", function () {
            assert.throw(() => companyAdministration.calculateSalary('str'),
                "Invalid hours");
        });
        it("arr", function () {
            assert.throw(() => companyAdministration.calculateSalary([23, 'str']),
                "Invalid hours");
        });
        it("obj", function () {
            assert.throw(() => companyAdministration.calculateSalary({ 23: 32, str: '23' }),
                "Invalid hours");
        });
        it("-1", function () {
            assert.throw(() => companyAdministration.calculateSalary(-1),
                "Invalid hours");
        });
        it("-6", function () {
            assert.throw(() => companyAdministration.calculateSalary(-6),
                "Invalid hours");
        });
        it("0", function () {
            assert.equal(companyAdministration.calculateSalary(0),
                0);
        });
        it("1", function () {
            assert.equal(companyAdministration.calculateSalary(1),
                15);
        });
        it("13", function () {
            assert.equal(companyAdministration.calculateSalary(13),
                195);
        });
        it("58", function () {
            assert.equal(companyAdministration.calculateSalary(58),
                870);
        });
        it("160", function () {
            assert.equal(companyAdministration.calculateSalary(160),
                2400);
        });
        it("161", function () {
            assert.equal(companyAdministration.calculateSalary(161),
                3415);
        });
        it("178", function () {
            assert.equal(companyAdministration.calculateSalary(178),
                3670);
        });
    });
    describe("firedEmployee", function () {
        it("str", function () {
            assert.throw(() => companyAdministration.firedEmployee('str', 'str'),
                "Invalid input");
        });
        it("num", function () {
            assert.throw(() => companyAdministration.firedEmployee(3, 4),
                "Invalid input");
        });
        it("obj", function () {
            assert.throw(() => companyAdministration.firedEmployee({3: 2, 4: 5}),
                "Invalid input");
        });
        it("arr", function () {
            assert.throw(() => companyAdministration.firedEmployee(['sd', 23], ['sd', 23]),
                "Invalid input");
        });
        it("mix", function () {
            assert.throw(() => companyAdministration.firedEmployee(3, ['sd', 23]),
                "Invalid input");
        });
        it("under 0", function () {
            assert.throw(() => companyAdministration.firedEmployee(['sd', 'sd'], -1),
                "Invalid input");
        });
        it("over L", function () {
            assert.throw(() => companyAdministration.firedEmployee(['sd', 'sd'], 2),
                "Invalid input");
        });
        it("over L", function () {
            assert.throw(() => companyAdministration.firedEmployee(['sd', 'sd'], 4),
                "Invalid input");
        });
        it("true 1", function () {
            assert.equal(companyAdministration.firedEmployee(['sd', 'pr'], 1),
                'sd');
        });
        it("true 2", function () {
            assert.equal(companyAdministration.firedEmployee(['pet', 'des', 'kik'], 2),
                'pet, des');
        });
        it("true 3", function () {
            assert.equal(companyAdministration.firedEmployee(['pet', 'des', 'kik', 'ric'], 2),
                'pet, des, ric');
        });
    });
});