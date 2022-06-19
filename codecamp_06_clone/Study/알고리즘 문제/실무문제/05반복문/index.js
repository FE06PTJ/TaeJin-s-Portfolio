//43. 마이페이지
//오른쪽 myShopping은 내가 구매한 목록을 보여주고 있습니다.
//해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고, 
//"의류"를 구매한 횟수에 따라 등급을 나타내세요.
// 등급표
// "0~2"  ⇒ Bronze

// "3~4" ⇒ Silver

// 5이상 ⇒ Gold
const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]
function myPage(str){
let count = 0; //구매횟수
let amount = 0; //총 구매 금액
let grade = ""; //최종 등급

// for (let data of myShopping){
//   console.log(data)
// }
//forOf문은 조건식과 증감식을 사용하지 않으므로 좀 더 간략함.

for(let i = 0; i < myShopping.length; i++){
    if(myShopping[i].category === str){
    	count ++;
    	amount += myShopping[i].price
   	}
  }
   if (count >= 5) {
      grade = "Gold"
    } else if(count >=3 ) {
      grade = "Silver"
    } else {
      grade = "Bronze"
    }
 return `${str}를 구매한 횟수는 총 ${count}회, 금액은 ${amount}원 이며 등급은 ${grade}입니다.`
  }
//`  `안에 ${ }를 사용하면 자바스크립트 변수 사용가능

myPage("의류")
myPage("과일")
myPage("장난감")