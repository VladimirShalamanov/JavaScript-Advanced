function solve(steps, footprint, speed) {
    let distanceMeters = steps * footprint;
    let speedPerSec = speed / 3.6;
    let time = distanceMeters / speedPerSec;
    let rest = Math.floor(distanceMeters/ 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHors = Math.floor(time / 3600);

    console.log(`${(timeHors < 10 ? "0" : "")}${timeHors}:${(timeMin + rest < 10 ? "0" : "")}${timeMin + rest}:${(timeSec < 10 ? "0" : "")}${timeSec}`);
}

solve(2564, 0.70, 5.5);