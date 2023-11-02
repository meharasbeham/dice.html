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

rollbtn.addEventListener('click',startGame)

function startGame(){
    let randomNumber=Math.floor(Math.random()*6)+1

if (player1Turn){
    player1score+=randomNumber
    player1scorupdate.textContent=player1score
}}