class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (!model ||
            horsepower < 0 ||
            price < 0 || mileage < 0
        ) {
            throw new Error("Invalid input!");
        }

        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }
    sellCar(model, desiredMileage) {
        let currModel = this.availableCars.find(m => m.model === model);

        if (!currModel) {
            throw new Error(`${model} was not found!`);
        }

        if (currModel.mileage > desiredMileage) {
            let diff = currModel.mileage - desiredMileage;
            if (diff <= 40000) {
                currModel.price *= 0.95;
            }
            else if (diff > 40000) {
                currModel.price *= 0.90;
            }
        }

        let mod = currModel.model;
        let hp = currModel.horsepower
        let pr = currModel.price
        this.soldCars.push({ mod, hp, pr });
        this.totalIncome += pr;
        return `${mod} was sold for ${pr.toFixed(2)}$`;
    }
    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }

        let res = ["-Available cars:"];
        this.availableCars.forEach(c => {
            res.push(`---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
        });
        return res.join('\n');
    }
    salesReport(criteria) {
        if (criteria !== "horsepower" && criteria !== "model") {
            throw new Error("Invalid criteria!");
        }
        let sortCars = [];
        if (criteria === "horsepower") {
            sortCars = this.soldCars.sort((a, b) => b.hp - a.hp);
        }
        else if (criteria === "model") {
            sortCars = this.soldCars.sort((a, b) => a.mod.localeCompare(b.mod));
        }

        let res = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
        `-${sortCars.length} cars sold:`];

        sortCars.forEach(c => {
            res.push(`---${c.mod} - ${c.hp} HP - ${c.pr.toFixed(2)}$`);
        });
        return res.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));
