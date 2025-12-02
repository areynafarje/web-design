let turnCounter = 0;
let grid = ["","","","","","","","",""]
const turnMessage = document.querySelector(".turnMessage");
turnMessage.innerText = "It is X's turn";
function checkTurn(box,index){
    if(box.innerText != "") return;
    const turn = turnCounter % 2 === 0 ? "X":"O";
    box.innerText = turn;
    box.classList.add(turn === "X"? "x-color" : "o-color");
    grid[index] = turn;
    const winnerChickenDinner = checkIfWin();
    if(winnerChickenDinner){
        alert(winnerChickenDinner + " is the winner!");
    }
    turnCounter++;
    turnMessage.innerText =
        (turnCounter % 2 === 0) ? "It's X's turn" : "It's O's turn";
}

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [1,4,7],
    [0,4,8],
    [2,4,6] 
];

function checkIfWin(){
    for(let pattern of winPatterns){
        const [a,b,c] = pattern;
        if(grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
            return grid[a];
        }
    }
    const catsGame = grid.every(cell => cell !== "");
    if(catsGame){
        window.alert("Cat's game!")
    }
}

const cell = document.querySelectorAll(".box");
cell.forEach((box, index) => {
    box.addEventListener("click", function(){
     checkTurn(box,index);
    });
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click",function(){
    cell.forEach(box => {
        box.innerText = "";
        box.classList.remove("x-color","o-color");
    });

    turnCounter = 0;
    grid = grid = ["","","","","","","","",""];
    window.alert("The game has been reset!")
});
