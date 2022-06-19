//보너스-1
//토끼초등학교만 골라낸 후, candy : 10개씩 각각 추가해주세요
//다람쥐초등학교만 골라낸 후, name 뒤에 "어린이"를 붙여주세요.

const classmates = [
  {name: "철수", age: 10, school: "토끼초등학교"},
  {name: "영희", age: 13, school: "다람쥐초등학교"},
  {name: "훈이", age: 11, school: "토끼초등학교"},
]
const aaa = classmates.filter((el)=>(el.school === "토끼초등학교"))
// console.log(aaa)
const bbb = aaa.map((el)=>({name: el.name, age: el.age, school: el.school, candy: "10개씩"}))
console.log(bbb)

const ccc = classmates.filter((el)=>(el.school === "다람쥐초등학교"))
// console.log(ccc)
const ddd = ccc.map((el)=>({name: el.name + "어린이", age: el.age, school: el.school, candy: "10개씩"}))
console.log(ddd)

// const eee = (bbb,ddd)

// ddd의 경우 배열이 3개뿐이므로 배열이 4개인 bbb와 개수가 맞지 않아 뒤에 candy: "10개씩"을 붙여 배열의 개수를 맞춰주지 않으면
// 서로 합쳐지지 않는다.
