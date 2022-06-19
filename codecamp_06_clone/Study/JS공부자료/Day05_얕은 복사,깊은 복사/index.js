//얕은 복사, 깊은 복사

        //얉은 복사
//중첩객체의 값(예제의info처럼 객체 안에 객체가 있는 것)을 참조해오는 것으로, 할당된 value자체를 복사해 새로 할당하는 게 아닌 값의 메모리 주소를 참조해온다.
//예제의 Me와 friends의 info가 가르키고 있는 메모리 주소가 같으므로 사본을 수정하면 원본도 수정된다.?

        //깊은 복사
//원본 객체에 할당된 value 자체를 복사해 사본객체에 새로 할당해준다.
//사본을 수정해도 메모리 주소가 서로 다르기 때문에 원본이 수정되지 않는다.

//예제
let Me = {
    name : "혜원",
    info : { //중첩객체ㅐ : 객체안의 객체
        nickname : "알아서 뭐하게",
        mbti : "ENTJ",
        position : "프론트엔드"
    }
}
    //Me객체 복사해오기
let copyObject = function(target){
    //복사한 값들을 넣을 빈 사본객체 생성
    let result = { }
    //객체의 property를 순회하며 복사행기
    for (let key in target) {
        result[key] = target[key]
    }
    return result;
}
let friend = copyObject(Me)

    //사본 객체의 name 바꾸기
friend.name = "예봄"
friend.info.position = "백엔드"

    //콘솔로 원본과 사본의 프로퍼티 비교
console.log(friend.name, Me.name)
//friend.name = "예봄", Me.name = "혜원"
console.log(friend.info.position, Me.info.position)
//friend.info.position = "백엔드", Me.info.position = "백엔드"
