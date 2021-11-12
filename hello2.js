const prompt = require('prompt-sync')(); // 이런 외부효과 쓸 때는 맨 위에다가 써준다. //다운받은 모듈을 사용하기 위해 require 함수를 써준 것.

const num = parseInt((Math.random() *100) % 2)  // ()는 우선순위 연산자  // (검색)js 소수를 정수로 만드는법 - parseInt()함수 파쓰인트함수
//https://www.delftstack.com/ko/howto/javascript/javascript-float-to-int/
//난수 생성하기 https://hianna.tistory.com/454  // Math.random() 함수는 0~1 사이의 부동소수점 난수를 생성

console.log(num)

//사용자에게 입력
const answer = prompt("ODD O? EVEN E? ")

//사용자에게 입력받은 값 검색하다가 이거 찾음(https://newline.tistory.com/72). https://www.npmjs.com/package/prompt-sync에서 복붙하는 데 있는 npm i prompt-sync 이거를 밑에 terminal에다가 복붙해서 붙여준다.
//이렇듯 node.js는 필요할 때마다 기능을 검색해서 추가해서 쓴다.

//num 이 0이고 answer가 E, num이 1이고 answer가 O => 정답
//if(num === 0 && answer === "E" ){
//    console.log("정답")
//}else if(num === 1 && answer === "O"){
//    console.log("정답")
//}else {
//    console.log("오답")
//} //둘의 유형이 같으니까 일치연산자 써줌 //&&는 논리연산자(and)

//JS 동등연산자 검색: 동등 연산자는 "==" 처럼 이퀄기호가 2개 있는 것
//동등 연산자 ==는 두 값을 비교하고, 일치 연산자 ===는 두 값과 그 유형을 비교하고, 더하기 연산자 +는 두 숫자를 합하거나 두 문자열을 연결합니다.

//위 식을 더 간결하게 하려면
const condition1 = num === 0 && answer === "E"
const condition2 = num === 1 && answer === "O"
if(condition1 || condition2) {        //if : 제어문 if()의 괄호 안의 비교연산은 오직 true일 때만 수행
    console.log("정답")
    return                        //return: 실행의 제어권을 반환하는 키워드.  if else 대신 if return을 쓴 코드임. break와 비슷한 기능으로 일단은 함수를 종료한다고 보자
}
console.log("오답")

//------------------
//삼항연산자로 식을 더 간결하게 하면 - 삼항연산자는 반드시 결과를 반환해야 함.
//3개의 피연산자를 필요로 함.  조건식? 값or연산식 : 값 or 연산식;
/*
const condition1 = num === 0 && answer === "E"
const condition2 = num === 1 && answer === "O"

const result = condition1 || condition2 ? "정답":"오답"

console.log(`최종결과는 ${result}`) //백틱 ` 키보드 1옆에 보면 있음*/