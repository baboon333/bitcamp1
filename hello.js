//console.log("Hello World")

//-------------

//변수 사용법
//let num = 10 (나중에 바꿀 수 있음)
//const num = 10(상수 - 한번 값이 들어가면 내용물 못 바꿈) 이 두개만 알아두면 된다. 두개가 범위를 지정해주면서 변수 선언해주는거니.
//var는 범위 지정이 안돼서 위험함!
//끝에 ;써도 되고 안써도 된다


//문/식
//const num = 10
//num = 20    const는 상수이기 때문에 값을 바꾸지 못해 이렇게 쓰면 오류난다

//var num = 10  이제 안쓰는 변수. 범위 지정이 안되기 때문에. var는 바라고 읽음



//-------------
{
   {
        {
            {
                var num = 10
                console.log("HHH")
            }
        }
    }
}
console.log(num)
//java는 범위에 벗어나니 ㅇㅣ런 코드 쓰면 에러나는데 얘는 안남. var 대신 let을 쓰면 오류남. let을 쓰면 scope가 정의되기 때문.
//얘는 오류 없이 10 출력
//한번에 여러 줄 주석 처리 단축키: ctrl + shift + /
//--------------------------



//console.log(num)

//var num = 10

//console.log("after......")
//console.log(num)
//----------
//var num
//console.log(num)
//
// num = 10
//
// console.log("after......")
// console.log(num)
//이거랑 위에꺼랑 사실상 똑같은 식임. 이게 호이스팅. var num 선언문(구문)이 첫번째 동작에서 먼저 이루어진 것이고 두번째에서 식이 실행된다.

//1. 구문인 var num(선언문)만 읽는다.
//2. 식을 읽어서 실행이 이루어진다.
//호이스팅(찾아보기) : 자바스크립트 면접 문제 1번 js 호이스팅: 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것을 말한다.
// https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html

















