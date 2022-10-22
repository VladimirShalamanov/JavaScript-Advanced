(function solve() {
    //let str = 'my string';

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`;
        }
        return this.slice();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`;
        }
        return this.slice();
    }
    String.prototype.isEmpty = function () {
        return this.length === 0;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            let period = '.'
            return period.repeat(n);
        }
        if (this.length <= n) {
            return this.slice();
        }
        if (!this.includes(' ')) {
            return this.slice(0, n - 3) + '...';
        }
        else {
            let result = this.slice();
            while (result.length > n - 3) {
                result = result.split(' ');
                result.pop();
                result = result.join(' ');
            }
            return `${result}...`;
        }
    }
    String.format = function (string, ...params) {
        let pattern = /{[0-9]+}/g;
        let placeholder = null;
        while ((placeholder = pattern.exec(string)) != null) {
            if (params[Number(placeholder[0][1])]) {
                string = string.replace(placeholder[0], params[placeholder[0][1]]);
            }
        }
        return string.slice();
    }

    // str = str.ensureStart('my');
    // str = str.ensureStart('hello ');
    // str = str.truncate(16);
    // str = str.truncate(14);
    // console.log(str);
    // str = str.truncate(8);
    // str = str.truncate(4);
    // str = str.truncate(2);
    // str = String.format('The {0} {1} fox',
    //     'quick', 'brown');
    // str = String.format('jumps {0} {1}',
    //     'dog');

})();