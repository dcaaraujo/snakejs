import { NUM_COLUMNS, NUM_ROWS } from "./map";

class Snake {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  canMoveUp() {
    return this.y - 1 >= 0;
  }

  canMoveDown() {
    return this.y + 1 < NUM_ROWS;
  }

  canMoveLeft() {
    return this.x - 1 >= 0;
  }

  canMoveRight() {
    return this.x + 1 < NUM_COLUMNS;
  }

  moveUp() {
    this.y -= 1;
  }

  moveDown() {
    this.y += 1;
  }

  moveLeft() {
    this.x -= 1;
  }

  moveRight() {
    this.x += 1;
  }

  atPosition(x, y) {
    return this.x === x && this.y === y;
  }
}

export { Snake };
