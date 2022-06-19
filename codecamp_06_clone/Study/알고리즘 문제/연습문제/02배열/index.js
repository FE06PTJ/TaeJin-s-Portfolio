//3. 배열의 선언과 할당
//주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.
const fruits = []
fruits.push("사과","바나나","파인애플")
fruits.unshift("키위","망고")
fruits.pop()
fruits.shift()

console.log(fruits)

//4. 배열의 기능
//주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요
let fruits1 = ["사과","바나나","파인애플"]

const newFruits = []
newFruits.push(fruits1[fruits1.length-1])
// newFruits = fruits.pop()

console.log(newFruits)

//5. 배열의기능
//학생들의 이름이 담긴 students 배열이 있습니다.
//배열에서 2번 째 요소까지의 데이터들을 뽑아 새로운 배열을 만드세요.
let students = ["철수","영희","훈이","짱구","유리"]

let newArr = students.slice(0,3)

console.log(newArr)

//6.배열의 기능
//주어진 fruits 배열의 모든 요소에 "맛있는" 이라는 문자열을 추가하세요.
let fruits2 = ["사과","바나나"]

fruits2[0]="맛있는 " + fruits2[0]
fruits2[1]="맛있는 " + fruits2[1]

console.log(fruits)

//7.문자열 배열
//상수 number는 핸드폰 번호가 담긴 문자열입니다. 
//해당 문자열을 "010", "1234", "5678"로 나눈 배열을 만드세요.
const number = "01012345678"

let arr1 = number.slice(0,3)
let arr2 = number.slice(3,7)
let arr3 = number.slice(7,11)

let arr = [arr1,arr2,arr3]
console.log(arr)

