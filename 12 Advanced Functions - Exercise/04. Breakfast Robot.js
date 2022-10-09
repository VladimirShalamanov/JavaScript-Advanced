function solution() {
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2, },
        lemonade: { carbohydrate: 10, flavour: 20, },
        burger: { carbohydrate: 5, fat: 7, flavour: 3, },
        eggs: { protein: 5, fat: 1, flavour: 1, },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10, }
    }

    const productStorage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let output = '';

    const actions = {
        restock: (macronutrient, quantity) => {
            productStorage[macronutrient] += quantity;
            output = 'Success'
        },
        prepare: (recipe, quantity) => {
            let enoughProducts = true;

            for (const rec of Object.entries(recipes[recipe])) {
                let [macronutrient, count] = rec;

                if (enoughProducts && productStorage[macronutrient] < count * quantity) {
                    enoughProducts = false;
                    output = `Error: not enough ${macronutrient} in stock`;
                }
            }

            if (enoughProducts) {
                for (const rec of Object.entries(recipes[recipe])) {
                    let [macronutrient, count] = rec;

                    productStorage[macronutrient] -= count * quantity;
                }

                output = 'Success';
            }
        },
        report: () => {
            output = [];

            for (const p in productStorage) {
                output.push(p + '=' + productStorage[p]);
            }
            output = output.join(' ');
        }
    }

    return function (input) {
        let [command, product, quantity] = input.split(' ');
        quantity = Number(quantity);

        actions[command](product, quantity);

        return output;
    }
}

let manager = solution();

console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
