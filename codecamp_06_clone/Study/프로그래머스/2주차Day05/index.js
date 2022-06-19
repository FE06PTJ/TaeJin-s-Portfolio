//문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

// 아스키코드
// -각각의 문자들이 대체되는 유니코드 번호를 가지게 된다.
// -문자열끼리 비교할 때는 유니코드의 번호를 가지고 대소관계를 비교

// sort
// - 배열에서만 사용 가능
// - 문자열, 숫자를 내림차순 또는 오름차순이 가능
// - 고차함수

arr = ["a", "b", "Z", "c"];
// arr.sort() //default가 오름차순 형태로 return

arr.sort((a, b) => {
    //(배열의 2번째부터 가져옴,배열의 1번째부터 가져옴)
    console.log(a, b);
    return a > b ? 1 : -1; //내림차순과 반대. 오름차순
    return a < b ? -1 : 1; //오름차순

    return a < b ? 1 : -1; //내림차순
    return a > b ? -1 : 1; //큰 값을 앞으로 보내고(truthy값) 작은 값은 뒤로 보낸다(falsy값).내림차순
});

function solution(s) {
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        answer.push(s[i]);
    }
    answer.sort((a, b) => {
        //a,b대신 x,y등 뭘 사용하든 상관x
        return a > b ? -1 : 1;
    });

    let result = "";

    for (let i = 0; i < answer.length; i++) {
        result += answer[i];
    }
    return result;
}

//리팩토링
function solution(s) {
    const answer = s
        .split("")
        .sort((a, b) => {
            return a > b ? -1 : 1;
        })
        .join("");
    return answer;
}

// K번째수
// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
// 입출력 예 설명
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.
function solution(array, commands) {
    const answer = [];

    for (let idx = 0; idx < commands.length; idx++) {
        const i = commands[idx][0];
        const j = commands[idx][1];
        const k = commands[idx][2];

        const result = array
            .slice(i - 1, j) //array를 i번째부터 j번째까지 자른 결과를 저장
            .sort((a, b) => {
                return a - b;
            });
        answer.push(result[k - 1]);
    }
    return answer;
}

//리팩토링
function solution(array, commands) {
    const answer = commands.map((el) => {
        const result = array.slice(el[0] - 1, el[1]).sort((a, b) => {
            return a - b; //오름차순. return a > b 1 : -1;
        });
        return result[el[2] - 1];
    });
    return answer;
}
