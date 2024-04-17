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

  canMoveUp() {
    return this.head.y - 1 >= 0;
  }

  canMoveDown() {
    return this.head.y + 1 < NUM_ROWS;
  }

  canMoveLeft() {
    return this.head.x - 1 >= 0;
  }

  canMoveRight() {
    return this.head.x + 1 < NUM_COLUMNS;
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

  atPosition(x, y) {
    return this.head.x === x && this.head.y === y;
  }

  #moveUp() {
    this.head.y -= 1;
  }

  #moveDown() {
    this.head.y += 1;
  }

  #moveLeft() {
    this.head.x -= 1;
  }

  #moveRight() {
    this.head.x += 1;
  }
}

export function getNewSnakeAtRandomPosition() {
  const { x, y } = getRandomPosition();
  return new Snake(x, y);
}
