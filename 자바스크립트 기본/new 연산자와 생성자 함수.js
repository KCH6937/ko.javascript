// 과제 1
// 함수 두 개로 동일한 객체 만들기
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true


// 과제 2
// 계산기 만들기
function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);    
  };
  
  this.sum = function() {
    return this.a + this.b;
  };
  
  this.mul = function() {
    return this.a * this.b;
  };
  
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );


// 과제 3
// 누산기 만들기
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('더할 값을 입력해주세요.', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);