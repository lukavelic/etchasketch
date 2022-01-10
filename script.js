let gridSize = 16;
const gridEle = document.querySelector('.grid');
let opac = 0.4;

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
        grid[i].addEventListener('mouseenter', hoverEffect);
    }
}
function hoverEffect(event){
    let styles = window.getComputedStyle(event.target).backgroundColor;
    let opac = styles.slice(-4,-1);
    opac = parseFloat(opac);
    let newOpac = opac + 0.1;
    event.target.style.backgroundColor = `rgba(0, 0, 0, ${newOpac})`;
    // event.target.classList.add('onHover');
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


createGrid();
hoverListener();
