//41. 점수에 따른 등급
//입력되는 score에 따라 알맞은 등급을 적어야 합니다.
//100~90 → "A"
//89~80 → "B"
//79~70 → "C"
//69~60 → "D"
//59점 이하는 "F"
//100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.
function grade(score) {
    if(score > 100 || score < 0) {
      return "잘못된 점수입니다"
    } else if(score >= 90) {
      return "A"
    } else if(score >= 80) {
      return "B"
    } else if(score >= 70) {
      return "C"
    } else if(score >= 60) {
      return "D"
    } else if(score < 60) {
      return "F"
    }
  }
  grade(101)
  grade(-2)
  grade(93)
  grade(82)
  grade(73)
  grade(66)
  grade(51)

//리팩토링:간략하게 변환
function grade(score) {
	//예외처리 먼저해주기
  if(score > 100 || score < 0) {
    return "잘못된 점수입니다";
    
  } else if(score >= 90) {
  	return "A";
    
  } else if(score >= 80) {
  	return "B";
    
  } else if(score >= 70) {
  	return "C";
    
  } else if(score >= 60) {
  	return "D";
    
  } else {
    return "F";
  }
}

grade(105);
grade(-10);
grade(97);
grade(86);
grade(74);
grade(62);
grade(43);