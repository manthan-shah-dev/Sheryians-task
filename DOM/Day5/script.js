const btn = document.querySelector('button')
const timer = document.querySelector('#counter')
const main = document.querySelector('main')
const overlay = document.querySelector('.overlay')

const scoree = document.querySelector("#score")
let score = 0

const box = document.createElement('div')
box.classList.add('box')


let time = 0
let interval


const randomcolor = () => {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)

    return `rgb(${r} , ${g} , ${b})`;
}


const randombox = () => {
    box.style.backgroundColor = randomcolor()
    main.append(box)

    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;

    let rY = Math.random() * mainH;
    let rX = Math.random() * mainW

    box.style.top = `${rY}px`
    box.style.left = `${rX}px`
}


const timeUpdate = () => {
    timer.innerHTML = time
}

const scoreUpdate = () => {
    scoree.innerHTML = score
}

btn.addEventListener('click', () => {

    clearInterval(interval);
    interval = setInterval(() => {
        randombox()
        time += 1
        timeUpdate()

    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        overlay.style.display = 'block'
        setTimeout(() => {
            overlay.style.display = 'none';
            score = 0
            time = 0
            timeUpdate()
            scoreUpdate()
            main.removeChild(box)


        }, 3000)
    }, 10000);
})




box.addEventListener('click', () => {

    if (score >= time) return
    score += 1;
    scoreUpdate()
})