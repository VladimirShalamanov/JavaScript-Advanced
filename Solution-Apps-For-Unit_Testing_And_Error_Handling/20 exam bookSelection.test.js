const { bookSelection } = require('../20 JS Advanced Retake Exam - 6 Apr 2022/bookSelection');
const { assert, expect } = require('chai');

describe("Tests …", function () {
    describe("isGenreSuitable", function () {

        it("12 T", function () {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 12),
                `Books with Thriller genre are not suitable for kids at 12 age`);
        });
        it("12 H", function () {
            assert.equal(bookSelection.isGenreSuitable("Horror", 12),
                `Books with Horror genre are not suitable for kids at 12 age`);
        });
        it("8 T", function () {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 8),
                `Books with Thriller genre are not suitable for kids at 8 age`);
        });
        it("4 H", function () {
            assert.equal(bookSelection.isGenreSuitable("Horror", 4),
                `Books with Horror genre are not suitable for kids at 4 age`);
        });
        it("14 T", function () {
            assert.equal(bookSelection.isGenreSuitable("Thriller", 14),
                `Those books are suitable`);
        });
        it("18 H", function () {
            assert.equal(bookSelection.isGenreSuitable("Horror", 18),
                `Those books are suitable`);
        });
        it("7 Comedy", function () {
            assert.equal(bookSelection.isGenreSuitable("Comedy", 7),
                `Those books are suitable`);
        });
    });

    describe("isItAffordable", function () {

        it("str", function () {
            assert.throw(() => bookSelection.isItAffordable("Thri", 76),
                "Invalid input");
        });
        it("str", function () {
            assert.throw(() => bookSelection.isItAffordable(54, "Thri"),
                "Invalid input");
        });
        it("str", function () {
            assert.throw(() => bookSelection.isItAffordable("asd", "Thri"),
                "Invalid input");
        });
        it("arr", function () {
            assert.throw(() => bookSelection.isItAffordable(["Thri", 'ss'], 76),
                "Invalid input");
        });
        it("arr", function () {
            assert.throw(() => bookSelection.isItAffordable(54, ["Thri", 'ss']),
                "Invalid input");
        });
        it("arr", function () {
            assert.throw(() => bookSelection.isItAffordable(["erts", 'true'], ["false", 'book']),
                "Invalid input");
        });
        it("obj", function () {
            assert.throw(() => bookSelection.isItAffordable({ tre: "Thri", pro: 'ss' }, 76),
                "Invalid input");
        });
        it("obj", function () {
            assert.throw(() => bookSelection.isItAffordable(54, { tre: "Thri", pro: 'ss' }),
                "Invalid input");
        });
        it("obj", function () {
            assert.throw(() => bookSelection.isItAffordable({ tre: "Thri", pro: 'ss' }, { fals: "Thri", proes: 'ss' }),
                "Invalid input");
        });

        it("under 0", function () {
            assert.equal(bookSelection.isItAffordable(13, 10),
                "You don't have enough money");
        });
        it("exactly 0", function () {
            assert.equal(bookSelection.isItAffordable(14, 14),
                "Book bought. You have 0$ left");
        });
        it("over 0", function () {
            assert.equal(bookSelection.isItAffordable(15, 20),
                "Book bought. You have 5$ left");
        });
    });

    describe("suitableTitles", function () {

        it("num", function () {
            assert.throw(() => bookSelection.suitableTitles(13, 'str'),
                "Invalid input");
        });
        it("str", function () {
            assert.throw(() => bookSelection.suitableTitles('str', 'str'),
                "Invalid input");
        });
        it("obj", function () {
            assert.throw(() => bookSelection.suitableTitles({ pr: 'str', tr: 78 }, 'str'),
                "Invalid input");
        });
        it("num", function () {
            assert.throw(() => bookSelection.suitableTitles(['str', 78], 12),
                "Invalid input");
        });
        it("obj", function () {
            assert.throw(() => bookSelection.suitableTitles(['str', 78], { pr: 'str', tr: 78 }),
                "Invalid input");
        });

        it("arr", function () {
            assert.throw(() => bookSelection.suitableTitles(['str', 78], ['str', 78]),
                "Invalid input");
        });
        it("num", function () {
            assert.throw(() => bookSelection.suitableTitles(5, 2),
                "Invalid input");
        });

        it("push many books", function () {
            let methodArr = bookSelection.suitableTitles(
                [{ title: "The Da Vinci Code", genre: "Thriller" },
                { title: "Sam", genre: "Comedy" },
                { title: "Nemo", genre: "Thriller" }], "Thriller");

            let resultArr = ["The Da Vinci Code", "Nemo"];
            assert.equal(methodArr.join(' '), resultArr.join(' '));
        });
    });
});
