class List {
    constructor(list = []){
        this.list = list.sort((a, b) => a - b);
        this.size = 0;
    }

    add(num){
        this.size++;
        this.list.push(num);
        return this.list.sort((a, b) => a - b);
    }

    remove(index){
        if (index >= 0 && index < this.list.length) {
            this.size--;
            this.list.splice(index, 1);
            return this.list.sort((a, b) => a - b);
        }
    }

    get (index){
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
//list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list.get(1));