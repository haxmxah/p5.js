let grid;
let colors;
var Nx = 10;
var Ny = 10;
var step = 5;

function setup() {
  createCanvas(1000, 1000);
  grid = createGrid(Nx, Ny);
  colors = createGrid(Nx, Ny); // Inicializa la matriz de colores
}

function draw() {
  background(255);
  displayGrid(grid, colors, width, height, Nx, Ny, step);
}

function createGrid(rows, cols) {
  let newGrid = [];
  let newColors = [];
  for (let i = 0; i < rows; i++) {
    newGrid[i] = [];
    newColors[i] = [];
    for (let j = 0; j < cols; j++) {
      newGrid[i][j] = false; // Inicialmente, todos los cuadrados están vacíos
      newColors[i][j] = color("white"); // Inicialmente, todos los colores son blancos
    }
  }
  return [newGrid, newColors];
}

function displayGrid(grid, colors, width, height, Nx, Ny, step) {
  let squareWidth = (width - (Nx + 1) * step) / Nx;
  let squareHeight = (height - (Ny + 1) * step) / Ny;

  for (let i = 0; i < grid[0].length; i++) {
    for (let j = 0; j < grid[0][i].length; j++) {
      let posX = step + j * (squareWidth + step);
      let posY = step + i * (squareHeight + step);

      if (
        mouseX > posX &&
        mouseX < posX + squareWidth &&
        mouseY > posY &&
        mouseY < posY + squareHeight
      ) {
        fill("black"); // Cambia el color al pasar el mouse
        colors[1][i][j] = color("black"); // Guarda el color si el cuadrado ha cambiado
      } else {
        fill(colors[1][i][j]); // Restablece el color guardado
      }
      rect(posX, posY, squareWidth, squareHeight);
    }
  }
}

function mouseMoved() {
  redraw(); // Redibuja cuando el mouse se mueve para actualizar los colores
}
