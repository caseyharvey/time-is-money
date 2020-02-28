const time = 11905;
let answer = '';

console.log(time % 60);
console.log(Math.floor(time / 60) % 60);
console.log(`${Math.floor(time / 3600) % 24} hours`);
