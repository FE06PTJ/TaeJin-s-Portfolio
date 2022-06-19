export default function TypeScriptPage(){
    
    let aaa = "안녕하세요"
    aaa = 3     //에러
                //파일명을 tsx로 지정해주었기 때문에 직접 타입을 정해주지 않아도 처음에 넣어준 값으로 타입이 추론된다. 
                //마우스를 올려보면 타입이 추론되어 어떤 타입인지 알려준다.
    
    //타입 명시
    // let bbb: string = "반갑습니다"
    
    //문자타입
    let ccc: string  //미리 타입을 지정해놓아줄 수도 있다.
    ccc = 3          //에러
    ccc = "반가워요"

    //숫자타입
    let ddd: number
    ddd = 5
    ddd = "안녕하세요" //에러

    //boolean타입
    let eee: boolean
    eee = true
    eee = false
    eee = "false"  //문자열 안에 글자가 하나라도 있으면 true로 작동하므로 에러가 난다.

    //배열 타입
    let fff: number[] = [1,2,3,4,5]
    let ggg: string[] = ["철수","영희","훈이"]
    let hhh: (number | string)[] = [1,2,3,4,5, "안녕하세요"]

    //객체 타입
    interface IProfile{
        name: string
        age: string | number  // string타입도 가능하고, number타입도 가능하다는 뜻이다.
        school: string
        hobby?: string   //?를 붙여주면 있어도 좋고, 없어도 좋다라는 뜻이다.
    }

    let profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }
    profile.age = "8살"  
    profile.school = 123  //string형식이므로 에러

    //함수타입
    const add = (money1: number, money2: number, unit: string): string => {
        return money1 + money2 + unit
    }
    const result = add(1000, 2000, "원")  //add: string이므로 result도 string이 된다.

    return <div>타입스크립트 연습하기</div>

}