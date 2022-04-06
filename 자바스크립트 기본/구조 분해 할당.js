// 과제 1
// 구조 분해 할당
let user = { name: "John", years: 30 };

// 답안
let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


// 과제 2 *
// 최대 급여 계산하기
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// 해답
function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}