class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }
    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        }
        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;

    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.goals[peak] && this.resources === 0) {
            throw new Error("You don't have enough resources to start the hike");
        }
        if (this.resources - (time * 10) < 0) {
            return "You don't have enough resources to complete the hike";
        }

        this.resources -= (time * 10);
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
    rest(time) {
        this.resources += (time * 10);
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }
    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === 'all') {
            let res = ["All hiking records:"];
            for (const p of this.listOfHikes) {
                res.push(`${this.username} hiked ${p.peak} for ${p.time} hours`)
            }
            return res.join('\n');
        }

        let bestPeaks = [];
        for (const p of this.listOfHikes) {
            if (p.difficultyLevel == criteria) {
                bestPeaks.push(p);
            }
        }

        if (bestPeaks.length === 0) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }

        let bestTime = bestPeaks.sort((a, b) => a.time - b.time)[0];
        return `${this.username}'s best ${criteria} hike is ${bestTime.peak} peak, for ${bestTime.time} hours`
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

