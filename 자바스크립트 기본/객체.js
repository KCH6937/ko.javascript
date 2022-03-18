// 과제 1
// 객체야 안녕?
// 1.
let user = {}; // let user = new Object() 과 같음

// 2.
user.name = "John";

// 3.
user.surname = "Smith";

// 4.
user.name = "Pete";

// 5.
delete user.name;

// 과제 2
// 객체가 비어있는지 확인하기
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

// 해답
function isEmpty(object) {
    for (let key in object) {
        return false;
    }
    return true;
}

// 과제 3
// 변하지 않는 객체?
const user = {
    name: "John"
  };
// 아래 코드는 에러 없이 실행될까요?
user.name = "Pete"; // 가능함
// 변수 user의 값을 바꾸는건 X 객체 안의 프로퍼티를 바꾸는 건 O

// 과제 4
// 프로퍼티 합계 구하기
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

// 해답
let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// 과제 5
// 프로퍼티 값 두배로 부풀리기
// 함수 호출 전
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);

// 함수 호출 후
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

// 해답
function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof(obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}
