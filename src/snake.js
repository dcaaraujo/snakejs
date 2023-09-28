import {
  DIR_UP,
  DIR_DOWN,
  DIR_LEFT,
  DIR_RIGHT,
  ALL_DIRECTIONS,
} from "./directions";
import { NUM_COLUMNS, NUM_ROWS, TILE_SIZE } from "./map";
import { random } from "underscore";

class Snake {
  constructor() {
    const { x, y, dir } = randomStartPosition();
    this.posX = x;
    this.posY = y;
    this.dir = dir;
    this.alive = true;
  }

  get currentPosition() {
    const { posX, posY } = this;
    return { x: posX, y: posY };
  }

  move() {
    if (!this.alive) {
      return;
    }
    let { x, y } = this.currentPosition;
    switch (this.dir) {
      case DIR_LEFT:
        x -= 1;
        break;
      case DIR_RIGHT:
        x += 1;
        break;
      case DIR_UP:
        y -= 1;
        break;
      case DIR_DOWN:
        y += 1;
        break;
    }
    this.posX = x;
    this.posY = y;
  }

  changeDir(dir) {
    if (this.#canChangeDir(dir)) {
      this.dir = dir;
    }
  }

  die() {
    this.alive = false;
  }

  #canChangeDir(newDir) {
    if (this.dir === DIR_LEFT) {
      return newDir !== DIR_RIGHT;
    }
    if (this.dir === DIR_RIGHT) {
      return newDir !== DIR_LEFT;
    }
    if (this.dir === DIR_UP) {
      return newDir !== DIR_DOWN;
    }
    if (this.dir === DIR_DOWN) {
      return newDir !== DIR_UP;
    }
    return true;
  }
}

function randomStartPosition() {
  const dir = ALL_DIRECTIONS[random(ALL_DIRECTIONS.length - 1)];
  return {
    x: random(NUM_COLUMNS - 1),
    y: random(NUM_ROWS - 1),
    dir: dir,
  };
}

function renderSnake(p5, snake) {
  const { x, y } = snake.currentPosition;
  p5.fill("green");
  p5.rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

export { Snake, renderSnake };
