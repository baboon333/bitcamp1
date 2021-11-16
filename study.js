var readlineSync = require('readline-sync');

//난수 생성 후 보여줌
let num = parseInt(Math.random() * 10)
console.log(num)

//odd인지 even인지 물어봄//답을 받기 위해 readline sync모듈
let answer = readlineSync.question('ODD? EVEN?');

//맞으면 정답 그 외는 오답

if (num % 2 == 1 && answer == "O") {
    console.log("정답입니다!")
}else if (num % 2 == 0 && answer == "E"){
    console.log("정답입니다!")
}else{
    console.log("오답입니다ㅋ")
}