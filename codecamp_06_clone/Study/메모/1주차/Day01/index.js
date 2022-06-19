//Day0102

//Python - PyPl
//Java - Gradle, Maven
//JS - Node.js - npmjs.com


// GUI
// CLI
// 터미널(쉘) - git bash
// ls(lsit), ls -al
// 디렉토리
// mkdir(makedirectory)
// cd(changedirectory) cd ../
// pwd(printworkingdirectory)
// mv(move) mv aaa class/
// cp(copy)
// cp aaa ./bbb(파일 복사) 
// cp -R aaa ./bbb(폴더는 -R 붙이기)
// -R(Recursive:순회하다)
// rm(remove) -rf(false) 
// rm -rf aaa

// 보일러 플레이트 : 초기 폴더구조

// node_modules : 라이브러리/프레임워크 저장소
// pages : 프론트엔드의 페이지 화면들
// public : 사진, 아이콘 등(이름변경X)
// styles : css 파일(이름변경X)
// .gitignore : git에서 제외할 파일
// package.json : 기본 메뉴얼
// README.md : 상세 설명서(소개하는 설명서)
// yarn.lock : 버전 잠금 파일

//React
//html,css를 js로 변경
//return()을 기준으로 위는 js 밑은 html, css는 import해오기
//<script></script> => js, <body></body> => html
//<script src=" "></script> => import, export
//<link href = " " rel = " "/> => import


//<접속을 기다리는 프로그램>

//프론트엔드 서버  
//yarn dev
//3000
//유저가 주소를 칠 때까지 기다림

//백엔드 서버
//yarn dev
//8000
//프론트엔드가 데이터를 요철할때까지 기다림

//데이터베이스 서버 
//더블클릭 or 명령어
//3306
//백엔드 서버가 데이터베이스에 저장할때까지 기다림

//24시간 동안 켜놓아야 다른 사람이 접속 가능

//그냥 서버, 서버개발자라고 하면 백엔드 서버를 의미함

//하나의 컴퓨터에서 하나의 포트를 쓰고 있으면 중복으로 사용이 불가능하다 다른 컴퓨터에서는 중복으로 사용가능하다
//yarn dev -p 3004  처럼 다른 포트를 사용 가능

//0.0.0.0 : 3000 에서 앞의 ip 0.0.0.0 = 누구든지 접속가능
//localhost : 내 노트북 = ip 127.0.0.1 (:  3000)

// 검사 탭 
//elements : html, css 디버깅할때 사용
//console: 자바스크립트 디버깅
//network : 통신상태확인