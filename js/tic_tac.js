let userText = document.getElementById('userText')
let rstartBtn = document.getElementById('rstartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winningblocks')
console.log(boxes)

const O_TEXT='0'
const X_TEXT='X'
let currentPlayer=X_TEXT
let spaces=Array(9).fill(null)

console.log(spaces)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked (e) {
    /*console.log(e.target)*/
    const id = e.target.id
    if(!spaces[id]){
        spaces[id]= currentPlayer
        e.target.innerText = currentPlayer

     if(playerHasWon() !==false){
            playerText= `${currentPlayer} has won!`
            let winningblocks=playerHasWon()

            winningblocks.map(box => boxes[box].style.backgroundColor=winnerIndicator)
            return 
        }

        currentPlayer= currentPlayer== X_TEXT ? O_TEXT:X_TEXT

   
    }
}

const winningcombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8],
    
]

function playerHasWon(){
    for (const condition of winningcombo) {
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return[a,b,c]
        }
    }
    return false
}
rstartBtn.addEventListener('click' , restart)

function restart(){
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText=''
        box.style.backgroundColor=''
    })


    playerText='Tic Tac Toe'
    
    currentPlayer=X_TEXT 

}


startGame()