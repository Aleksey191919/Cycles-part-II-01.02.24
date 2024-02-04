const minNum = 20;
const maxNum = 30;
const step = 0.5;
let result = '';

for (let count = minNum; count <= maxNum; count += step) {
    if (count < maxNum) {
        result += count + ' ';
    }
    else {
        result += count;
    }
}

console.log(result);

