// 1. 변수 선언
// var let const
// 실무에서는 대부분  const 사용, 재할당이 필요한 경우에만  let을 사용함

// 1)유효범위
//var :  함수단위  scope
// let, const :  블록단위  scope
// 2)재할당 가능
// var, let :  가능
// const :  불가능

for (var i = 0; i < 5; i++) {
  console.log("안쪽" + i);
}
console.log("바깥쪽" + i); // 5를 출력함.

for (let j = 0; j < 5; j++) {
  console.log("안쪽" + j); // 오류발생함.
}
console.log("바깥쪽" + j); //실행시 오류 : VM35:9 Uncaught ReferenceError: j is not defined at <anonymous>:9:19

// hoisting
// tdz : let, const로 사용함.  https://ui.toast.com/weekly-pick/ko_20191014
console.log(a);
var a = 5;
console.log(a);

console.log(b);
let b = 5;
console.log(b);

// -----------------------------
// 2. 선언방법
// 함수 선언식, 함수 표현식

//함수 선언식
// hoisting 이 되기 때문에 아래같이 해도 오류가 발생하지 않음
add(4, 5);
function add(a, b) {
  return a + b;
}

//함수 표현식
// 오류가 발생
minus(4.5);

var minus = function (a, b) {
  return a - b;
};

// 1) 화살표 함수
minus2(a, b);
const minus2 = (a, b) => {
  return a - b;
};
// 아래 위가 동일한 의미,  return 생략 가능.
//화살표 함수 실제 많이 사용하는 사례
minus3(a, b);
const minus3 = (a, b) => a - b;

// 2) 비구조할당
// javascript 객체

const person1 = {
  name: "jason",
  age: 28,
  major: "Computer",
};
console.log("이름은 " + person1.name + "입니다.");
console.log("나이는 " + person1.age + "세 입니다.");
console.log("전공은 " + person1.major + "전공입니다.");

// => 비구조화 할당으로 변경(객체, 배열 등 사용 )
const person1 = {
  name1: "jason",
  age: 28,
  major: "Computer",
};
const { name1, age, major } = person1;

console.log("이름은 " + name1 + "입니다.");
console.log("나이는 " + age + "세 입니다.");
console.log("전공은 " + major + "전공입니다.");

//배열의 비구조화 할당 예
const arr1 = [1, 2, 3, 4];
const [first, second] = arr1; // arr[0]=1, arr[1] =2 의 의미

// 3 디폴트 파라미터 기능 = 자주 사용하지 않음

// 4 템플릿 리터럴 // ``와  ${변수명}으로 표기
// console.log("이름은 "+ name1 +"입니다.")
// => console.log(`이름은 ${name1} 입니다.`)
const person1 = {
  name1: "jason",
  age: 28,
  major: "Computer",
};
const { name1, age, major } = person1;
console.log(`
            이름은 ${name1} 입니다.
            나이는 ${age} 세 입니다.
            전공은 ${major} 전공입니다.
            `);

//객체, 배열의 값을 복사하여 사용 가능,  ...
//const person2 = {...person1, age:24}  // person1 의 값을 넣어 주고  age는 24로 변경, 순서가 중요
//const arr2[] = [...arr1]

//
const person1 = {
  name1: "jason",
  age: 28,
  major: "Computer",
};
const locationInfo = {
  country: "Korea",
  city: "Seoul",
};
const person2 = {
  ...person1,
  ...locationInfo,
  age: 24,
};
console.log(person2.name1, person2.city);

// 3)원시 타입, 참조타입
//참조타입 : 객체 , 배열, 함수
//원시타입 : 숫자, 스트링, boolean, null, undefined
// [Java] - 깊은 복사(Deep Copy) vs 얕은 복사(Shallow Copy)
// [JavaScript] 얕은 복사(shallow copy) vs 깊은 복사(deep copy)
