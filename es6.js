// var let const

// 1. 유효범위(scope)
// var : 함수단위scope
// let, const : 블록단위
// 2. 재할당 가능
// var, let : 가능
// const : 불가능

for (var i = 0; i < 5; i++) {
  console.log("안쪽" + i);
}

console.log("바깥쪽" + i);

for (let j = 0; j < 5; j++) {
  console.log("안쪽" + j);
}
console.log("바깥쪽" + j);

hoisting;
tdz;

console.log(a);
var a = 5;
console.log(a);

console.log(b);
let b = 6;
console.log(b);

// const : 재할당 불가능
// let : 재할당 가능

// 함수선언식
add(3, 4);
function add(a, b) {
  return a + b;
}

// 함수 표현식
minus(6, 4);
var minus = function (a, b) {
  return a - b;
};

minus2(1);
const minus2 = (a, b = 5) => {
  return a - b;
};
const minus3 = (a, b) => a - b;

const person1 = {
  name1: "jason",
  age: 20,
  major: "Computer",
};
const locationInfo = {
  country: "Korea",
  city: "Seoul",
};

const subMajor = "Math";
const person2 = {
  ...person1,
  ...locationInfo,
  age: 24,
  subMajor,
};

const { name1, age, major } = person1;

console.log("이름은 " + name1 + "입니다.");
console.log("나이는 " + age + "세 입니다.");
console.log("전공은 " + major + "전공 입니다.");
// 템플릿 리터럴
console.log(`
    이름은 ${name1}입니다. 
    나이는 ${age}세입니다.
    전공은 ${major}전공 입니다.
`);

const arr1 = [1, 2, 3, 4];
// const first = arr1[0];
// const second = arr1[1]
const [first, second] = arr;

const arr2 = [0, ...arr1, 5];
