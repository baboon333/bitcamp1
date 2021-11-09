const prompt = require('prompt-sync')(); // 이런 외부효과 쓸 때는 맨 위에다가 써준다.

const num = parseInt((Math.random() *100) % 2)  // ()는 우선순위 연산자  // (검색)js 소수를 정수로 만드는법 - parseInt()함수 파쓰인트함수
//https://www.delftstack.com/ko/howto/javascript/javascript-float-to-int/

console.log(num)

//사용자에게 입력
const answer = prompt("ODD O? EVEN E? ")

//사용자에게 입력받은 값 검색하다가 이거 찾음. https://www.npmjs.com/package/prompt-sync에서 복붙하는 데 있는 npm i prompt-sync 이거를 밑에 terminal에다가 복붙해서 붙여준다.
//이렇듯 node.js는 필요할 때마다 기능을 검색해서 추가해서 쓴다.

//num 이 0이고 answer가 E
//if(num === 0 && answer === "E" ){
//    console.log("정답")
//}else if(num === 1 && answer === "O"){
//    console.log("정답")
//}else {
//    console.log("오답")
//} //둘의 유형이 같으니까 일치연산자 써줌 //&&는 논리연산자(and)

//num이 1이고 answer가 O

//JS 동등연산자 검색: 동등 연산자는 "==" 처럼 이퀄기호가 2개 있는 것
//동등 연산자 ==는 두 값을 비교하고, 일치 연산자 ===는 두 값과 그 유형을 비교하고, 더하기 연산자 +는 두 숫자를 합하거나 두 문자열을 연결합니다.

//위 식을 더 간결하게 하려면
const condition1 = num === 0 && answer === "E"
const condition2 = num === 1 && answer === "O"
if(condition1 || condition2) {        //if : 제어문
    console.log("정답")
    return                        //return: 실행의 제어권을 반환하는 키워드.  if else 대신 if return을 쓴 코드임.
}
console.log("오답")

//------------------
//삼항연산자로 식을 더 간결하게 하면 - 삼항연산자는 반드시 결과를 반환해야 함.
//3개의 피연산자를 필요로 함.  조건식? 값or연산식 : 값 or 연산식;
//const condition1 = num === 0 && answer === "E"
//const condition2 = num === 1 && answer === "O"

//const result = condition1 || condition2 ? "정답":"오답"

//console.log(`최종결과는 ${result}`) `` //백틱 ` 키보드 1옆에 보면 있음