// 과제 1
// 문자열에 프로퍼티를 추가할 수 있을까요?
let str = "Hello";

str.test = 5; // (*)

alert(str.test); // error

// 원시값에 프로퍼티를 추가할 수는 없다.