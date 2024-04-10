import { Snake } from "./snake";
import { renderGrid } from "./render";
import { getRandomPosition } from "./map";
import { getFoodAtRandomPosition } from "./food";

const TICK_INTERVAL = 500;

class SnakeGame {
  constructor(canvas) {
    this.canvas = canvas;
  }

  start() {
    const snakeStart = getRandomPosition();
    this.snake = new Snake(snakeStart.x, snakeStart.y);
    this.ticker = setInterval(() => this.tick(), TICK_INTERVAL);
    this.food = getFoodAtRandomPosition();
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
    renderGrid(this.canvas, this.snake, this.food);
  }
}

export { SnakeGame };
