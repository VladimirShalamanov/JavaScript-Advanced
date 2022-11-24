const { cinema } = require('../25 JS Advanced Final Retake Exam - 12 August 2021/03. cinema');
const { assert } = require('chai');

describe("Tests …", function () {
    describe("showMovies", function () {
        it("many", function () {
            let arr = [`King Kong`, `The Tomorrow War`, `Joker`];
            assert.equal(cinema.showMovies(arr),
                arr.join(', '));
        });
        it("1", function () {
            let arr = [`King Kong`];
            assert.equal(cinema.showMovies(arr),
            `King Kong`);
        });
        it("0", function () {
            let arr = [];
            assert.equal(cinema.showMovies(arr),
                'There are currently no movies to show.');
        });
    });
    describe("ticketPrice", function () {
        it("Error", function () {
            assert.throw(() => cinema.ticketPrice('asd'));
        });
        it("Error", function () {
            assert.throw(() => cinema.ticketPrice(23));
        });
        it("Error", function () {
            assert.throw(() => cinema.ticketPrice({s: 'ds'}));
        });
        it("Error", function () {
            assert.throw(() => cinema.ticketPrice(['ds']));
        });
        // "Premiere": 12.00,
        //     "Normal": 7.50,
        //         "Discount": 5.50
        it("Premiere", function () {
            assert.equal(cinema.ticketPrice('Premiere'),
            12.00);
        });
        it("Normal", function () {
            assert.equal(cinema.ticketPrice('Normal'),
            7.50);
        });
        it("Discount", function () {
            assert.equal(cinema.ticketPrice('Discount'),
            5.50);
        });
    });
    describe("swapSeatsInHall", function () {
        it("true", function () {
            assert.equal(cinema.swapSeatsInHall(5, 13),
            "Successful change of seats in the hall.");
        });
        it("str", function () {
            assert.equal(cinema.swapSeatsInHall('Normal', 'asd'),
            "Unsuccessful change of seats in the hall.");
        });
        it("arr", function () {
            assert.equal(cinema.swapSeatsInHall(['Discount'], ['Discount']),
            "Unsuccessful change of seats in the hall.");
        });
        it("obj", function () {
            assert.equal(cinema.swapSeatsInHall({asd: 'asd'}, {asd: 'asd'}),
            "Unsuccessful change of seats in the hall.");
        });
        it("-0", function () {
            assert.equal(cinema.swapSeatsInHall(-1, -5),
            "Unsuccessful change of seats in the hall.");
        });
        it("-0", function () {
            assert.equal(cinema.swapSeatsInHall(0, -5),
            "Unsuccessful change of seats in the hall.");
        });
        it("-0", function () {
            assert.equal(cinema.swapSeatsInHall(-3, 0),
            "Unsuccessful change of seats in the hall.");
        });
        it("24", function () {
            assert.equal(cinema.swapSeatsInHall(7, 24),
            "Unsuccessful change of seats in the hall.");
        });
        it("21", function () {
            assert.equal(cinema.swapSeatsInHall(21, 15),
            "Unsuccessful change of seats in the hall.");
        });
        it("equal 9", function () {
            assert.equal(cinema.swapSeatsInHall(9, 9),
            "Unsuccessful change of seats in the hall.");
        });
        it("fer", function () {
            assert.equal(cinema.swapSeatsInHall(9, 'srt'),
            "Unsuccessful change of seats in the hall.");
        });
        it("fer", function () {
            assert.equal(cinema.swapSeatsInHall([9], 1),
            "Unsuccessful change of seats in the hall.");
        });
    });
});
