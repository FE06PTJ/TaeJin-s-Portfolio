map

```JavaScript

const classmates = ["철수, "영희", " 훈이"]
classmates.map ((el) => (el + "어린이"))
classmates.map ((el) => el + "어린이")
//철수가 앞의 el에 들어오고 뒤의 el로 들어가서 "철수"+"어린이"가 되서 위의 "철수"가 "철수어린이"가 된다. 다음 "영희", "훈이"도 반복한다.
//화살표 함수이므로 ()를 생략해줘도 된다.
//el=element
classmates = ["철수어린이","영희어린이","훈이어린이"]


const classmates2 = [
  {name : "철수"},
  {name : "영희"},
  {name : "훈이"},
  ]
classmates2.map((el) => ({name : el.name +"어린이"}))
//객체로 들어오므로 객체로 내보내줘야된다. {name : el.name + "어린이" }
//{name: "철수어린이"}로 들어간다. "영희","훈이"도 동일하게 {name: "영희어린이"},{name: "훈이어린이"}로 들어간다.
classmates2 = [
  {name : "철수어린이"},
  {name : "영희어린이"},
  {name : "훈이어린이"},
  ]

const classmates2 = [
  {name : "철수"},
  {name : "영희"},
  {name : "훈이"},
]
classmates2.map( ( el ) => ( { name : el.name, school: "다람쥐초등학교" } ) )
//객체를 추가해 줄 수도 있다.
classmates2 = [
  {name : "철수어린이", school : "다람쥐초등학교"},
  {name : "영희어린이", school : "다람쥐초등학교"}, 
  {name : "훈이어린이", school : "다람쥐초등학교"},
  ]

const classmates3 = [
  {name : "철수", age: 13 },
  {name : "영희", age: 10},
  {name : "훈이", age: 11},
]
classmates3.map( ( el ) => ( { name : el.name, age : el.age, school: "토끼초등학교" } ) )

const classmates3 = [
  {name : "철수", age: 13, school: "토끼초등학교" },
  {name : "영희", age: 10, school: "토끼초등학교"},
  {name : "훈이", age: 11, school: "토끼초등학교"},
]


const classmates4 = [
  {name : "철수", age: 13 },
  {name : "영희", age: 10},
  {name : "훈이", age: 11},
]
classmates4.map( ( el ) => ( { school: "토끼초등학교" } )
classmates4 = [
  {school: "토끼초등학교"},
  {school: "토끼초등학교"},
  {school: "토끼초등학교"}
]             
//기존의 값을 넣어주지 않으면 새로 만든 값만 들어가게 된다.
```

```JavaScript
function add(  ) {
  const a = 1
  const b = 2
  
  console.log( a+b )
}
add()
//add() = 3
function add2(aaa,bbb){
  console.log(aaa+bbb)
}
add2(1, 2)
add2(5, 10)
//1이 aaa로 들어가고 2가 bbb로 들어가서 3이 나오게 된다.
//1, 2를 '인자'라고 한다. arguments = args 
//aaa, bbb를 '매개변수'라고 한다. parameter
//하나의 함수는 하나의 기능을 만드는것이 일반적이다

function multi(zzz, qqq){
  console.log(zzz*qqq)
}
multi(2, 4)
//2가 zzz로 들어가고 4가 qqq로 들어가서 8이 나오게 된다.

function add3(aaa,bbb){
  return aaa+bbb
}
const result1 = add3(2, 3)
result1
//add3(2, 3)이 작동해서 return aaa+bbb에서 5가 되어서 기존의 ㅁadd3(2,3)이 지워지고, result에 5가 들어가게 된다.

function multi3(zzz, qqq){
  return zzz*qqq
}
const result2 = multi3(2, 4)
result2
//multi3이 작동해서 return zzz*qqq로 인해 8이 되고, 기존의 multi3(2,4)는 지워지고 그 자리에 8이 들어가서 result2가 8이 된다.
function multi3(zzz, qqq){
  return zzz*qqq
  
  console.log("asdfasd")
}
//return 값을 반환한다는 의미와 동시에 함수를 종료한다는 의미가 있어 밑의 console.log는 실행되지 않는다.
function multi3(zzz, qqq){
    console.log("asdfasd")
    return 
}
//return 단독으로 함수를 종료하겠다는 뜻이다. return밑에 어떠한 식이 있어도 작동하지 않는다.

//함수명은 동사로 시작하고, 변수명은 명사로 시작한다.
```
```JavaScript
const add = ( aaa, bbb ) => {
  return aaa + bbb
}

add(1, 2)

const add2 = ( aaa, bbb ) => (aaa + bbb)
//화살표 함수는 중괄호와 return 사이에 아무것도 없으면 중괄호와 return을 생략하고 대신 ()를 붙여준다.
const add3 = ( aaa, bbb ) => aaa + bbb
//()도 붙였을때와 뗐을때의 결과가 같으면 생략가능하다.

const classmates = [
  {name: "영희"},
  {name: "철수"},
  {name: "훈이"}
]
classmates.map( ( el ) => {
  return {name: el.name + "어린이"}
} )

classmates.map( ( el ) => ({name: el.name + "어린이"})
)
//return과 중괄호 사이에 아무것도 없으므로 생략
classmates.map( ( el ) => {name: el.name + "어린이"}
)
//이렇게 되면 다시 함수에 중괄호를 준것으로 되므로 작동하지 않는다. undefined
//그러므로 ()를 생략하지 않는다.

```
```JavaScript
//HTML과 연결(map으로 태그를 연결)
export default function MapFruitsPage(){

	const bbb = ["나의 레드향", "나의 샤인머스캣", "나의 산청딸기"].map( (el) => (<div>{el}</div>) )


    return (
        <div>{bbb}</div>
    )
}                    
```
```JavaScript
const FRUITS = [
    { number: 1, title: "레드향" },  //<div>1 레드향</div>
    { number: 2, title: "샤인머스켓" },  //<div>2 샤인머스캣</div>
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];
//리렌더링 되어도 새로 안 만들어진다.

export default function MapFruitsPage(){
    // const aaa = [<div>1. 레드향</div>, <div>2. 샤인머스캣</div>, <div>3. 산청딸기</div>]

    // const bbb = ["나의 레드향", "나의 샤인머스캣", "나의 산청딸기"].map( (el) => (<div>{el}</div>) )
    
    // const ccc = FRUITS.map((el)=>(<div>{el.number} {el.title}</div>))

    return (
        <div>
            {FRUITS.map((el)=>(<div>{el.number} {el.title}</div>))}
        </div>
    )
}
//state가 바뀌어서 리렌더링 될때 export안에 const FRUITS가 들어있으면 다시 새로 만들어야하므로 export 밖으로 뺴서 그런 과정을 생략해준다.
//단, useState, useQuery같은 hook은 다시 만들어지지 않는다. 함수형 컴포넌트의 장점이 리렌더링 되어도 다시 만들어지지 않는 것이다.
```


filter

```JavaScript
const ages = [10, 13, 11]

ages.filter((el)=>( el >= 11))
```


















