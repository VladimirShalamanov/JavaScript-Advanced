const { expect } = require('chai');
const { rgbToHexColor } = require("../13 Unit Testing and Error Handling - Lab/06. RGB to Hex");

describe('rgbToHexColor', () => {
    it('red should be Number', () => {
        expect(rgbToHexColor('bobo', 244, 145)).to.be.undefined;
    });
    it('red is over range', () => {
        expect(rgbToHexColor(263, 244, 145)).to.be.undefined;
    });
    it('red is under range', () => {
        expect(rgbToHexColor(-13, 244, 145)).to.be.undefined;
    });


    it('green should be Number', () => {
        expect(rgbToHexColor(173, 'bobo', 145)).to.be.undefined;
    });
    it('green is over range', () => {
        expect(rgbToHexColor(213, 268, 145)).to.be.undefined;
    });
    it('green is under in range', () => {
        expect(rgbToHexColor(76, -13, 145)).to.be.undefined;
    });


    it('blue should be Number', () => {
        expect(rgbToHexColor(244, 145, 'bobo')).to.be.undefined;
    });
    it('blue is over range', () => {
        expect(rgbToHexColor(157, 254, 263)).to.be.undefined;
    });
    it('blue is under range', () => {
        expect(rgbToHexColor(134, 244, -32)).to.be.undefined;
    });


    it("no input test", function () {
        expect(rgbToHexColor()).to.be.undefined;
    });
    it("test with zeros", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });
    it("test with 255", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });


    it('create color', () => {
        let red = 156;
        let green = 245;
        let blue = 57;

        let colorCurr = rgbToHexColor(red, green, blue);

        let expectColor = "#" +
            ("0" + red.toString(16).toUpperCase()).slice(-2) +
            ("0" + green.toString(16).toUpperCase()).slice(-2) +
            ("0" + blue.toString(16).toUpperCase()).slice(-2);


        expect(colorCurr).to.be.equal(expectColor);
    });
});