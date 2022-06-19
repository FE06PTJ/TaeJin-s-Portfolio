export default function TypeScriptPage(){
    
    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }

    //1. Pick 타입
    type MyType1 = Pick<IProfile, "name" | "age">

    //2. Omit 타입
    type MyType2 = Omit<IProfile, "school">

    //3. Partial 타입 : 전부 다 ?를 붙이는 타입
    type MyType3 = Partial<IProfile>

    //4. Required 타입 : ?붙은 것도 필수로 바꾸어주는 타입
    type MyType4 = Required<IProfile>

    //5. Record 타입 : Union타입. 합집합 타입 , 교집합intersection 타입은 | 대신 &가 붙는다.
    type ZZZ = "aaa" | "qqq" | "rrr"  //ZZZ는 aaa,qqq,rrr타입만 사용가능
    // let apple: ZZZ
    // apple = "qqq"
    type MyType5 = Record<ZZZ, IProfile>  //aaa,qqq,rrr이 키가 되고 IProfile이 value가 된다.


    // ================ 추가(선언병합) - type과 interface 차이점 ===================
    interface IProfile {
        candy: number
    }

    let profile: IProfile
    profile = {
        candy: 3,
        age: 10,
        hobby: "asdf"
    }
    

    return <div>타입스크립트 연습하기</div>

}