const board = document.querySelector("#board")
let round: number = 1
let gameOver: boolean = false

function createBoard(){
    round = 1
    let i:number = 0
    for(i; i<9; i++){
        console.log(i)
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('square-id', String(i));
        square.addEventListener("click", onClick)
        //i%2==0?square.innerHTML = iconO:square.innerHTML = iconX
        
        board?.append(square)
    }
}

createBoard()

const allSquares = document.querySelectorAll('.square')

function onClick(e: MouseEvent){
    if (gameOver) return

    const target = e.target as HTMLElement;
    if (target === e.currentTarget && target.getAttribute('square-id') && !target.innerHTML){
        console.log("I've been clicked." + target.getAttribute('square-id'))
        target.innerHTML = round % 2 == 0 ? iconO : iconX;
        round++
        getGameState()
    }
}

function getGameState(){
    //translate game state into an readable array
    let temp:number[] = []
    allSquares.forEach(square =>{
        let div = square.querySelector('div')
        if (div?.classList.contains("x")) {
            temp.push(1);
        } else if (div?.classList.contains("o")) {
            temp.push(2);
        } else {
            temp.push(0);
        }
    })

    //check array for wins.
    for(let j = 0; j<7; j+=3){
        if(temp[j] != 0 && temp[j] == temp[j+1] && temp[j] == temp[j+2]){
            gameWon()
        }
    }
    for(let j = 0; j<3; j++){
        if(temp[j] != 0 && temp[j] == temp[j+3] && temp[j] == temp[j+6]){
            gameWon()
        }
    }
    if (temp[0] != 0 && temp[0] == temp[4] && temp[0] == temp[8]) {
        gameWon()
    }
    if (temp[2] != 0 && temp[2] == temp[4] && temp[2] == temp[6]) {
        gameWon()
    }
}

function gameWon(){
    gameOver = true
    let winner:string = round%2===0?"X" : "O"
    let a = document.querySelector("p") as HTMLElement
    a.innerHTML = winner + " Wins!"
    
}