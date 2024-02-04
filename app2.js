const dollarRate = 27;
let stepExch = 10;
const maxChange = 100;

for (let count = stepExch; count <= maxChange; count += stepExch) {
    console.log(`${count} долларов стоят ${count * dollarRate} гривен`)
}