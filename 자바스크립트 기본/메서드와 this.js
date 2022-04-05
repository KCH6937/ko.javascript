// 과제 1
// 객체 리터럴에서 this 사용하기
function makeUser() {
    return {
      name: "John",
      ref: this
    };
};
  
let user = makeUser();
  
alert( user.ref.name );
  
  
// 과제 2
// 계산기 만들기
let calculator = {
    read() {
        this.a = +prompt('첫 번째 값:', 0);
        this.b = +prompt('두 번째 값:', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }

}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// 과제 3
// 체이닝
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
      alert( this.step );
    }
};