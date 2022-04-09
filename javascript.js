let grid = document.querySelector("#grid");
let color = "#0000FF";
let gridWidth = grid.offsetWidth - 10;
let mouseDown = false;
let click = false;
let sizeSlider = document.querySelector("#sizeslider");
let sizeValue = document.querySelector("#sizevalue");
let black = document.querySelector("#black");
let white = document.querySelector("#white");
let random = document.querySelector("#random");
let btnColor = document.querySelector("#btncolor");
let colorPicker = document.querySelector("#colorpicker");

function changeGridSize(gridSize) {
  sizeValue.textContent = gridSize + " x " + gridSize;
  createSquares(gridSize);
}

grid.addEventListener("mousedown", () => {
  mouseDown = true;
});
document.querySelector("body").addEventListener("mouseup", () => {
  mouseDown = false;
});

function clearSquare() {
  grid.querySelectorAll("div").forEach((element) => {
    element.remove();
  });
}

function createSquares(gridSize) {
  clearSquare();
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
    squareChange.style.backgroundColor = `hsl(${
      Math.random() * 360
    }, 100%, 50%)`;
  } else {
    squareChange.style.backgroundColor = color;
  }
}

function changeSquareColor(e) {
  if (mouseDown) {
    let squareChange = document.querySelector(`#${e.target.id}`);
    if (color === "random") {
      squareChange.style.backgroundColor = `hsl(${
        Math.random() * 360
      }, 100%, 50%)`;
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
  if (colorChange === "color") {
    color = colorPicker.value;
  } else {
  color = colorChange;
  }
  black.classList.remove("btn-on");
  white.classList.remove("btn-on");
  random.classList.remove("btn-on");
  btnColor.classList.remove("btn-on");
  if (color === "white") {
    white.classList.add("btn-on");
  } else if (color === "black") {
    black.classList.add("btn-on");
  } else if (color === "random") {
    random.classList.add("btn-on");
  } else {
    btnColor.classList.add("btn-on");
  }
  console.log(color);
}

createSquares(16);
