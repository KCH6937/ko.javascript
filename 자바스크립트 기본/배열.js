// 과제 1
// 배열은 복사가 될까요?
let fruits = ["사과", "배", "오렌지"];

// 배열을 '복사'한 후, push 메서드를 이용해 새로운 값을 추가합니다.
let shoppingCart = fruits;
shoppingCart.push("바나나");

// fruits에 어떤 값이 들어 있을까요?
alert( fruits.length ); // 정답 4
// 배열도 객체이므로 참조 자료형이 된다.


// 과제 2
// 배열과 관련된 연산
// 1. 요소 “Jazz”, "Blues"가 있는 styles 배열을 생성합니다.
let styles = ["Jazz", "Blues"];
// 2. "Rock-n-Roll"을 배열 끝에 추가합니다.
styles.push("Rock-n-Roll");
// 3. 배열 정 중앙에 있는 요소를 "Classics"로 바꿉니다. 가운데 요소를 찾는 코드는 요소가 홀수 개인 배열에서도 잘 작동해야 합니다.
styles[Math.floor((styles.length - 1) / 2)] = "Classics"
// 4. 배열의 첫 번째 요소를 꺼내서 출력합니다.
alert(styles.shift);
// 5. "Rap"과 "Reggae"를 배열의 앞에 추가합니다.
styles.unshift("Rap", "Reggae");

console.log(str);


// 과제 3
// 배열 컨텍스트에서 함수 호출하기
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // 해답: a,b,function(){...} => 객체 자체가 호출됨


// 과제 4
// 입력한 숫자의 합 구하기
function sumInput() {
    let values = [];

    while(true) {
        let value = prompt("input number", 0);

        if (value === "" || value === null || !isFinite(value)) break;
        
        arr.push(+value);
    }
    
    let sum = 0;
    for(let value of values) {
        sum += value;
    }
    return sum;
}

alert( sumInput() );

// 해답
function sumInput() {

    let numbers = [];
  
    while (true) {
  
        let value = prompt("숫자를 입력해 주세요.", 0);
  
        // 입력받는 것을 정지해야 하는 경우
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}