// 과제 1
// 첫 글자를 대문자로 변경하기
function ucFirst(str) {
    if(!str) return str; 

	let first = str[0].toUpperCase();
    return first + str.slice(1, str.length);
}

alert(ucFirst("john") == "John");

// 해답
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
}
  
alert( ucFirst("john") ); // John


// 과제 2
// 스팸 문자열 걸러내기
function checkSpam(str) {
    str = str.toLowerCase();
    if(str.includes("viagra") || str.includes("xxx")) {
        return false;
    }
    return true;
}

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false

// 해답
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


// 과제 3
// 문자열 줄이기
function truncate(str, length) {
    if(str.length > length) {
        return str.slice(0, length - 1) + '…';
    }
    return str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));

alert(truncate("Hi everyone!", 20));

// 해답
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}


// 과제 4
// 숫자만 추출하기(앞에 $ 표시가 붙는 문자열이 있다고 가정)
function extractCurrencyValue() {
    return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); // true
