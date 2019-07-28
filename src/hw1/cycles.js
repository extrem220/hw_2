const getSumEvenValues = () => {
    let count = 0;
    let sum = 0;

    for (let i = 1; i <= 99; i++) {
        if (i % 2 === 0) {
            sum += i;
            count++;
        }
    }
    return [sum, count];
}

const getFactValue = (a) => {
    if (a < 0) {
        return null;
    }

    let fact = 1;
    if (a === 1 || a === 0) {
        return fact;
    }

    for (let i = 1; i <= a; i++) {
        fact *= i;
    }

    return fact;
}

const getSimpleValue = (a) => {
    if (a < 1) {
        return null;
    }

    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        }
    }

    return true;
}

const getSumNumbersValue = (a) => {
    let sum = 0;
    let temp = 0;

    if (a === 0) {
        return 0;
    }

    while (a) {
        temp = a%10;
        sum += temp;
        a = (a-temp)/10;
    }

    return sum;
}

const getMirrorValue = (a) => {
    let res = 0;

    while (a) {
        res = res * 10 + (a % 10);
        a = parseInt(a / 10);
    }

    return res;
}