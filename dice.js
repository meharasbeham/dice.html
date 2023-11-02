let player1score=0
let player2score=0
let player1Turn=true

const player1scorebox=document.getElementById("playe-1-score")
const player2scorebox=document.getElementById("player-2-score")
const player1scorupdate=document.getElementById("player-1-score-update")
const player2scorupdate=document.getElementById("player-2-score-update")
    
    
const messageTesxt=document.getElementById("message")
const rollbtn=document.getElementById("roll-btn")
const restartbtn=document.getElementById("restart-btn")
const scorebox1=document.getElementById("score-box-1")
const scorebox2=document.getElementById("score-box-2")

rollbtn.addEventListener('click',startgame)
restartbtn.addEventListener('dblclick')
function restartgame(){
    rollbtn.style.display="non"
    restartbtn.style.display="block"
}

function startgame(){
    let randomNumber=Math.floor(math.random()*6)+1

if (player1Turn){
    player1score+=randomNumber
    player1scorupdate.textContent=player1score
    player1scorebox.textContent=randomNumber
    scorebox1.classList.remove('active')
    scorebox2.classList.add('active')
    messageTesxt.textContent='player 2 turn'
}else{
    player2score+=randomNumber
    player2scorupdate.textContent=player1score
    player2scorebox.textContent=randomNumber
    scorebox2.classList.remove('active')
    scorebox1.classList.add('active')
    messageTesxt.textContent='player 1 turn'
}
player1Turn=!player1Turn
if(player1score>=30){
    messageTesxt.textContent="player 1 won..!!!"
    startgame()
}
else if(player2score>=30){
    messageTesxt.textContent="player 2 won..!!!"
    startgame()
}
player1Turn=!player1Turn

}
function startagain(){
    player1score=0
    player2score=0
    player1Turn=true

    messageTesxt.textContent="plear 1 turn"
    scorebox2.classList.remove('active')
    scorebox1.classList.add('active')

    player1scorebox.textContent='-'
    player2scorebox.textContent='-'
    player1scorupdate.textContent='0'
    player2scorupdate.textContent='0'
    rollbtn.style.display='block'
    restartbtn.style.display='non'

}
