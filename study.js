//4시 47분 각도
const hour = 4
const min = 47

//시침 각도
const hourD = (360 / 12) * hour

//분침 각도
const minD = (360/60) * min

//분침 이동에 따른 시침 이동 각도
const plus = hourD + ((360 / 12) / 60 ) * min

//시침 - 분침 각도
const result = plus - minD

//180보다 작으면 360-나온 값 //음수면 -를 곱해줘야함
if (result > 180) {
    console.log(360 - result)
}else if (result < 0) {
    console.log(result * -1)
}else{
    console.log(result)
}
