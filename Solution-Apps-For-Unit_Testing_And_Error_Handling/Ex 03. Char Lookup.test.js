const { expect } = require('chai');
const { lookupChar } = require("../14 Unit Testing and Error Handling - Exercise/03. Char Lookup");

describe('lookupChar', () => {

    it('und str(num)', () => {
        expect(lookupChar(23, 4)).to.be.undefined;
    });
    it('und index', () => {
        expect(lookupChar('Nemo', 2.3)).to.be.undefined;
    });
    it('under index', () => {
        expect(lookupChar('Nemo', -3)).to.equal("Incorrect index");
    });
    it('over index', () => {
        expect(lookupChar('Nemo', 6)).to.equal("Incorrect index");
    });
    it('return truty Char', () => {
        expect(lookupChar('Nemo', 2)).to.equal("m");
    });
});