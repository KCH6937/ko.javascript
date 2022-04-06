// 과제 1 *
// '읽음'상태인 메시지 저장하기
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// 해답
let readMessages = new WeakSet();

// 메시지 두 개가 읽음 상태로 변경되었습니다.
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages엔 요소 두 개가 저장됩니다.

// 첫 번째 메시지를 다시 읽어봅시다!
readMessages.add(messages[0]);
// readMessages에는 요소 두 개가 여전히 저장되어 있습니다(중복 요소 없음).

// "'message[0]'은 읽음 상태인가요?"에 대한 답변
alert("message 0은 읽음 상태인가요?: " + readMessages.has(messages[0])); // true

messages.shift();
// 이제 readMessages에는 요소가 하나만 남게 되었습니다(실제 메모리에서 사라지는 건 나중이 되겠지만 말이죠).