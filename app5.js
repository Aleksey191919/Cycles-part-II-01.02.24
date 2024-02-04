const num = 9;
const degreeOfNum = 3;
let degreeCounter = 0;
let copyOfNum = num;
while (copyOfNum % degreeOfNum === 0) {
        copyOfNum = copyOfNum / degreeOfNum;
        degreeCounter++;
}

if (copyOfNum === 1) { 
    console.log(`Число ${num} можно получить, возведя число ${degreeOfNum} в степень ${degreeCounter}.`);
} else {
    console.log(`Число ${num} нельзя получить, возводя число ${degreeOfNum} в степень.`);
}