
let gold=0
let silver=0
let bronze=0;
let lives=5;
let score=0;


let blockData = [

    {
        gold: 13,
        medkit: 1
    },
    {
        bronze: 2
    },
    {},
    {
        bronze: 7,
        medkit: 1
    },
    {
        gold: 20,
    },
    {
        bronze: 2
    },
    {},
    {
        silver: 10,
    },
    {}
]

const boardSize = 3*3;
const board = document.getElementById('board');
const lifeBar=document.querySelector('.lives')
const goldScore=document.querySelector('.score-gold')
const bronzeScore=document.querySelector('.score-bronze')
const silverScore=document.querySelector('.score-silver')
const totalScore=document.querySelector('.current-score')

for (let i = 0; i < boardSize; i++) {
    const block = document.createElement('div');
    block.className = 'block';
    block.id = i;
    block.addEventListener('click', blockClick);
    board.appendChild(block);
}


function  blockClick(e){

    lives--;

    lifeBar.textContent=lives
    const blockId=e.target.id
    if(e.target.classList.contains('clicked'))return
    else e.target.classList.add('clicked')
    console.log(blockData[blockId])

    if(Object.keys(blockData[blockId]).length===0){
        console.log(gold, silver , bronze ,lives)
        return
    }

    gold+=blockData[blockId].gold??0
    silver+=blockData[blockId].silver?? 0
    bronze+=blockData[blockId].bronze?? 0
    lives+=blockData[blockId].medkit ?? 0
    blockData[blockId]={}

    score= gold*7+silver*4+bronze*1

    goldScore.textContent=gold
    silverScore.textContent=silver
    bronzeScore.textContent=bronze
    totalScore.textContent= `score :${score}`

    console.log(gold, silver , bronze ,lives)
}



























