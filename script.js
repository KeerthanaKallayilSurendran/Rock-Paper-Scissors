totalScore = {playerScore:0, computerScore:0}
let totalComputerScore = 0
let totalPlayerScore = 0

function getComputerChoice(){
    let sps = ['Stone','Paper','Scissors']
    let computerChoice = Math.floor(Math.random()*3)
    return sps[computerChoice]
}

function getResult(playerChoice,computerChoice){
    let playerScore
    let computerScore
    if(playerChoice==computerChoice){
        playerScore=0
        computerScore=0
    }else if(playerChoice=="Stone" && computerChoice=="Scissors"){
        playerScore=1
        computerScore=-1
    }else if(playerChoice=="Scissors" && computerChoice=="Paper"){
        playerScore=1
        computerScore=-1
    }else if(playerChoice=="Paper" && computerChoice=="Stone"){
        playerScore=1
        computerScore=-1
    }else {
        playerScore=-1
        computerScore=1
    }
    return {playerScore,computerScore}
}

function btnClick(playerChoice){
    console.log(playerChoice)
    const computerChoice = getComputerChoice() 
    console.log(computerChoice)
    const score = getResult(playerChoice,computerChoice)
    totalComputerScore = totalComputerScore+ score.computerScore
    totalPlayerScore = totalPlayerScore + score.playerScore
    console.log(score.computerScore)
    console.log(score.playerScore)
    console.log({score})
    console.log({totalScore})
    displayResult(totalComputerScore, totalPlayerScore,playerChoice, computerChoice, score.playerScore)
}

function displayResult(totalComputerScore, totalPlayerScore, playerChoice, computerChoice,playerScore){
    const playerchoiceDiv = document.getElementById('playerchoice')
    const resultDiv = document.getElementById('result')
    const scoreDiv = document.getElementById('score')
    scoreDiv.innerText = `PlayerScore = ${totalPlayerScore}  ComputerScore = ${totalComputerScore}`
    playerchoiceDiv.innerText = `🧑 ${playerChoice}  vs 🤖 ${computerChoice}`
    if(playerScore == 1){
        resultDiv.innerText = 'You Win '
    } else if(playerScore == -1){
        resultDiv.innerText ='You Lose '
    }else {
        resultDiv.innerText = 'You Drew  '
    }
    
}

function playGame(){
    const btn = document.querySelectorAll('.btn')
    btn.forEach(btn => {
        btn.onclick = () => btnClick(btn.value)
    })

    const endGamebtn = document.getElementById('endGamebtn')
    endGamebtn.onclick = () => endGame(totalScore)
}


function endGame(finalScore){
    finalScore.computerScore = 0;
    finalScore.playerScore = 0;
    const resultDiv = document.getElementById('result')
    const playerchoiceDiv = document.getElementById('playerchoice')
    const scoreDiv = document.getElementById('score')

    resultDiv.innerText = " "
    playerchoiceDiv.innerText = " "
    scoreDiv.innerText = " "
}

playGame()

