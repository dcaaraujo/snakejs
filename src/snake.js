import { NUM_COLUMNS, NUM_ROWS } from "./map";

class Snake {
  constructor(startX, startY) {
    this.parts = [{ x: startX, y: startY }];
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

  moveUp() {
    this.head.y -= 1;
  }

  moveDown() {
    this.head.y += 1;
  }

  moveLeft() {
    this.head.x -= 1;
  }

  moveRight() {
    this.head.x += 1;
  }

  atPosition(x, y) {
    return this.head.x === x && this.head.y === y;
  }
}

export { Snake };
