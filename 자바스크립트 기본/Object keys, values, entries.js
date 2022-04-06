// 과제 1
// 프로퍼티 값 더하기
function sumSalaries(obj) {
    let sum = 0;

    for(let value of Object.values(obj)) {
        sum += value;
    }

    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650


// 과제 2
// 프로퍼티 개수 세기
function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};
  
alert( count(user) ); // 2