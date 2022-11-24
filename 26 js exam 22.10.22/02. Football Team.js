class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        //"{name}/{age}/{playerValue}"
        let names = [];
        for (const pl of footballPlayers) {

            let arr = pl.split('/');
            let name = arr[0];
            let age = arr[1];
            let playerValue = arr[2];
            age = Number(age);
            playerValue = Number(playerValue);

            let currName = this.invitedPlayers.find(x => x.name === name);
            if (currName) {
                if (playerValue > currName.playerValue) {
                    currName.playerValue = playerValue;
                }
            }
            else {
                this.invitedPlayers.push({ name, age, playerValue });
                names.push(name);
            }
        }
        return `You successfully invite ${names.join(', ')}.`;
    }
    signContract(selectedPlayer) {
        //"{name}/{playerOffer}"
        let arr = selectedPlayer.split('/');
        let name = arr[0];
        let playerOffer = arr[1];
        playerOffer = Number(playerOffer);
        let currName = this.invitedPlayers.find(x => x.name === name);
        if (!currName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (playerOffer < currName.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${currName.playerValue - playerOffer} million more are needed to sign the contract!`);
        }
        currName.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${currName.name} for ${playerOffer} million dollars.`;
    }
    ageLimit(name, age) {
        let currName = this.invitedPlayers.find(x => x.name === name);
        if (!currName) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currName.age < age) {
            let diff = age - currName.age;
            if (diff < 5) {
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
            }
            else if (diff > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        if (currName.age >= age) {
            return `${name} is above age limit!`;
        }
    }
    transferWindowResult() {
        let res = ["Players list:"];
        this.invitedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        this.invitedPlayers.forEach(x => {
            res.push(`Player ${x.name}-${x.playerValue}`);
        })
        return res.join('\n');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
