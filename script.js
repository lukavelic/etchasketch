let gridSize = 16;
const gridEle = document.querySelector('.grid');
let opac = 0.4;
let colorButton = document.getElementById('colorChange');
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let randomColor;

function createGrid(){
    const grid = document.querySelector('.grid');
    for(i = 0; i < gridSize*gridSize; i++){
        const box = document.createElement('div');
        box.classList.add('square');
        grid.appendChild(box);
    }
}
function hoverListener(){
    const grid = document.querySelectorAll('.square');
    for(i = 0; i < grid.length; i++){
        grid[i].addEventListener('mouseenter', detectColor);
    }
}
function hoverEffect(event){
    event.target.classList.add('onHover');
    let opacity = window.getComputedStyle(event.target).opacity;
    let newOpacity = parseFloat(opacity) + 0.1;
    event.target.style.opacity = newOpacity;
}
function hoverEffectRainbow(event){
    rainbowRandomizer();
    let bColor = window.getComputedStyle(event.target).backgroundColor;
    bColor.toString;
    if(bColor != 'rgba(206, 205, 205, 0.5)'){
        //
    } else {
        event.target.style.backgroundColor = `${randomColor}`;
        event.target.style.opacity = 1;
    }
}
function rainbowRandomizer(){
    randomColor = rainbow[Math.floor(Math.random()*7)];
}
function difColor(){
    if(colorButton.innerText == 'Rainbow'){
        colorButton.innerText = 'Black';
    } else if(colorButton.innerText == 'Black'){
        colorButton.innerText = 'Rainbow';
    }
}
function detectColor(){
    if(colorButton.innerText == 'Black'){
        hoverEffect(event);
    } else if (colorButton.innerText == 'Rainbow'){
        hoverEffectRainbow(event);
    }
}
function changeGrid(){
    gridSize = document.getElementById('inputGridSize').value;
    if(gridSize > 100){ 
        gridSize = 100;
    } else if (gridSize < 16) {
        gridSize = 16;
    }
    while (gridEle.firstChild) {
        gridEle.removeChild(gridEle.lastChild)
      }
    createGrid();
    hoverListener();
    let htWt = `calc(50vh/${gridSize})`
    const squares = document.getElementsByClassName('square');
    for(let i = 0; i < squares.length; i++){
        squares[i].style.height = htWt;
        squares[i].style.width = htWt;
    }
}
function resetGrid(){
    const grid = document.querySelectorAll('.square');
    for(i = 0; i < grid.length; i++){
        grid[i].classList.remove('onHover');
    }
    document.getElementById('inputGridSize').value = '16';
    changeGrid();
    opac = 0.4;
}

const change = document.querySelector('#change');
change.addEventListener('click', changeGrid)
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid)
const changeColor = document.querySelector('#colorChange');
changeColor.addEventListener('click', difColor);


createGrid();
hoverListener();