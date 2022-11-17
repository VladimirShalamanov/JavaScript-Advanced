class SummerCamp {
    constructor(organizer, location,) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }
    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }
        let p1 = this.listOfParticipants.find(x => x.name === name);
        if (p1) {
            return `The ${name} is already registered at the camp.`;
        }
        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }
    unregisterParticipant(name) {
        let p1 = this.listOfParticipants.find(x => x.name === name);
        if (!p1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(x => x.name !== name);
        return `The ${name} removed successfully.`;
    }
    timeToPlay(typeOfGame, participant1, participant2) {
        if (typeOfGame === 'WaterBalloonFights') {
            let p1 = this.listOfParticipants.find(x => x.name === participant1);
            let p2 = this.listOfParticipants.find(x => x.name === participant2);
            if (!p1 || !p2) {
                throw new Error(`Invalid entered name/s.`);
            }

            if (p1.condition !== p2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            let winner = p1.power > p2.power ? p1 : p2;
            winner.wins++;
            return `The ${winner.name} is winner in the game ${typeOfGame}.`
        }
        else if (typeOfGame === 'Battleship') {
            let p1 = this.listOfParticipants.find(x => x.name === participant1);
            if (!p1) {
                throw new Error(`Invalid entered name/s.`);
            }
            p1.power += 20;
            return `The ${p1.name} successfully completed the game ${typeOfGame}.`;
        }
        else {
            return `There is no winner.`;
        }
    }
    toString() {
        let res = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];
        this.listOfParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        this.listOfParticipants.forEach(x => {
            res.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
        });
        return res.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
