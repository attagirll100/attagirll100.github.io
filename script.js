
    let playerbatman = "batman"
    let playerwonderwoman = "wonderwoman"
    let currentPlayer = playerwonderwoman;
    





document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('div.tile')//grabs all tile class in html
    const winner = document.getElementById('TheWinner')
    const displaycurrentplayer = document.getElementById('current-player')
    
    

let iscurrentPlayer = true

if( iscurrentPlayer === true) {
    displaycurrentplayer.innerHTML = currentPlayer
    iscurrentPlayer = false;
    tiles.addEventListener('click',(event) => {
    });


    //indicates what happens when its batmanman turn
    let currentPlayer = playerbatman
} else{ displaycurrentplayer.innerHTML = currentPlayer 
        tiles.addEventListener('click', () => {
            tiles.addEventListener('click',(event) => {
            });
  
}


function checkWin(TheWinner) {
    for(let i = 0; tiles.length; i++)

}

function youlose() {
    for(let i = 0; i < 4; i--) {
        console.log('you lose');
    }
}); 