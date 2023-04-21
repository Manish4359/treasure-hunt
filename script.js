import data from './boardData.js'

const maxLife=3;
let gold = 0
let silver = 0
let bronze = 0;
let lives = 3;
let score = 0;
let highScore=0;


let boardData = [...data]

const boardSize = 3 * 3;
const board = document.getElementById('board');
const lifeBar = document.querySelector('.lives-bar')
const goldScore = document.querySelector('.score-gold')
const bronzeScore = document.querySelector('.score-bronze')
const silverScore = document.querySelector('.score-silver')
const totalScore = document.querySelector('.current-score')
const resetBtn=document.querySelector('.btn-reset')
const setHighScore=document.querySelector('.high-score')
const btnPlay=document.querySelector('.btn-play')



btnPlay.addEventListener('click',(e)=>{

    const name=document.querySelector('.player-name-input')
    console.log(name.value);

    if(name.value===''){
        alert('Enter your name!!!')
        return
    }
    document.querySelector('.player-name').textContent=name.value
    document.querySelector('.play-modal').style.display='none'
})

resetBtn.addEventListener('click',(e)=>{
    finishGame()
})

for (let i = 0; i < boardSize; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    block.id = i;
    block.addEventListener('click', blockClick);
    board.appendChild(block);
}


function blockClick(e) {

    lives--;
    const blockId = e.target.id
    if (e.target.classList.contains('clicked')) return
    else e.target.classList.add('clicked')
    console.log(boardData[blockId])

    if (lives < 0) {
        finishGame()
        return
    }
    
    if (Object.keys(boardData[blockId]).length === 0) {
        return
    }
    
    gold += boardData[blockId].gold ?? 0
    silver += boardData[blockId].silver ?? 0
    bronze += boardData[blockId].bronze ?? 0
    lives =  Math.min(maxLife,boardData[blockId].medkit ?? lives)
    boardData[blockId] = {}

    score = gold * 7 + silver * 4 + bronze * 1

    changeScores()

    
    lifeBar.style.width=`${Math.floor((Math.min(lives,maxLife)/maxLife)*100)}%`
    console.log(gold, silver, bronze, lives)
}

function finishGame() {
    console.log('your final score : ' + score)
    Array.from(board.children).forEach(child => child.classList.remove('clicked'))

    highScore=Math.max(highScore,score)
    setHighScore.children[1].textContent=highScore


    gold = 0;
    silver = 0;
    bronze = 0;
    lives = 3;
    score = 0;

    changeScores()
    lifeBar.style.width=`100%`

    boardData=[...data]
}

function changeScores(){
    goldScore.children[1].textContent = gold
    silverScore.children[1].textContent = silver
    bronzeScore.children[1].textContent = bronze
    totalScore.textContent = `score : ${score}`
}

