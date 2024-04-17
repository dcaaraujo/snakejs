import { NUM_COLUMNS, NUM_ROWS, getRandomPosition } from "./map";

const DIR_UP = "DIR_UP";
const DIR_DOWN = "DIR_DOWN";
const DIR_LEFT = "DIR_LEFT";
const DIR_RIGHT = "DIR_RIGHT";

export class Snake {
  constructor(x, y) {
    this.parts = [{ x, y }];
    this.faceRight();
  }

  get head() {
    return this.parts[0];
  }

  get facingUp() {
    return this.direction === DIR_UP;
  }

  get facingDown() {
    return this.direction === DIR_DOWN;
  }

  get facingLeft() {
    return this.direction === DIR_LEFT;
  }

  get facingRight() {
    return this.direction === DIR_RIGHT;
  }

  faceUp() {
    this.direction = DIR_UP;
  }

  faceDown() {
    this.direction = DIR_DOWN;
  }

  faceLeft() {
    this.direction = DIR_LEFT;
  }

  faceRight() {
    this.direction = DIR_RIGHT;
  }

  move() {
    switch (this.direction) {
      case DIR_UP:
        this.#moveUp();
        break;
      case DIR_DOWN:
        this.#moveDown();
        break;
      case DIR_LEFT:
        this.#moveLeft();
        break;
      case DIR_RIGHT:
        this.#moveRight();
        break;
      default:
        break;
    }
  }

  stretch({ x, y }) {
    this.parts.push({ x, y });
  }

  atPosition({ x, y }) {
    return this.head.x === x && this.head.y === y;
  }

  hasPartAt({x, y}) {
    for (const part of this.parts) {
      if (part.x === x && part.y === y) {
        return true;
      }
    }
    return false;
  }

  #moveUp() {
    this.#moveSnakeBody();
    this.parts[0].y -= 1;
  }

  #moveDown() {
    this.#moveSnakeBody();
    this.parts[0].y += 1;
  }

  #moveLeft() {
    this.#moveSnakeBody();
    this.parts[0].x -= 1;
  }

  #moveRight() {
    this.#moveSnakeBody();
    this.parts[0].x += 1;
  }

  #moveSnakeBody() {
    for (let i = this.parts.length - 1; i > 0; i--) {
      const prev = this.parts[i - 1];
      this.parts[i].x = prev.x;
      this.parts[i].y = prev.y;
    }
  }
}

export function getNewSnakeAtRandomPosition() {
  const { x, y } = getRandomPosition();
  return new Snake(x, y);
}
