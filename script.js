// Mission 1
function Mission1(numArr){
    let evenArr = [];
    for (let index = 0; index < numArr.length; index++) {
        const element = numArr[index];
        if (element % 2 == 0){
            evenArr.push(element);
        };
    };
    return evenArr;
}
let arr = [3, 4, 5, 6, 7, 8];
console.log(Mission1(arr));

// Mission 2
function Mission2(str){
    let currentWord = 0;
    let amount = 0;
    for (let index = 0; index <= str.length; index++) {
        const element = str[index];
        if (element === ' ' || index === str.length){
            if (currentWord === 4){
                amount ++;
            }
            currentWord = 0;
        }
        else {
            currentWord ++;
        }
    }
    return amount;
}

console.log(Mission2('iwu wiuhe ffiuehf hfej roro orifjoer kkr poripewoih jrki'));

// Mission 4
function Mission4(numArr){
    let up = 1;
    let down = 1;
    let result = 0;
    for (let index = 0; index < numArr.length - 1; index++) {
        const element = numArr[index];
        const nextElement = numArr[index +1];
        if (element > nextElement){
            down ++;
        }
        else if (element < nextElement) {
            up ++;
        }    
    };
    if (up == numArr.length){
        result = 1;
    }
    else if (down == numArr.length){
        result = 2;
    }
    else {
        result = 0;
    }
    return result;
}

console.log(Mission4([3, 2, 1]))

// Mission 6
function Mission6(n){
    if (n === 0){
        return 0;
    }
    if (n === 1){
        return 1;
    }
    return Mission6(n - 1) + Mission6(n - 2);
}
console.log(Mission6(9));

module.exports = {Mission1, Mission2, Mission4, Mission6};