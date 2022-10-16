class Stringer {
    constructor(string, length) {
        this._initial = string;
        this.innerString = string;
        this.innerLength = length;
    }
 
    increase(length) {
        this.innerLength += length;
    }
 
    decrease(length) {
        this.innerLength -= length;
 
        if (this.innerLength < 0)
            this.innerLength = 0;
    }
 
    toString() {
        let out = this.innerString
            .slice(0, this.innerLength);
 
        if (this.innerLength < this._initial.length) {
            out += `...`;
        }
        
        return out;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
