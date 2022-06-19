//배열에 원소를 추가하거나 제거하는 메서드
//push/pop, unshift/shift, splice, slice, concat

//배열을 변형하는 메서드
//map, sort, reverse, split, join, reduce, reduceRight


        //push/pop
//배열의 맨뒤에 추가하고 제거하는 메서드
let fruits = ["포도","복숭아","딸기","수박"]

fruits.push("바나나")

let banana = fruits.pop()


console.log(banana)
console.log(fruits)
//push는 한번에 여러개의 원소를 넣어줄 수 있지만, pop은 빼올 수 잇는 원소가 배열의 맨 뒤 원소뿐.
//push는 새롭게 추가된 원소를 반영하여 새로운 배열을 반환.
//pop은 제거된 원소를 반환
//빈 배열에 pop한 경우 undefined를 반환
//배열에 undefined를 push가능


        //unshift/shift
//배열의 맨앞에 추가하고 제거하는 메서드
let catName = ["크림이","미몽이"]
catName.unshift("흑매")
let catName1 = catName.shift()


console.log(catName1)
console.log(catName)
//push/pop은 length속성을 가지지만 unshift/shift는 가지지 않음.


        //splice
//배열의 기존 요소를 삭제, 교체, 추가하여 배열의 내용을 변경.
//arr.splice(원소가공을 시작할 인덱스 위치, 제거할 원소갯수, 추가해줄 원소)
//추가
let need = ["떡볶이", "레드콤보", "초코라떼", "삼겹살"]
need.splice(2,0,"케이크")
console.log(need)
//제거
let need1 = ["떡볶이", "레드콤보", "초코라떼", "삼겹살"]
let one = need1.splice(0,2)
console.log(need1)
//교체
let need2 = ["떡볶이", "레드콤보", "초코라떼", "삼겹살"]
let two = need2.splice(2,1,"벨벳케이크")
console.log(need2)
//splice는 제거된 원소를 배열로 반환. 추가해줄 원소가 여러개 가능.


        //slice
//배열의 원소를 잘라 새로운 배열에 반환하는 메서드
//arr.slice(자르기 시작할 인덱스, 자르기를 종료할 인덱스)
let frontTeam = ["은정","혜원","동휘","시은","하나"]
let mentoTeam = frontTeam.slice(2,4)

console.log(mentoTeam)
console.log(frontTeam)
//slice

// 1. 배열, 문자열에서 사용가능한 메서드
// 2. 원본이 저장되지 않는다.

str = "abcde"

str.slice( 1, 4 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
str.slice( 1, 3 + 1 ) //자르기시작할 인덱스, 자르기 끝낼 인덱스 +1
str.slice( 1 ) //문자열 끝까지 잘라오기
str.slice( 1, str.length ) //문자열 끝까지 잘라오기


        //concat
//2개 이상의 배열을 합쳐주거나 배열에 값을 이어 붙여주는 메서드
//배열합치기
//arr1.concat(arr2,arr3)
//원소 이어붙이기
//arr.concat(추가할 원소)
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = ["한","글"]

let concatArr= arr1.concat(arr2,"여기는한글",arr3)

console.log(concatArr)


        //map
//배열의 모든 원소에 대해 함수를 호출한 결과를 모아 새로운 배열을 반환.
//실무에서는 반복문으로 자주 사용.
//arr.map(  (arr_item) => {모든배열의 원소에게 반복실행할 코드}  )
let num = [1,2,3,4,5]
let newNum = num.map((num_item) => num_item*3)

console.log(newNum)
//메서드 안희 함수의 매개변수는 num의 모든 원소들이 한번씩 들어가게 된다. 즉, num의 원소들.
//{}가 생략된다면 바디의 코드가 암묵적으로 리턴.
//매개변수가 1개일 경우 괄호 생략 가능
//모두 적을시 리턴을 적어야 함.


        //sort
//배열의 모든 원소를 적절한 위치에 정렬 후 해당 배열을 반환.
//기본적인 정렬 순서는 문자열의 유니코드를 따름.
//arr.sort(  () => {비교기준함수.없을시 기본정렬})

//숫자열에서 비교기준 함수
//오름차순
//arr.sort(  (a,b)=>{return a-b}  )
//내림차순
//arr.sort(  (a,b)=>{return b-a}  )

//문자열에서 비교기준 함수
//오름차순
//arr.sort(  (a,b)=>{return a < b ? -1 : 1}  )
//내림차순
//arr.sort(  (a,b)=>{return a > b ? -1 : 1}  )
let array = ["c","o","d","e","c","a","m","p"]
array.sort((a,b)=>{return a < b ? -1 : 1})
array.sort((a,b)=>{return a > b ? -1 : 1})

let array1 = [5,4,6,2,3,6,4,3,7]
array1.sort((a,b)=>{return a-b})
array1.sort((a,b)=>{return b-a})


        //reverse
//배열의 순서를 반전해주는 메서드.
let array2 = ["three","two","one"]
let reverse = array2.reverse()

console.log(reverse)


        //split
//특정 문자열을 일정한 기준으로 잘라 배열로 반환하는 메서드.
//str.split(구분자, 횟수 제한)
//구분자 : 문자열을 잘라올 기준이 되는 것.
let num1 = "010-8954-3495"
let splitNum = num1.split("-",2)

console.log(splitNum)


        //join
//배열의 모든 원소를 연결해 하나의 문자열로 반환하는 메서드.
//arr.join(구분자)
//구분자가 있을 때는 해당 구분자를 문자열로 반환하지만, 생략하면 모든 요소들이 쉼표로 구분됨.
let arr = ["코","드","캠","프"]
let str = arr.join("")
console.log(str)

let array3 = ["코","드","캠","프"]
let str3 = arr3.join("와")
console.log(str3)


        //reduce
//각 배열의 원소에 대해 함수를 실행하고, 하나의 결과값을 반환.
//배열의 총 원소의 합을 구해야 할 떄 사용
//arr.reduce(  (누적값, 현재값)=>{현재값+누적값}, 초기값  )
//초기값은 처음 연산을 시작할 때 깔아놓는 값. 
//반환값은 초기값 + 모든 원소 연산값
//초기값이 없으면 0이 기본값
let arr4= [1,2,3,4,5,6,7,8,9]
arr4.reduce((acc,cur)=>{
  console.log(`누적값: ${acc}, 현재값 : ${cur}`)
  return acc+cur
})

let arr5= [1,2,3,4,5,6,7,8,9]
arr5.reduce((acc,cur)=>{
  console.log(`누적값: ${acc}, 현재값 : ${cur}`)
  return acc+cur
},10)


        //reduceRight
//reduce와 다르게 현재값이 배열의 끝에서 부터 시작.
//arr.reduceRight(  (누적값, 현재값)=>{현재값+누적값}  )
let arr6= [1,2,3,4,5,6,7,8,9]
arr6.reduceRight((acc,cur)=>{
  console.log(`누적값: ${acc}, 현재값 : ${cur}`)
  return acc+cur
},10)
