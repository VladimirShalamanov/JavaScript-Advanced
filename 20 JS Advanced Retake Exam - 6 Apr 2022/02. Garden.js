class Garden {
    constructor(spaceAvalible) {
        this.spaceAvalible = spaceAvalible;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvalible) {
            throw new Error("Not enough space in the garden.");
        }

        this.spaceAvalible -= spaceRequired;
        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });
        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(p => p.plantName === plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        plant.ripe = true;
        plant.quantity = quantity;
        let mess = quantity === 1 ?
            `${quantity} ${plantName} has successfully ripened.` :
            `${quantity} ${plantName}s have successfully ripened.`;

        return mess;
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(p => p.plantName === plantName);
        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }
        this.storage.push({ plantName: plant.plantName, quantity: plant.quantity });

        this.spaceAvalible += plant.spaceRequired;
        this.plants = this.plants.filter(p => p.plantName !== plantName);

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let res = [`The garden has ${this.spaceAvalible} free space left.`];
        let names = [];
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .forEach(pl => names.push(pl.plantName));


        let inGarden = `Plants in the garden: ${names.join(", ")}`;
        res.push(inGarden);

        if (this.storage.length === 0) {
            res.push("Plants in storage: The storage is empty.");
        }
        else {
            let name = [];
            this.storage.forEach(pl => name.push(`${pl.plantName} (${pl.quantity})`));

            let inStorage = `Plants in storage: ${name.join(", ")}`;
            res.push(inStorage);
        }

        return res.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());