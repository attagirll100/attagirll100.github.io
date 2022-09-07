
let playerBatman = "blk"
let playerWonderwoman = "red"
let currPlayer = playerBatman;

let gameOver = false;
let Board;
// board contect
let rows = 4; 
let columns = 5;

windows.onload = function() { //https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    positionGame();
}



function positionGame() { // this function will popup tiles inside connect four board. 
    Board = []; //JS board the board correlates with the tile
    
    for(let r = 0; r < rows; r++) {
        let row = [];
        for(let c = 0; c < columns; c++) {

            

        }
    }



} 

