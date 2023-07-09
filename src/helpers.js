import {
  NUM_COLUMNS,
  NUM_ROWS,
  DIR_UP,
  DIR_DOWN,
  DIR_LEFT,
  DIR_RIGHT,
  TILE_SIZE,
} from "./constants";
import { random } from "underscore";

export function generateSnakeStartPosition() {
  function getStartX() {
    return random(NUM_COLUMNS - 1);
  }

  function getStartY() {
    return random(NUM_ROWS - 1);
  }

  function getDirection() {
    const dirOptions = [DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT];
    const i = random(dirOptions.length - 1);
    return dirOptions[i];
  }

  return {
    x: getStartX(),
    y: getStartY(),
    dir: getDirection(),
  };
}

export function renderGrid(p5) {
  p5.noFill();
  for (let x = 0; x < NUM_COLUMNS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      p5.rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

export function renderSnake(p5, snake) {
  const { x, y } = snake.currentPos;
  p5.fill("green");
  p5.rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}
