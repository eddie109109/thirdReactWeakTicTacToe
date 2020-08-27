import React, {useState} from 'react';



const user = 1;
const computer = 2;
var currentPlayer = user;
var spotCheckers = ["","","","","","","","",""];
// credit to creating the board to this youtube using css tricks
// https://www.youtube.com/watch?v=TD5EaIkhSTQ
function Board(props) {

  const [spot1, setSpot1] = useState("");
  const [spot2, setSpot2] = useState("");
  const [spot3, setSpot3] = useState("");
  const [spot4, setSpot4] = useState("");
  const [spot5, setSpot5] = useState("");
  const [spot6, setSpot6] = useState("");
  const [spot7, setSpot7] = useState("");
  const [spot8, setSpot8] = useState("");
  const [spot9, setSpot9] = useState("");

  const [displayWinState,setDisplayWinState] = useState("none");
  const [displayLoseState,setDisplayLoseState] = useState("none");
  const [displayDrawState,setDisplayDrawState] = useState("none");
  const [gameResult, setGameResult] = useState("");

  function startGame() { // wipe out the whole game state and restart again
    spotCheckers = ["","","","","","","","",""];
    setSpot1("");
    setSpot2("");
    setSpot3("");
    setSpot4("");
    setSpot5("");
    setSpot6("");
    setSpot7("");
    setSpot8("");
    setSpot9("");
    setDisplayDrawState("none");
    setDisplayWinState("none");
    setDisplayLoseState("none");
  }

  function checkGameState() {
    if (spotCheckers[0] === "O" && spotCheckers[1] === "O" && spotCheckers[2] === "O") {
      return 1;
    } else if (spotCheckers[3] === "O" && spotCheckers[4] === "O" && spotCheckers[5] === "O") {
      return 1;
    } else if (spotCheckers[6] === "O" && spotCheckers[7] === "O" && spotCheckers[8] === "O") {
      return 1;
    } else if (spotCheckers[0] === "O" && spotCheckers[3] === "O" && spotCheckers[6] === "O") {
      return 1;
    } else if (spotCheckers[1] === "O" && spotCheckers[4] === "O" && spotCheckers[7] === "O") {
      return 1;
    } else if (spotCheckers[2] === "O" && spotCheckers[5] === "O" && spotCheckers[8] === "O") {
      return 1;
    } else if (spotCheckers[0] === "O" && spotCheckers[4] === "O" && spotCheckers[8] === "O") {
      return 1;
    } else if (spotCheckers[2] === "O" && spotCheckers[4] === "O" && spotCheckers[6] === "O") {
      return 1;
    } else if (spotCheckers[0] === "X" && spotCheckers[1] === "X" && spotCheckers[2] === "X") {
      return 2;
    } else if (spotCheckers[3] === "X" && spotCheckers[4] === "X" && spotCheckers[5] === "X") {
      return 2;
    } else if (spotCheckers[6] === "X" && spotCheckers[7] === "X" && spotCheckers[8] === "X") {
      return 2;
    } else if (spotCheckers[0] === "X" && spotCheckers[3] === "X" && spotCheckers[6] === "X") {
      return 2;
    } else if (spotCheckers[1] === "X" && spotCheckers[4] === "X" && spotCheckers[7] === "X") {
      return 2;
    } else if (spotCheckers[2] === "X" && spotCheckers[5] === "X" && spotCheckers[8] === "X") {
      return 2;
    } else if (spotCheckers[0] === "X" && spotCheckers[4] === "X" && spotCheckers[8] === "X") {
      return 2;
    } else if (spotCheckers[2] === "X" && spotCheckers[4] === "X" && spotCheckers[6] === "X") {
      return 2;
    }

    var counter = 0;
    for (var i = 0; i < spotCheckers.length; i++) {
      if (spotCheckers[i] === "X" || spotCheckers[i] === "O") {
        counter ++;
      }
    }
    // if all the spots are occupied and not 1 or 2 returned yet, that means its a draw, otherwise the game is still on
    if (counter == 9) {
      return 0;
    } else {
      return -1;
    }
  }

  function finishMessage() {
    const gameResult = checkGameState();
    if (gameResult == 1) {
      setDisplayWinState("");
    } else if (gameResult == 2) {
      setDisplayLoseState("");
    } else if (gameResult == 0) {
      setDisplayDrawState("");
      return;
    }
    console.log("finish");
  }

  function computerAction() {

    var randomNumber = Math.ceil(Math.random()*9); // generate a randomNumber between 1-9 inclusive
    var counter = 0;
    for (var i =0; i < spotCheckers.length; i++) {
      if (spotCheckers[i] === "O" || spotCheckers[i] === "X") {
        counter ++;
      }
    }
    if (counter == 9) {
      finishMessage();
      return;
    }
    while (spotCheckers[randomNumber-1] === "O" || spotCheckers[randomNumber-1] === "X") {
      randomNumber = Math.ceil(Math.random()*9);
    } // if the randomNumber we have chosen is occupied, we choose another random number

    var chosenPosition = randomNumber-1;
    // console.log("chosen position", chosenPosition);
    if (chosenPosition == 0) {
      setSpot1("X");
      spotCheckers[0] = "X";
    } else if (chosenPosition == 1) {
      setSpot2("X");
      spotCheckers[1] = "X";
    } else if (chosenPosition == 2) {
      setSpot3("X");
      spotCheckers[2] = "X";
    } else if (chosenPosition == 3) {
      setSpot4("X");
      spotCheckers[3] = "X";
    } else if (chosenPosition == 4) {
      setSpot5("X");
      spotCheckers[4] = "X";
    } else if (chosenPosition == 5) {
      setSpot6("X");
      spotCheckers[5] = "X";
    } else if (chosenPosition == 6) {
      setSpot7("X");
      spotCheckers[6] = "X";
    }
    else if (chosenPosition == 7) {
      setSpot8("X");
      spotCheckers[7] = "X";
    }
    else if (chosenPosition == 8) {
      setSpot9("X");
      spotCheckers[8] = "X";
    }
    // when the computer finishes making a move, immediately check the result
    const gameResult = checkGameState();
    if (gameResult == 1) {
      setDisplayWinState("");
      return;
    } else if (gameResult == 2) {
      setDisplayLoseState("");
      return;
    } else if (gameResult == 0){
      setDisplayDrawState("");
      return;
    }

    currentPlayer = user; // rotate to the user
  }

  function transition() { // after 0.1 second, the computer will make a random move
    setTimeout(()=>{
      computerAction();
    },100);
  }

  function handleClick(e) {
    const gameResult = checkGameState()
    if (gameResult == 1) {
      setDisplayWinState("");
      return;
    } else if (gameResult == 2) {
      setDisplayLoseState("");
      return;
    } else if (gameResult == 0){
      setDisplayDrawState("");
      return;
    }

    if (currentPlayer == user) { // if it is the user's turn then we record and click and change it
      const {id} = e.target; // deconstruct the event object
      if (id === "1") {
        if (spotCheckers[0] !== "X" && spotCheckers[0] !== "O" ) {
          setSpot1("O");
          spotCheckers[0] = "O";
        } else {
          console.log("not again");
          return;
        }
      } else if (id === "2") {
        if (spotCheckers[1] !== "X" && spotCheckers[1] !== "O" ) {
          setSpot2("O");
          spotCheckers[1] = "O";
        } else {
          console.log("not again");
          return;
        }
      } else if (id === "3") {
        if (spotCheckers[2] !== "X" && spotCheckers[2] !== "O" ) {
          setSpot3("O");
          spotCheckers[2] = "O";
        } else {
          console.log("not again");
          return;
        }
      } else if (id === "4") {
        if (spotCheckers[3] !== "X" && spotCheckers[3] !== "O" ) {
          setSpot4("O");
          spotCheckers[3] = "O";
        } else {
          console.log("not again");
          return;
        }
      } else if (id === "5") {
        if (spotCheckers[4] !== "X" && spotCheckers[4] !== "O" ) {
          setSpot5("O");
          spotCheckers[4] = "O";
        } else {
          console.log("not again");
          return;
        }

      } else if (id === "6") {
        if (spotCheckers[5] !== "X" && spotCheckers[5] !== "O" ) {
          setSpot6("O");
          spotCheckers[5] = "O";
        } else {
          console.log("not again");
          return;
        }
      } else if (id === "7") {
        if (spotCheckers[6] !== "X" && spotCheckers[6] !== "O" ) {
          setSpot7("O");
          spotCheckers[6] = "O";
        } else {
          console.log("not again");
          return;
        }

      } else if (id === "8") {
        if (spotCheckers[7] !== "X" && spotCheckers[7] !== "O" ) {
          setSpot8("O");
          spotCheckers[7] = "O";
        } else {
          console.log("not again");
          return;
        }

      } else if (id === "9") {
        if (spotCheckers[8] !== "X" && spotCheckers[8] !== "O" ) {
          setSpot9("O");
          spotCheckers[8] = "O";
        } else {
          console.log("not again");
          return;
        }
      }
      // console.log(spotCheckers);
      transition(); // transition to the computer
    }


  }

  return(
    <div className = "Board">
      <div style={{display:displayWinState}} className= "winningMessage">
      <h1 >You Win!</h1>
      <img src="./img/smallBlackMan.gif" alt="smart black man" width="200"></img>
      </div>
      <div style={{display:displayLoseState}} className= "losingMessage" >
      <h1 >You Lose!</h1>
      <img src="./img/sucker.gif" alt="sucker man" width="200"></img>
      </div>
      <div style={{display:displayDrawState}} className= "drawGameMessage">
      <h1 >It's a draw!</h1>
      <img src="./img/tieGame.gif" alt="tie game" width="200"></img>
      </div>

      <div className = "row border-b" style={{display:props.unlockGame}}>
        <div onClick= {handleClick} className ="col border-r" id="1">{spot1}</div>
        <div onClick= {handleClick} className ="col border-r" id="2">{spot2}</div>
        <div onClick= {handleClick} className ="col " id="3">{spot3}</div>
      </div>
      <div className = "row border-b" style={{display:props.unlockGame}}>
        <div onClick= {handleClick} className ="col border-r" id="4">{spot4}</div>
        <div onClick= {handleClick} className ="col border-r" id="5">{spot5}</div>
        <div onClick= {handleClick} className ="col " id="6">{spot6}</div>
      </div>
      <div className = "row" style={{display:props.unlockGame}}>
        <div onClick= {handleClick} className ="col border-r" id="7">{spot7}</div>
        <div onClick= {handleClick} className ="col border-r" id="8">{spot8}</div>
        <div onClick= {handleClick} className ="col " id="9">{spot9}</div>
      </div>
      <div className = "menu">
        <button onClick={startGame} className= "playAgainButton">Play again</button>

      </div>
    </div>
  );
}


export default Board;
