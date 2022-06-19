//배열전체 순회하기
//forEach

//배열 탐색하기
//indexOf, lastIndexOf, includes, find, findIndex, filter

//기타 메서드
//some, every, fill


        //forEach
//map, for과 비슷한 기능을 하며, 주어진 함수를 배열의 각 요소에 실행시킴
//map과 다르게 forEach는 배열을 리턴하지 않고, undefined를 리턴함.
//arr.forEach(  ()=>{각 배열의 원소에 반복하고 싶은 코드}  )
let arr = [1,2,3,4,5,6]
arr.forEach((item)=>{return console.log(item*2)})
//배열을 반환하지 않으므로 item*2의 값을 배열에 새롭게 만들고 싶다면 빈 배열 안에 push해서 넣어 주어야 함.
//반면 map은 배열을 반환하므로 item*2를 리턴만해도 item*2의 값이 들은 배열을 반환해줌.
//새로운 배열이 필요하다면 map, 배열은 필요없지만 반복문을 사용할 경우 forEach사용
//forEach는 배열을 순회하는 도중에 멈출 수 없는 대신 배열을 순회하는 속도가 더 빠름.


        //indexOf
//배열에 특정 원소가 있는지 탐색하고, 찾은 첫번째 요소의 인덱스를 반환.
//존재하지 않으면 -1 반환
//arr.indexOf("탐색하고 싶은 요소", 탐색을 시작할 위치=인덱스)
let name =["은정","시윤","혜원","재훈","세준","혜원"]
name.indexOf("혜원")

let name1 =["은정","시윤","혜원","재훈","세준","혜원"]
name1.indexOf("혜원",3)
//탐색을 시작할 위치를 지정해주면 해당 인덱스를 포함해서 탐색을 시작함


        //lastIndexOf
//indexOf와 다르게 배열에서 찾은 마지막 요소의 인덱스를 반환.
//인덱스 반환만 뒤에서 부터 해주고 그 외는 indexOf와 동일
//arr.lastIndexOf("탐색하고 싶은 요소", 역순으로 탐색을 시작할 위치)
let name3 =["은정","시윤","혜원","재훈","세준","혜원"]
name3.lastIndexOf("혜원")

let name4 =["은정","시윤","혜원","재훈","세준","혜원"]
name4.lastIndexOf("혜원",3)


        //includes
//배열이 특정 요소를 포함하고 있는지 판별하고 있으면 true, 없으면 false 반환.
//arr.includes("탐색하고 싶은 요소", 탐색을 시작할 위치)
let name5 =["은정","시윤","혜원","재훈","세준","혜원"]
name5.includes("혜원")

let name6 =["은정","시윤","혜원","재훈","세준","혜원"]
name6.includes("혜원",6)


        //find
//주어진 판별함수를 만족하는 배열의 첫번째 요소의 값을 반환해주는 메서드.
//만족하는 요소가 없으면 undefined를 반환.
//arr.find(  ()=>{판별함수}  )
let arr1 = [1,2,3,4,5,6,7]
let arr2 = arr1.find((item)=>{return item > 4})
console.log(arr2)
//item에 arr의 모든 원소가 들어감.
//배열이므로 1부터 시작


        //findIndex
//주어진 판별함수를 만족하는 배열의 첫번째 요소의 인덱스를 반환해주는 메서드.
//find와 같은 기능이지만 반환해주는 값이 인덱스.
//arr.findIndex( ()=>{판별함수}  )
let arr3 = [1,2,3,4,5,6,7]
arr3.findIndex((item)=>{return item > 4})
//인덱스이므로 0부터 시작


        //filter
//주어진 함수를 만족하는 모든 요소를 모아 새로운 배열로 반환하는 메섣,
//일정 기준에 부합하는 원소들만 추출하고 싶을 때 많이 사용.
//arr.filter(  ()=>{일정한 기준을 줄 함수}  )
let arr4 = [1,2,3,4,5,6,7,8]
arr4.filter((item)=>{return item>3})


        //some
//배열 안의 모든 원소 중에 하나라도 판별함수를 만족하는지 테스트해주는 메서드.
//만족하는 원소가 있다면 true를 반환, 없다면 false 반환.
//const 콜백함수 = (arr_item)=>{판별하고 싶은 것} 
//arr.some(콜백함수)
const arr5 = [1,2,3,4,5,6,7,8]
const elFunc = (item)=>{return item%2!==0}

console.log(arr4.some(elFunc))


        //every
//배열 안의 모든 원소가 주어진 판별함수를 통과하는지 테스트하며, Boolean을 반환.
//some과 비슷하나 모든 원소가 만족해야한다는 점이 다름.
//const 콜백함수 = (arr_item)=>{판별하고 싶은 것}
//arr.every(콜백함수)
const arr6 = [2,4,6,8,10]
const elFunc1 = (item)=>{return item%2===0}

console.log(arr5.every(elFunc1))


        //fill
//배열의 시작 인덱스부터 끝 인덱스의 이전까지 하나의 값을 채워줌.
//arr.fill(채울원소, 시작인덱스, 끝인덱스)
let fillArray = [1,2,3,4,5]
fillArray.fill("fill",2,5)
//인덱스이므로 0부터 시작
//끝 인덱스는 포함하지 않음.
