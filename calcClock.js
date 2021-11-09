
let hour = 4 // 나중에 변경하고 싶은 값이니 const말고 let으로
const min = 47

// 시침의 각도
let hourD = (360 / 12) * hour  //D: degree   // 나중에 변경하고 싶은 값이니 const말고 let으로

// 분침의 각도
const minD = (360 / 60) * min

//  분에 따른 시침의 추가적인 이동
const extra = (30 / 60) * min

hourD = hourD + extra  //이거를 축약해서 쓰면 hourD += extra임.   //+=: 복합대입연산자(p. 290)

console.log(hourD, minD)

const gap = hourD - minD

console.log(gap)

//우리는 지금 내각을 구하는건데 내각은 180보다 작아야 함. 그리구 음수면 안돼!
//예를 들어, 1시 47분의 경우는 180도가 넘잖아