console.log(`Hello World`);
//acessing Id's 
const nam = document.getElementById("name");
const resultDiv = document.getElementById("result")
const handsDiv = document.getElementById("hands")
const pts = document.getElementById("pts")//player Total Score
const cts = document.getElementById("cts")//compurt Total Score
const tempBg = document.getElementById("tempBg")
const user = document.getElementById("user");
const max=document.getElementById("max")
const max1=document.getElementById("max1")
const finalRes=document.getElementById("finalRes")
const winBg=document.getElementById("winBg")

//declaring In Global Scope
const totalScore = { comScore: 0, playerScore: 0,max:0 }

//genarating Computer Choice
const getComCho = () => {
  const rpsCho = [`Rock`, `Paper`, `Scisscor`];
  const randomCho = Math.floor(Math.random() * 3)
  return rpsCho[randomCho];
}

//comparing Humanchoice And Computerschoice And Getting Winner
const getResult = (playerCho, comCho) => {
  let score = 0;
  let comScore = 0;
  if (playerCho == comCho) {
    score = 0;
    comScore = 0;
  } else if (playerCho == `Rock` && comCho == `Scisscor`) {
    score = 1
    comScore = 0;
  } else if (playerCho == `Paper` && comCho == `Rock`) {
    score = 1
    comScore = 0;
  } else if (playerCho == `Scisscor` && comCho == `Paper`) {
    score = 1
    comScore = 0;
  } else {
    score = 0
    comScore = 1
  }
  return [score, comScore];
}

//showing The Results
const displayResult = (playerScore, comScore, playerCho, comCho) => {

  if (playerScore == 0 && comScore == 1) {
    resultDiv.innerText = "Computer Won!"
    resultDiv.style.color = "red"
  } else if (playerScore == 1 && comScore == 0) {
    resultDiv.innerText = "You Won!!!"
    resultDiv.style.color = "green"
  } else {
    resultDiv.innerText = "It Is A Tie!!"
    resultDiv.style.color = "#d5d50b"
  }
  handsDiv.innerText = `👤 ${playerCho} vs 💻 ${comCho}`;
  pts.innerText = totalScore.playerScore;
  cts.innerText = totalScore.comScore;
}
//setting The Color Of Scores Accoring To Results
const color = (playerScore, comScore) => {
  if (playerScore > comScore) {
    pts.style.color = "green";
    cts.style.color = "green";
  } else if (comScore > playerScore) {
    pts.style.color = "red";
    cts.style.color = "red";

  } else {

    pts.style.color = "#d5d50b";
    cts.style.color = "#d5d50b";
  }
}
//processing The Clicks
const onClickRPS = (playerCho) => {
  let comCho = getComCho();
  const [score, comScore] = getResult(playerCho, comCho);
  totalScore.playerScore += score;
  totalScore.comScore += comScore;
  console.log(totalScore);
  displayResult(score, comScore, playerCho, comCho);
  color(totalScore.playerScore, totalScore.comScore);
  winner(totalScore.max,totalScore.playerScore, totalScore.comScore);
}

//Final Winner
const winner=(maxScore,playerScore,comScore)=>{
         if (playerScore==maxScore) {
              winnerDec(1)
         } 
         if (comScore==maxScore) {
          winnerDec(0)
         }
}
//getting Button Clicks
const playGame = () => {
  let rpsButtons = document.querySelectorAll('.rpsButton');
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });
  const endBtn = document.getElementById("endBtn");
  endBtn.onclick = () => endGame();
}
//resetting The Values 
const endGame = () => {
  totalScore.playerScore = 0;
  totalScore.comScore = 0;
  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const pts = document.getElementById("pts");
  const cts = document.getElementById("cts");
  resultDiv.innerText = "";
  handsDiv.innerText = "";
  pts.innerText = totalScore.playerScore;
  cts.innerText = totalScore.comScore;
  color(totalScore.playerScore, totalScore.comScore);
  winBg.style.display="none"
}
//calling playGame() 
playGame();

//for Getting Ingame Name From The USer and selecting score
//close
const close = () => {
  tempBg.style.display = "none"
}

//submit
const submit = () => {
  maxSco()
  const tempN = user.value;
  if (tempN == "" || tempN == " ") {
    //defualt Name Will Be Guest
    nam.innerText = "Guest"
    close();
  } else {
    nam.innerText = tempN;
    close();
  }
}

const scoOnSelect=(cho)=>{
  totalScore.max=cho;
  max.innerText=totalScore.max
  max1.innerText=totalScore.max
}

const maxSco=()=>{
  let ms=document.getElementsByName("maxScore");
for(i=0; i<ms.length; i++){
  if (ms[i].checked) {
    scoOnSelect(ms[i].value)
  }
}
}

const winnerDec=(res)=>{
  winBg.style.display="flex"
   if (res==1) {
     finalRes.innerText="Hurray You Won!!!"
   } else {
    finalRes.innerText="Better Luck Next Time!"
    winBg.style.backgroundColor="#dd404080"
   }
}