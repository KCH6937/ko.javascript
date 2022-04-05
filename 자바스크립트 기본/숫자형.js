// 과제 1
// 수를 입력받아 덧셈하기
let a = +prompt("number 1", ""); // * prompt 앞의 +가 입력받은 값을 숫자형으로 변환
let b = +prompt("number 2", "");

alert(a + b);


// 과제 2
// 6.35.toFixed(1) == 6.3인 이유는 무엇일까요? => 정밀도 손실로 인해 오차가 발생함 => 6.349999999...
alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3

alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(반올림됨) -> 6.4


// 과제 3
// 숫자를 입력할 때까지 반복하기
function readNumber() {
    while(true) {
        let a = prompt("value is", 0);
        
        if(a === null || a === "") {
        	alert(null);
            return;
        };
        
        if(isFinite(a)) {
            a = +a;
            alert(a);
            break;
        }
        alert("not a number");
        continue;
    }
}
readNumber();

// 해답
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);