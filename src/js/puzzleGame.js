var isStartGame = true;
var dragTarget = null;
var dragParentTarget = null;

// ======= Module =======
// 퍼즐박스 생성
function createPuzzlePiece() {
  for (var i = 0; i < 9; i++) {
    // 시작 지점의 전체 부모
    var $bigLeftBox = document.getElementById("bigLeftBox");

    // 시작 지점의 퍼즐 조각 부모
    var middleLeftBox = document.createElement("div");
    middleLeftBox.style.width = "100px";
    middleLeftBox.style.height = "100px";
    middleLeftBox.style.border = "1px solid black";
    middleLeftBox.style.boxSizing = "border-box";
    middleLeftBox.id = `middleLeftBox${i}`;
    $bigLeftBox.appendChild(middleLeftBox);

    // 시작 지점의 퍼즐 조각 내용 ( 실질적으로 드래그 이벤트로 움직이는 요소 )
    var smallLeftBox = document.createElement("div");
    smallLeftBox.style.width = "100px";
    smallLeftBox.style.height = "100px";
    smallLeftBox.id = `smallLeftBox${i}`;
    smallLeftBox.style.border = "1px solid black";
    smallLeftBox.style.boxSizing = "border-box";
    smallLeftBox.style.backgroundImage = "url(/img/gameImg.jpg)";
    smallLeftBox.draggable = "true";
    smallLeftBox.addEventListener("dragstart", dragStartEvent);
    smallLeftBox.addEventListener("dragover", dragOverEvent);
    smallLeftBox.addEventListener("drop", dropEvent);
    middleLeftBox.appendChild(smallLeftBox);
  }
}

//정답박스 생성
function createResultPiece() {
  for (var i = 0; i < 9; i++) {
    // 도착 지점의 전체 부모
    var $bigRightBox = document.getElementById("bigRightBox");

    // 도착 지점의 정답 조각 부모
    var middleRightBox = document.createElement("div");
    middleRightBox.style.width = "100px";
    middleRightBox.style.height = "100px";
    middleRightBox.style.border = "1px solid black";
    middleRightBox.style.boxSizing = "border-box";
    middleRightBox.id = `middleRightBox${i}`;
    $bigRightBox.appendChild(middleRightBox);

    // 도착 지점의 정답 조각 자식 (드레그 한 요소들이 드롭되는 곳)
    var smallRightBox = document.createElement("div");
    smallRightBox.style.width = "100px";
    smallRightBox.style.height = "100px";
    smallRightBox.id = `smallRightBox${i}`;
    smallRightBox.style.border = "1px solid black";
    smallRightBox.style.boxSizing = "border-box";
    smallRightBox.addEventListener("dragover", dragOverEvent);
    smallRightBox.addEventListener("drop", dropEvent);
    middleRightBox.appendChild(smallRightBox);
  }
}

//0~8까지 중복되지 않는 정수를 생성
function createRandomList() {
  var shuffleNumber = [];
  for (var i = 0; shuffleNumber.length < 9; i++) {
    var randomNumber = Math.floor(Math.random() * 9);
    if (shuffleNumber.indexOf(randomNumber) == -1) {
      shuffleNumber.push(randomNumber);
    }
  }
  return shuffleNumber;
}

//정답확인
function checkResult() {
  var list = [];

  for (var i = 0; list.length < 9; i++) {
    list[i] = document.getElementById("middleRightBox" + i).childNodes;
  }

  if (
    list[0][0].id == "smallLeftBox0" &&
    list[1][0].id == "smallLeftBox1" &&
    list[2][0].id == "smallLeftBox2" &&
    list[3][0].id == "smallLeftBox3" &&
    list[4][0].id == "smallLeftBox4" &&
    list[5][0].id == "smallLeftBox5" &&
    list[6][0].id == "smallLeftBox6" &&
    list[7][0].id == "smallLeftBox7" &&
    list[8][0].id == "smallLeftBox8"
  ) {
    var $answer = document.getElementById("answer");
    $answer.style.display = "block";
    setTimeout(function () {
      location.reload();
    }, 2000);
  }
}

// ======= Event =======

function startEvent() {
  if (isStartGame) {
    // 초기값 세팅
    document.getElementById("gameImg").style.display = "none";
    createPuzzlePiece();
    createResultPiece();
    isStartGame = false;
  }

  var shuffle = createRandomList();
  var shuffleId = [];
  var middleLeftBox = [];

  // for (var i = 0; shuffleId.length < 9; i++) {   // 얘는 반복 범위를 파악하려면 반복문의 내용을 해석해야하는 문제
  for (var i = 0; i < 9; i++) {
    shuffleId[i] = document.getElementById(`smallLeftBox${shuffle[i]}`);
    middleLeftBox[i] = document.getElementById(`middleLeftBox${i}`);
    middleLeftBox[i].appendChild(shuffleId[i]);
  }
}

function dragStartEvent(e) {
  dragTarget = e.target;
  dragParentTarget = dragTarget.parentNode;
}

function dragOverEvent(e) {
  e.preventDefault();
}

function dropEvent(e) {
  var target = e.target;
  target.parentNode.appendChild(dragTarget);
  dragParentTarget.appendChild(target);
  checkResult();
}

// 이벤트 함수에 이벤트 이름 붙이는 것 잊지 말 것 !
// 함수의 이름은, id나 class처럼 짓는게 아닌, 동작을 이름이 담아줘야 함
// 함수 내에서도 개행 잘 써서, 코드 가독성 높일 것
// 추천하자면, 함수의 이름을 지을 때는 동사를 가장 앞에 두는게 좋음

// 중복코드는 무조건 나올 수가 없음 ( 어떻게든 프로그래밍 방식으로 중복코드는 제거할 수가 있음 )
//onclick 이벤트는  여러 이벤트를 적용하는 것이 불가능하다. 이벤트를 누적으로 적용할 경우 기존 이벤트를 덮어쓴다.
//addEventListener는 여러 이벤트를 추가해도 모든 이벤트가 적용된다.

// 버튼 클릭 시 시작
// function startEvent() {
//   if (isStartGame) {
//     // 초기값 세팅
//     document.getElementById("gameImg").style.display = "none";
//     createPuzzlePiece();
//     createResultPiece();

//     var shuffle = createRandomList();
//     var shuffleId = [];
//     var middleLeftBox = [];

//     // for (var i = 0; shuffleId.length < 9; i++) {   // 얘는 반복 범위를 파악하려면 반복문의 내용을 해석해야하는 문제
//     for (var i = 0; i < 9; i++) {
//       shuffleId[i] = document.getElementById(`smallLeftBox${shuffle[i]}`);
//       middleLeftBox[i] = document.getElementById(`middleLeftBox${i}`);
//       middleLeftBox[i].appendChild(shuffleId[i]);
//     }
//     isStartGame = false;
//   } else {
//     var shuffle = createRandomList();
//     var shuffleId = [];
//     var middleLeftBox = [];

//     // for (var i = 0; shuffleId.length < 9; i++) {
//     for (var i = 0; i < 9; i++) {
//       shuffleId[i] = document.getElementById(`smallLeftBox${shuffle[i]}`);
//       middleLeftBox[i] = document.getElementById(`middleLeftBox${i}`);
//       middleLeftBox[i].appendChild(shuffleId[i]);
//     }
//   }
// }

// 정확하게 if문으로 분기되어야 하는 부분만 분기시키고, 중복코드는 따로 빼는게 좋음
