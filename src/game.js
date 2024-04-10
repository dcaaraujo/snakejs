import { getNewSnakeAtRandomPosition } from "./snake";
import { renderGrid } from "./render";
import { getNewFoodAtRandomPosition } from "./food";

const TICK_INTERVAL = 800;

class SnakeGame {
  constructor(canvas, pointsObserver) {
    this.canvas = canvas;
    this.pointsObserver = pointsObserver;
  }

  start() {
    this.snake = getNewSnakeAtRandomPosition();
    this.ticker = setInterval(() => this.#tick(), TICK_INTERVAL);
    this.totalPoints = 0;
    this.food = getNewFoodAtRandomPosition();
  }

  onKeyPressed(event) {
    switch (event.key) {
      case "ArrowUp":
        if (this.snake.facingLeft || this.snake.facingRight) {
          this.snake.faceUp();
        }
        break;
      case "ArrowDown":
        if (this.snake.facingLeft || this.snake.facingRight) {
          this.snake.faceDown();
        }
        break;
      case "ArrowLeft":
        if (this.snake.facingUp || this.snake.facingDown) {
          this.snake.faceLeft();
        }
        break;
      case "ArrowRight":
        if (this.snake.facingUp || this.snake.facingDown) {
          this.snake.faceRight();
        }
        break;
      default:
        break;
    }
  }

  #tick() {
    this.snake.move();
    if (this.snake.atPosition(this.food.x, this.food.y)) {
      this.#updatePoints();
      this.food = getNewFoodAtRandomPosition();
    }
    renderGrid(this.canvas, this.snake, this.food);
  }

  #updatePoints() {
    this.totalPoints += this.food.points;
    this.pointsObserver(this.totalPoints);
  }
}

export { SnakeGame };
