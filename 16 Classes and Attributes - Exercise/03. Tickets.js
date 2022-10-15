function solve(arr, sortCriteria) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const line of arr) {
        [city, pri, stat] = line.split('|');
        let baseData = new Ticket(city, pri, stat);

        tickets.push(baseData);
    }

    switch (sortCriteria) {
        case 'destination':
            tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            tickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return tickets;
}

console.log(solve(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));