// 과제 1 *
// border-left-width를 borderLeftWidth로 변경하기

// 해답
function camelize(str) {
    return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


// 과제 2 *
// 특정 범위에 속하는 요소 찾기
function filterRangeInPlace(arr, min, max) {
    return arr.filter(item => (min <= item && item <= max));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (조건에 맞는 요소)

alert( arr ); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)


// 과제 3
// 특정 범위에 속하는 요소 찾기(배열 변경하기)
function filterRangeInPlace(arr, min, max) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > min || arr[i] < max) {
            arr.splice(i, 1);
            i--; // 배열이 하나 지워지면 그만큼 크기가 줄어들고 값이 앞으로 옮겨지므로
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 1과 4 사이에 있지 않은 요소는 모두 제거함

alert( arr ); // [3, 1]


// 과제 4
// 내림차순으로 정렬하기
let arr = [5, 2, 1, -10, 8];

// 요소를 내림차순으로 정렬해주는 코드를 여기에 작성해보세요.
arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10


// 과제 5 *
// 배열 복사본을 정렬하기

// 해답
function copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)


// 과제 6 *
// 확장 가능한 계산기

// 해답
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
  
        return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


// 과제 7
// 이름 매핑하기
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

/* 여기에 코드를 작성하세요. */
let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary


// 과제 8 *
// 객체 매핑하기
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

/* 여기에 코드를 작성하세요. */
let usersMapped = users.map(item => ({
    fullName: item.name + " " + item.surname,
    id: item.id
}));

/*
usersMapped = [
    { fullName: "John Smith", id: 1 },
    { fullName: "Pete Hunt", id: 2 },
    { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith


// 과제 9 *
// 나이를 기준으로 객체를 정렬하기
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete


// 과제 10 *
// 배열 요소를 무작위로 섞기
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


// 과제 11
// 평균 나이 구하기
function getAverageAge(arr) {
    return arr.reduce((sum, item) => sum + item.age, 0) / arr.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// 과제 12
// 중복 요소 찾아내기
function unique(arr) {
    /* your code */
    let result = [];

    for(let value of arr) {
        if(!result.includes(arr)) {
            result.push(value);
        }
    }
    
    return result;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
alert( unique(strings) ); // Hare, Krishna, :-O