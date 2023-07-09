import { NUM_COLUMNS, NUM_ROWS, TILE_SIZE } from "./constants";

class Game {
  constructor() {
    this.running = true;
  }
}

function renderGrid(p5) {
  p5.noFill();
  for (let x = 0; x < NUM_COLUMNS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      p5.rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

export default function runGame(p5) {
  const game = new Game();

  p5.setup = function () {
    const canvasWidth = TILE_SIZE * NUM_COLUMNS;
    const canvasHeight = TILE_SIZE * NUM_ROWS;
    p5.createCanvas(canvasWidth, canvasHeight);
  };

  p5.draw = function () {
    p5.clear();
    p5.background("#f1f1f1");
    renderGrid(p5);
  }
}
