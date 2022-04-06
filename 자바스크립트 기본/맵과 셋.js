// 과제 1 *
// 배열에서 중복 요소 제거하기

// 해답
function unique(arr) {
    /* 제출 답안 */
    return Array.from(new Set(arr)); 
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.

// 과제 2 *
// 에너그램 걸러내기

// 해답
function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
        // 단어를 글자 단위로 쪼갠 후, 알파벳 순으로 정렬한 다음에 다시 합칩니다.
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }
  
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.

// 과제 3 *
// 반복 가능한 객체의 키

// 해답
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); // name, more