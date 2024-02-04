const num = 10000;
const minNum = 1;
const maxNum = 100;

for (let count = minNum; count <= maxNum; count++) {
    if ((count * count) <= num) {
        console.log(count)
    }
}