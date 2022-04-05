let grid = document.querySelector("#grid");
let color = "black";
let gridWidth = grid.offsetWidth - 10;
let mouseDown = false;
let click = false;





grid.addEventListener('mousedown', ()=> {
  mouseDown = true;
});
document.querySelector("body").addEventListener('mouseup', ()=> {
  mouseDown = false;
})


function createSquares(gridSize) {
  let square2 = grid.querySelectorAll("div");
  square2.forEach((element) => {
    element.remove();
  });
  let square = [];
  let squareSize = gridWidth / gridSize;
  for (let i = 1; i <= gridSize * gridSize; i++) {
    square[i] = document.createElement("div");
    grid.appendChild(square[i]);
    square[i].style.cssText =
      "background-color:white;border:0px;border-style:solid";
    square[i].style.width = squareSize + "px";
    square[i].style.height = squareSize + "px";
    square[i].id = "square" + i;
    square[i].addEventListener("mouseover", changeSquareColor);
    square[i].addEventListener("click", changeSquareColorClick);
  }
}

function changeSquareColorClick(e) {
  let squareChange = document.querySelector(`#${e.target.id}`);
  if (color === "random") {
    squareChange.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    squareChange.style.backgroundColor = color;
  }
}

function changeSquareColor(e) {
  if (mouseDown) {
    let squareChange = document.querySelector(`#${e.target.id}`);
    if (color === "random") {
      squareChange.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      squareChange.style.backgroundColor = color;
    }
  }
}

function changeSquares(gridSize) {
  let gridSizeText = document.querySelector("#gridsizetext");
  if (gridSize < 1 || gridSize > 100) {
    gridSizeText.textContent = "Please choose between 1 and 100";
  } else {
    gridSizeText.textContent = "";
    createSquares(gridSize);
  }
}

function resetSquareColors() {
  let square2 = grid.querySelectorAll("div");
  square2.forEach((element) => {
    element.style.backgroundColor = "white";
  });
}

function changeColor(colorChange) {
  color = colorChange;
}

createSquares(16);
