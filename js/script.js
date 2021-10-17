// 12
const num = +prompt('Введите число:');
if (num > 1) {
        for (let i = 2; i <= num; i++){
            if (num % i === 0) {
                console.log(i);
                break;
            }
        }
} else {
    console.log('NaN');
}


