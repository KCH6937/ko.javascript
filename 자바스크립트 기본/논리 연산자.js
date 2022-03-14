// * 핵심: AND 연산자가 첫 번째 falsy를 반환하는 반면, OR은 첫 번째 truthy를 반환한다는 것입니다.
// * 연산자 우선순위 AND > OR

let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛

// 과제 1
// 다음 OR 연산의 결과는 무엇일까요?
alert( null || 2 || undefined ); // 2

// 과제 2
// QR 연산자의 피연산자가 alert 라면?
alert( alert(1) || 2 || alert(3) ); // alert(1) => alert(2)

// 과제 3
// 다음 AND 연산의 결과는 무엇일까요?
alert(1 && null && 2); // alert(null)

// 과제 4
// AND 연산자의 피연산자가 alert 라면?
alert( alert(1) && alert(2) ); // alert(undefined)

// 과제 5
// OR AND OR 연산자로 구성된 표현식
alert( null || 2 && 3 || 4 ); // alert(3)

// 과제 6
// 사이 범위 확인하기
if(age >= 14 && age <= 90) {
    console.log("14세 이상, 90세 이하입니다.");
}

// 과제 7
// 바깥 범위 확인하기
if(!(age >= 14 && age <= 90)) { // == (age < 14 || age > 90)
    console.log("14세 이상, 90세 이하가 아닙니다.");
}

// 과제 8
// "if"에 관한 고찰
if (-1 || 0) alert( 'first' ); // 실행 O
if (-1 && 0) alert( 'second' ); // 실행 X
if (null || -1 && 1) alert( 'third' ); // 실행 O