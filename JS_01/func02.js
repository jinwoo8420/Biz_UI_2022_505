const num1 = 10; // 선언과 동시에 값 지정(초기화)
// num1 = 30; => const로 선언한 변수에는 다시 값을 저장 할 수 없다

// 선언과 동시에 값 지정 또는 선언 후 값 지정
let num2;
num2 = 100; // 이후에 값일 다시 저장(변경) 할 수 있음
num2 = 200;

// 함수 선언
// 매개변수로 num1을 갖는 fun1 함수 선언
function fun1(num1) {
  console.log(num1);
}

fun1();
fun1(100);

/*
두개의 매개변수를 갖는 add 함수 선언

이 함수는 두개의 매개변수 값을 덧셈하여 return한다
*/
function add(num1, num2) {
  return num1 + num2;
}

const result1 = add(100, 200);
console.log(result1);

const str = add("Korea", "대한민국");
console.log(str);
