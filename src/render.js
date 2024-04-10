import { NUM_COLUMNS, NUM_ROWS, TILE_SIZE } from "./map";

function getCanvasSize() {
  const width = NUM_COLUMNS * TILE_SIZE;
  const height = NUM_ROWS * TILE_SIZE;
  return { width, height };
}

function renderGrid(canvas, snake, food) {
  for (let x = 0; x < NUM_COLUMNS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      clearTile(canvas, x, y);

      if (snake.atPosition(x, y)) {
        renderSnake(canvas, x, y);
      } else if (food.atPosition(x, y)) {
        renderFood(canvas, x, y);
      } else {
        renderEmptyTile(canvas, x, y);
      }
    }
  }
}

function clearTile(canvas, x, y) {
  canvas.clearRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function renderSnake(canvas, x, y) {
  canvas.fillStyle = "green";
  canvas.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function renderFood(canvas, x, y) {
  canvas.fillStyle = "red";
  canvas.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function renderEmptyTile(canvas, x, y) {
  canvas.fillStyle = "white";
  canvas.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

export { getCanvasSize, renderGrid };
