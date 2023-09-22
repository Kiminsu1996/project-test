var randomNumbers = randomNumberEvent();
var tryCount = 0;

//반복되지 않는 랜덤  정수를 만드는 event
function randomNumberEvent() {
  var randomNumber1 = Math.floor(Math.random() * 9 + 1);
  var randomNumber2 = Math.floor(Math.random() * 9 + 1);
  var randomNumber3 = Math.floor(Math.random() * 9 + 1);

  if (
    randomNumber1 === randomNumber2 ||
    randomNumber2 === randomNumber3 ||
    randomNumber3 === randomNumber1
  ) {
    return randomNumberEvent();
  } else {
    console.log(randomNumber1, randomNumber2, randomNumber3);
    return [randomNumber1, randomNumber2, randomNumber3];
  }
}

//input에 버튼의 값을 넘기는 event
function sendValueEvent(buttonValue) {
  var inputValue = document.getElementById("numbers").value;
  //input안에는 .value 해줘야 값이 들어간다. data type 은 String으로 나타난다.
  if (inputValue.length < 3) {
    var newInput = inputValue + buttonValue;
    document.getElementById("numbers").value = newInput;
  }
}

//리셋 버튼으로 게임 초기화
function gameResetEvent() {
  location.reload();
}

//keyboard enter를 적용한 event
function useEnterEvent() {
  if (KeyboardEvent.key === "Enter") {
    checkAnswerEvent();
  }
}

//버튼을 눌렀을 때 작동하는 모든 event (랜덤숫자와 내가 입력한 숫자 비교 및 결과)
function checkAnswerEvent() {
  var newInputValue = document.getElementById("numbers").value;
  var newInputValueArray = Array.from(newInputValue);

  if (newInputValue.length === 3) {
    tryCount++;
    var strike = 0;
    var ball = 0;
    var scoreMessage;
    //랜덤숫자와 입력한 숫자 비교  // parseInt를 사용한 이유 = randomNumber 는 숫자형 배열이고 newInputValue는 문자형 배열이기 때문에 숫자형 배열과 비교하기 위해서
    for (var i = 0; i < 3; i++) {
      if (randomNumbers[i] === parseInt(newInputValueArray[i])) {
        strike++;
      }
      if (
        randomNumbers[i] !== parseInt(newInputValueArray[i]) &&
        randomNumbers.includes(parseInt(newInputValueArray[i]))
      ) {
        ball++;
      }
    }
    if (strike === 3) {
      scoreMessage = "3 strike 당신이 승리했습니다.";
      setTimeout(function () {
        //함수에 넣어서 사용했음
        alert("게임 종료! 재시작 시 리셋을 누르세요.");
      }, 1000);
    } else if (strike > 0 || ball > 0) {
      scoreMessage = strike + " strike " + ball + " ball ";
    } else {
      scoreMessage = "다시 생각하세요!";
    }

    //중복 숫자 입력시 무효처리
    if (
      newInputValue[0] === newInputValue[1] ||
      newInputValue[1] === newInputValue[2] ||
      newInputValue[0] === newInputValue[2]
    ) {
      alert("중복되지 않는 숫자 3자리를 입력해주세요.");
      document.getElementById("choice" + tryCount).innerHTML = "";
      document.getElementById("score" + tryCount).innerHTML = "";
      document.getElementById("numbers").value = "";
      tryCount--;
    } else {
      //선택값, 스코어 입력
      if (tryCount <= 9) {
        document.getElementById("choice" + tryCount).innerHTML = newInputValue;
        document.getElementById("score" + tryCount).innerHTML = scoreMessage;
        document.getElementById("numbers").value = "";
      } else {
        document.getElementById("choice" + tryCount).innerHTML = newInputValue;
        document.getElementById("score" + tryCount).innerHTML = scoreMessage;
        document.getElementById("numbers").value = "";
        setTimeout(function () {
          alert("게임 종료! 재시작 시 리셋을 누르세요.");
        }, 1000);
      }
    }
  } else {
    alert("글자 수를 확인하세요.");
    document.getElementById("numbers").value = "";
  }
}
