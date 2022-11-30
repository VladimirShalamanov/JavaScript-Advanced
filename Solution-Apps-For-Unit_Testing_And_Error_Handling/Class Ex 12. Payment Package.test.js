const { expect, assert } = require('chai');
const { PaymentPackage } = require("../16 Classes and Attributes - Exercise/12. Payment Package");

describe('name test', () => {

    it('ctor', () => {
        let ra = new PaymentPackage('pesho', 50);

        assert.equal(ra.name, 'pesho');
        assert.equal(ra.value, 50);
        assert.equal(ra.VAT, 20);
        assert.equal(ra.active, true);
    });
    it('not string', () => {
        expect(() => new PaymentPackage(23, 5)).to.throw('Name must be a non-empty string');
    });
    it('is array', () => {
        expect(() => new PaymentPackage(['pero'], 5)).to.throw('Name must be a non-empty string');
    });
    it('is empty', () => {
        expect(() => new PaymentPackage('', 5)).to.throw('Name must be a non-empty string');
    });
    it('true input', () => {
        expect(() => new PaymentPackage('pesho', 5)).not.to.throw('Name must be a non-empty string');
    });
});

describe('value test', () => {

    it('is string', () => {
        expect(() => new PaymentPackage('pesho', 'pesho')).to.throw('Value must be a non-negative number');
    });
    it('is array', () => {
        expect(() => new PaymentPackage('pero', [65])).to.throw('Value must be a non-negative number');
    });
    it('is negative number', () => {
        expect(() => new PaymentPackage('pero', -13)).to.throw('Value must be a non-negative number');
    });
    it('test with 0 and posible number', () => {
        expect(() => new PaymentPackage('pesho', 0)).not.to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('pesho', 18)).not.to.throw('Name must be a non-empty string');
    });
    it('Set value to null', () => {
        let instance = new PaymentPackage('Name', 100);
        assert.doesNotThrow(() => { instance.value = 0 })
    });
});

describe('VAT test', () => {

    it('is string', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.VAT = 'rari').to.throw('VAT must be a non-negative number');
    });
    it('is array', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.VAT = [45]).to.throw('VAT must be a non-negative number');
    });
    it('is negative number', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.VAT = -48).to.throw('VAT must be a non-negative number');
    });
    it('test with 0 and posible number', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.VAT = 78).not.to.throw('VAT must be a non-negative number');
        expect(() => da.VAT = 0).not.to.throw('VAT must be a non-negative number');
    });
});

describe('active test', () => {

    it('is string', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.active = 'rari').to.throw('Active status must be a boolean');
    });
    it('is array', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.active = [45]).to.throw('Active status must be a boolean');
    });
    it('is negative number', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.active = -48).to.throw('Active status must be a boolean');
    });
    it('active to true', () => {
        let da = new PaymentPackage('pesho', 23);
        expect(() => da.active = true).not.to.throw('Active status must be a boolean');
    });
});

describe('toString test', () => {

    it('correct return', () => {
        let da = new PaymentPackage('pesho', 30);
        let str = [
            `Package: pesho`,
            `- Value (excl. VAT): 30`,
            `- Value (VAT 20%): 36`
        ]
        expect(da.toString()).to.equal(str.join('\n'));
    });
    
    it('correct return with VAT set', () => {
        let da = new PaymentPackage('pesho', 30);
        da.VAT = 30;
        let str = [
            `Package: pesho`,
            `- Value (excl. VAT): 30`,
            `- Value (VAT 30%): 39`
        ]
        expect(da.toString()).to.equal(str.join('\n'));
    });

    it('correct return with false Active', () => {
        let da = new PaymentPackage('pesho', 30);
        da.active = false;
        let str = [
            `Package: pesho (inactive)`,
            `- Value (excl. VAT): 30`,
            `- Value (VAT 20%): 36`
        ]
        expect(da.toString()).to.equal(str.join('\n'));
    });

    it('correct return VAT & active', () => {
        let da = new PaymentPackage('pesho', 30);
        da.VAT = 30;
        da.active = false;
        let str = [
            `Package: pesho (inactive)`,
            `- Value (excl. VAT): 30`,
            `- Value (VAT 30%): 39`
        ]
        expect(da.toString()).to.equal(str.join('\n'));
    });
});