import { Snake } from "./snake";
import { renderGrid } from "./render";

class SnakeGame {
  constructor(canvas) {
    this.canvas = canvas;
  }

  start() {
    this.snake = new Snake(0, 0);
    this.ticker = setInterval(() => this.tick(), 500);
  }

  onKeyPressed(event) {
    switch (event.key) {
      case "ArrowUp":
        if (this.snake.canMoveUp()) {
          this.snake.moveUp();
        }
        break;
      case "ArrowDown":
        if (this.snake.canMoveDown()) {
          this.snake.moveDown();
        }
        break;
      case "ArrowLeft":
        if (this.snake.canMoveLeft()) {
          this.snake.moveLeft();
        }
        break;
      case "ArrowRight":
        if (this.snake.canMoveRight()) {
          this.snake.moveRight();
        }
        break;
      default:
        break;
    }
  }

  tick() {
    renderGrid(this.canvas, this.snake);
  }
}

export { SnakeGame };
