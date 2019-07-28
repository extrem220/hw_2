/*Arrays*/

/*Min value in array*/
const getMinValueInArray = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let temp = a[0];

    for (let i = 0; i < a.length; i++) {
        if (temp >= a[i]) {
            temp = a[i];
        }
    }

    return temp;
}
/*Max value in array */
const getMaxValueArray = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let temp = a[0];

    for (let i = 0; i < a.length; i++) {
        if (temp <= a[i]) {
            temp = a[i];
        }
    }

    return temp;
}
/*Max index value in array */
const getMaxIndexValue = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let value = a[0];
    let temp = 0;

    for (let i = 0; i < a.length; i++) {
        if (value <= a[i]) {
            value = a[i];
            temp = i;
        }
    }

    return temp;
}
/*Min index value in array*/
const getMinIndexValue = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let value = a[0];
    let temp = 0;

    for (let i = 0; i < a.length; i++) {
        if (value >= a[i]) {
            value = a[i];
            temp = i;
        }
    }

    return temp;
}
/*Sum odd values*/
const getSumOddValues = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        if(i%2 !== 0){
            sum += a[i];
        }
    }

    return sum;
}
/*Count odd values*/
const getCountOddValues = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if(a[i]%2 !== 0){
            count++;
        }
    }

    return count;
}
/*Reverse array*/
const getReverseArray = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let temp = 0;

    for (let i = 0; i < a.length-i-1; i++) {
        temp = a[i];
        a[i] = a[a.length-i-1];
        a[a.length-i-1] = temp;
    }

    return a;
}
/*Change place array*/
const getChangePlaceArray = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let temp = 0;
    let med = parseInt(a.length/2);

    for (let i = 0; i < med; i++) {
        if (a.length%2 === 0) {
            temp = a[i];
            a[i] = a[med+i];
            a[med+i] = temp;
        } else {
            temp = a[i];
            a[i] = a[med+i+1];
            a[med+i+1] = temp;
        }
    }

    return a;
}
/*Bubble sort*/
const getBubbleSort = (a) => {
    if (a.length === 0 ) {
        return null;
    }

    let temp = 0;

    for(let i = a.length-1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}