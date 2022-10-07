function solve(speed, area) {
    let maxSpeed = 0;
    if (area == 'motorway') {
        maxSpeed = 130;
    }
    else if (area == 'interstate') {
        maxSpeed = 90;
    }
    else if (area == 'city') {
        maxSpeed = 50;
    }
    else if (area == 'residential') {
        maxSpeed = 20;
    }

    if (speed <= maxSpeed){
        console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
    }
    else{
        let difference = speed - maxSpeed;
        let status = '';
        if (difference <= 20) status = 'speeding';
        else if (difference <= 40) status = 'excessive speeding';
        else if (difference > 40) status = 'reckless driving';

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
    }
}

solve(200, 'motorway');