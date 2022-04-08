// 과제 1
// 주어진 숫자까지의 모든 숫자 더하기
function sumTo(number) {
    if(number == 1) return 1;
    return number + sumTo(number - 1);
}


// 과제 2
// 팩토리얼 계산하기
function factorial(number) {
    if(number == 1) return 1;
    return n * factorial(number - 1);
}


// 과제 3 *
// 피보나치 수 계산하기
// 해답
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


// 과제 4 *
// 단일 연결리스트 출력하기
let list = {
    value: 1,
    next: {
      value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// 해답
function printList(list) {
    alert(list.value);
    
    if(list.next) {
        printList(list.next);
    }
}

printList(list);


// 과제 5
// 단일 연결리스트를 역순으로 출력하기
function printListReverse(list) {
    
    if(list.next) {
        printListReverse(list.next);
    }

    alert(list.value);

}

printListReverse(list);