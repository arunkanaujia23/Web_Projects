const screens = document.querySelectorAll('.screen');
const start = document.getElementById('start-btn');
const chooseBtn = document.querySelectorAll('.choose-btn');
const gameMap = document.getElementById('game-container')
const timer = document.getElementById('time');
const scoreScreen  = document.getElementById('score');
const message = document.getElementById('message');

let seconds = 0;
let score = 0;
let selectedBtn = {};


start.addEventListener('click', () => {
    screens[0].classList.add('up')
})


chooseBtn.forEach( btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        selectedBtn = {src, alt};
        screens[1].classList.add('up')
        setTimeout( createElement, 1000 );
        startGame();
    })
})

const startGame = () => {
    setInterval( timerStart, 1000 );
}

const timerStart = () => {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        min = min < 10 ? `0${min}` : min;
        sec = sec < 10 ? `0${sec}` : sec;
        timer.innerHTML = `Time: ${min} : ${sec}`
        seconds++;
};

const createElement = () => {
    const element = document.createElement('div');
    element.classList.add('item')
    const { x, y} = getRandomLocationPoint();
    element.style.top = y + 'px';
    element.style.left = x + 'px';
    element.innerHTML = `<img src="${selectedBtn.src}" alt="${selectedBtn.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    element.addEventListener('click', catchElement)

    gameMap.appendChild(element);
};

const getRandomLocationPoint = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const x = Math.random() * (windowWidth - 200) +100;
    const y = Math.random() * (windowHeight - 200) +100;
    return {x, y};
}

const catchElement = (e) => {
    incrementScore();
    console.log(e.target.parentElement);
    e.target.parentElement.classList.add('catch');
    setTimeout(() => e.target.parentElement.classList.remove(), 2000);
    addElements();
}

const addElements = () => {
    setTimeout(createElement, 1000)
    setTimeout(createElement, 1500)
}
const incrementScore = () => {
    score += 1;
    if(score > 19){
        message.classList.add('visible');
    }
    scoreScreen.innerHTML = `Score: ${score}`
};