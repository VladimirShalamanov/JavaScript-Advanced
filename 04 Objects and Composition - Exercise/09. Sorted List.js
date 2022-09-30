function createSortedList() {
    const collection = [];

    const result = {
        add,
        remove,
        get,
        size: 0,
    };

    return result;

    function add(num) {
        collection.push(num);
        this.size++;
        collection.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < collection.length) {
            this.size--;
            collection.splice(index, 1);
        }
    }

    function get(index) {
        if (index >= 0 && index < collection.length) {
            return collection[index];
        }
    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

console.log(list.size);