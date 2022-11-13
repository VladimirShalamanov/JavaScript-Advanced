class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }
    loadingVegetables(vegetables) {
        let res = [];
        for (let v of vegetables) {
            let arr = v.split(' ');
            let type = arr[0]
            let quantity = Number(arr[1]);
            let price = Number(arr[2]);

            let currV = this.availableProducts.find(t => t.type === type);
            if (!currV) {
                this.availableProducts.push({ type, quantity, price });
                res.push(type);
            }
            else {
                currV.quantity += quantity;
                if (price > currV.price) {
                    currV.price = price;
                }
            }
        }
        return `Successfully added ${res.join(', ')}`;
    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        for (const v of selectedProducts) {
            let arr = v.split(' ');
            let type = arr[0];
            let quantity = Number(arr[1]);

            let currV = this.availableProducts.find(t => t.type === type);

            if (!currV) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if (quantity > currV.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += Number(quantity * currV.price);
            currV.quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let currP = this.availableProducts.find(t => t.type === type);

        if (!currP) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > currP.quantity) {
            currP.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        currP.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`;
    }
    revision() {
        let res = ["Available vegetables:"];
        this.availableProducts = this.availableProducts.sort((a, b) => a.price - b.price);
        this.availableProducts.forEach(x => {
            res.push(`${x.type}-${x.quantity}-$${x.price}`);
        });
        res.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return res.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

