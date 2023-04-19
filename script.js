import data from './boardData.js'

let gold = 0
let silver = 0
let bronze = 0;
let lives = 2;
let score = 0;


let boardData = [...data]

const boardSize = 3 * 3;
const board = document.getElementById('board');
const lifeBar = document.querySelector('.lives')
const goldScore = document.querySelector('.score-gold')
const bronzeScore = document.querySelector('.score-bronze')
const silverScore = document.querySelector('.score-silver')
const totalScore = document.querySelector('.current-score')

for (let i = 0; i < boardSize; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    block.id = i;
    block.addEventListener('click', blockClick);
    board.appendChild(block);
}


function blockClick(e) {

    lives--;

    lifeBar.textContent = lives
    const blockId = e.target.id
    if (e.target.classList.contains('clicked')) return
    else e.target.classList.add('clicked')
    console.log(boardData[blockId])

    if (Object.keys(boardData[blockId]).length === 0) {
        return
    }

    gold += boardData[blockId].gold ?? 0
    silver += boardData[blockId].silver ?? 0
    bronze += boardData[blockId].bronze ?? 0
    lives += boardData[blockId].medkit ?? 0
    boardData[blockId] = {}

    score = gold * 7 + silver * 4 + bronze * 1

    goldScore.textContent = gold
    silverScore.textContent = silver
    bronzeScore.textContent = bronze
    totalScore.textContent = `score :${score}`


    if (lives < 0) {
        finishGame()
    }

    console.log(gold, silver, bronze, lives)
}

function finishGame() {
    console.log('your final score : ' + score)
    Array.from(board.children).forEach(child => child.classList.remove('clicked'))

    gold = 0;
    silver = 0;
    bronze = 0;
    lives = 2;
    score = 0;

    boardData=[...data]
}





 




















