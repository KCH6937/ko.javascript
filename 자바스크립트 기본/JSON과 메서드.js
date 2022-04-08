// 과제 1
// 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기
let user = {
    name: "John Smith",
    age: 35
};

// 정답
JSON.parse(JSON.stringify(user));


// 과제 2 *
// 역참조 배제하기
let room = {
    number: 23
};
  
let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
  
// 순환 참조
room.occupiedBy = meetup;
meetup.self = meetup;
  
alert( JSON.stringify(meetup, function replacer(key, value) {
    // 해답
    return (key != "" && value == meetup) ? undefined : value;
}));
  
/* 얼럿창엔 아래와 같은 결과가 출력되어야 합니다.
{
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
}
*/