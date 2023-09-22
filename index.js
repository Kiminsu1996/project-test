function createMain() {
  // 부모인 main
  var $main = document.querySelector("main");

  // ====== profile ======
  // profile의 부모
  var profile = document.createElement("div");
  profile.id = "profile";
  profile.style.display = "flex";
  profile.style.flexWrap = "wrap";
  //profile의 자식 img
  var profileImg = document.createElement("div");
  profileImg.id = "profileImg";

  //profile의 자식 inf
  var profileInf = document.createElement("div");
  profileInf.id = "profileInf";
  profileInf.style.paddingLeft = "80px";
  profileInf.style.paddingTop = "10px";

  //img
  var $img = document.createElement("img");
  $img.style.width = "200px";
  $img.style.height = "200px";
  $img.style.borderRadius = "50%";
  $img.src = "img/myPic.jpg";

  //inf
  var $h1 = document.createElement("h1");
  var $p = document.createElement("p");
  $h1.innerHTML = "Kim In Su";
  $p.innerHTML = "BackEnd-Developer from South Korea";

  var $ul = document.createElement("ul");
  $ul.style.display = "flex";
  $ul.style.listStyle = "none";
  $ul.style.marginTop = "40px";

  var $liFirst = document.createElement("li");
  var $liSecond = document.createElement("li");
  var firstA = document.createElement("a");
  var secondA = document.createElement("a");
  firstA.innerHTML = "TISTORY";
  secondA.innerHTML = "GITHUB";
  firstA.href = "https://why-developer-1996.tistory.com/";
  secondA.href = "https://github.com/Kiminsu1996";

  profile.append(profileImg, profileInf);
  profileImg.appendChild($img);
  profileInf.append($h1, $p, $ul);
  $ul.append($liFirst, $liSecond);
  $liFirst.appendChild(firstA);
  $liSecond.appendChild(secondA);

  //====== introduce ======
  //introduce의 부모
  var introduce = document.createElement("div");
  introduce.id = "introduce";
  introduce.style.display = "flex";
  introduce.style.flexWrap = "wrap";
  introduce.style.marginTop = "50px";

  //introduce의 자식 title
  var introduceTitle = document.createElement("div");
  introduceTitle.id = "introduceTitle";
  introduceTitle.style.flexBasis = "200px";
  var introduceH2 = document.createElement("h2");
  introduceH2.innerHTML = "ABOUT ME";

  //introduce의 자식 content
  var introduceContent = document.createElement("div");
  introduceContent.id = "introduceContent";
  introduceContent.style.flex = "1 1";
  var introduceP = document.createElement("p");
  introduceP.innerHTML = `스테이지어스 부트캠프에서 백엔드 개발을 배우고 있는 김인수입니다.<br>
  <br>
   조금 늦게 개발자가 되었지만, 최선을 다해 성장하고 싶은 마음으로 백엔드 개발자의 길을 선택했습니다. <br>
  다양한 사람들과의 협업을 통해 부족한 부분을 발견하고 더 나은 백엔드 개발자가 될 수 있도록 노력하겠습니다.`;

  introduce.append(introduceTitle, introduceContent);
  introduceTitle.appendChild(introduceH2);
  introduceContent.appendChild(introduceP);

  //====== project ======
  //project의 부모
  var project = document.createElement("div");
  project.id = "project";
  project.style.display = "flex";
  project.style.flexWrap = "wrap";
  project.style.marginTop = "50px";

  //project의 자식 title
  var projectTitle = document.createElement("div");
  projectTitle.id = "projectTitle";
  projectTitle.style.flexBasis = "200px";
  var projectH2 = document.createElement("h2");
  projectH2.innerHTML = "PROJECT";

  //project의 자식 content computer estimate
  var projectContent = document.createElement("div");
  projectContent.id = "projectContent";
  projectContent.style.flex = "1 1";
  var projectComputerPart = document.createElement("div");
  var projectComputerH3 = document.createElement("h3");
  var projectComputerA = document.createElement("a");
  projectComputerA.href = "pdf/computerEstimate.pdf";
  projectComputerA.innerHTML = "Computer Estimate";
  var projectComputerP = document.createElement("p");
  projectComputerP.style.marginTop = "20px";
  projectComputerP.innerHTML =
    "최대 63만원으로 컴퓨터 본체 구성 부품 계획하기 ";

  //project의 자식 content youtube
  var projectYoutubeContent = document.createElement("div");
  projectYoutubeContent.style.marginTop = "40px";
  var projectYoutubeH3 = document.createElement("h3");
  var projectYoutubeA = document.createElement("a");
  projectYoutubeA.href = "src/html/youtubePage.html";
  projectYoutubeA.innerHTML = "Youtube page";
  var projectYoutubeP = document.createElement("p");
  projectYoutubeP.style.marginTop = "20px";
  projectYoutubeP.innerHTML =
    "HTML, CSS을 사용해서 유튜브의 시작 화면을 만들었습니다.";

  //project의 자식 content baseball_game
  var projectBaseballContent = document.createElement("div");
  var projectBaseballH3 = document.createElement("h3");
  var projectBaseballA = document.createElement("a");
  projectBaseballContent.style.marginTop = "40px";
  projectBaseballA.href = "src/html/baseballGame.html";
  projectBaseballA.innerHTML = "Baseball Game Project";
  var projectBaseballP = document.createElement("p");
  projectBaseballP.style.marginTop = "20px";
  projectBaseballP.innerHTML =
    "HTML, CSS, js을 사용해서 숫자야구 게임을 만들었습니다.";

  //project의 자식 content puzzle_game
  var projectPuzzleGameContent = document.createElement("div");
  var projectPuzzleGameH3 = document.createElement("h3");
  var projectPuzzleGameA = document.createElement("a");
  projectPuzzleGameContent.style.marginTop = "40px";
  projectPuzzleGameA.href = "src/html/puzzleGame.html";
  projectPuzzleGameA.innerHTML = "Puzzle Game Project";
  var projectPuzzleGameP = document.createElement("p");
  projectPuzzleGameP.style.marginTop = "20px";
  projectPuzzleGameP.innerHTML =
    "HTML, CSS, js을 사용해서 퍼즐 게임을 만들었습니다.";

  var boardContent = document.createElement("div");
  var boardH3 = document.createElement("h3");
  var boardA = document.createElement("a");
  boardContent.style.marginTop = "40px";
  boardA.href = "test2/index.jsp";
  boardA.innerHTML = "Board Project";
  var boardP = document.createElement("p");
  boardP.style.marginTop = "20px";
  boardP.innerHTML = "게시판 프로젝트 입니다.";

  $main.append(profile, introduce, project);
  project.append(projectTitle, projectContent);
  projectTitle.appendChild(projectH2);

  projectContent.append(
    projectComputerPart,
    projectYoutubeContent,
    projectBaseballContent,
    projectPuzzleGameContent,
    boardContent
  );

  projectComputerPart.append(projectComputerH3, projectComputerP);
  projectComputerH3.appendChild(projectComputerA);

  projectYoutubeContent.append(projectYoutubeH3, projectYoutubeP);
  projectYoutubeH3.appendChild(projectYoutubeA);

  projectBaseballContent.append(projectBaseballH3, projectBaseballP);
  projectBaseballH3.append(projectBaseballA);

  projectPuzzleGameContent.append(projectPuzzleGameH3, projectPuzzleGameP);
  projectPuzzleGameH3.appendChild(projectPuzzleGameA);

  boardContent.append(boardH3, boardP);
  boardH3.appendChild(boardA);
}

window.onload = function () {
  createMain();
};
