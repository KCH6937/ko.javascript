// 과제 3
// counter는 독립적일까요? 
// => 두 함수는 독립적인 렉시컬 환경을 갖게 되므로 각 함수는 자신만의 count를 갖게 됨
function makeCounter() {
    let count = 0;
  
    return function() {
        return count++;
    };
}
  
let counter = makeCounter();
let counter2 = makeCounter();
  
alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1


// 과제 4
// counter 객체
function Counter() {
    let count = 0;
  
    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}
  
let counter = new Counter();
  
alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1


// 과제 5
// if문 안의 함수
let phrase = "Hello";

if (true) {
  let user = "John";

    function sayHi() {
        alert(`${phrase}, ${user}`);
    }
}

sayHi(); // error => if문 안(블록 내부) 에서 선언했기 때문에 그 안에서만 호출 가능


// 과제 6 *
// 클로저를 이용하여 합 구하기
// 풀이 : 두 번째 괄호가 제대로 동작하려면 첫 번째 괄호는 반드시 함수를 반환해야 합니다.

// 해답
function sum(a) {

    return function(b) {
        return a + b; // 'a'는 외부 렉시컬 환경에서 가져옵니다.
    };
  
}

alert( sum(1)(2) ); // 3
alert( sum(5)(-1) ); // 4


// 과제 8
// 함수를 이용해 원하는 값만 걸러내기

/* ... 여기에 두 함수 inBetween과 inArray을 만들어주세요 ...*/
// 해답
function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2