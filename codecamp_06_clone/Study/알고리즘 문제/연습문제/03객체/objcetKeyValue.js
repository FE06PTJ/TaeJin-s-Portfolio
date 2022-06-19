//9. 객체의 키 & 값 추가
//student와 school 두 개의 객체가 있습니다.
//student 객체에 school이라는 객체를 할당해야 합니다.
const student = {
    name : "철수",
    age : 8,
  };
  
  const school = {
    name : "다람쥐초등학교",
    teacher : "다람이",
  };
  
  student.school = school
  
  console.log(student)

  //10. 객체의 키 & 값 삭제
//주어진  student는 "철수"에 대한 정보를 모아둔 객체입니다.
//그런데 철수와 관련이 없는 drink라는 키가 있네요. 
//student에서 { drink: "사이다" }를 삭제해주세요
let student = {
    name: "철수",
    drink: "사이다",
  }
  delete student.drink
  
  console.log(student)
