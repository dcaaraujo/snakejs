import { getNewSnakeAtRandomPosition } from "./snake";
import { clearGrid, renderGrid } from "./render";
import { getNewFoodAtRandomPosition } from "./food";
import { willHitWallAt } from "./map";

const TICK_INTERVAL = 800;

export class SnakeGame {
  constructor(canvas, delegate) {
    this.canvas = canvas;
    this.delegate = delegate;
  }

  start() {
    clearGrid(this.canvas);
    this.snake = getNewSnakeAtRandomPosition();
    this.ticker = setInterval(() => this.#tick(), TICK_INTERVAL);
    this.totalPoints = 0;
    this.food = getNewFoodAtRandomPosition();
  }

  reset() {
    this.#removeTicker();
    this.start();
  }

  moveUp() {
    if (this.snake.facingLeft || this.snake.facingRight) {
      this.snake.faceUp();
    }
  }

  moveDown() {
    if (this.snake.facingLeft || this.snake.facingRight) {
      this.snake.faceDown();
    }
  }

  moveLeft() {
    if (this.snake.facingUp || this.snake.facingDown) {
      this.snake.faceLeft();
    }
  }

  moveRight() {
    if (this.snake.facingUp || this.snake.facingDown) {
      this.snake.faceRight();
    }
  }

  #tick() {
    this.snake.move();
    if (this.snake.atPosition(this.food)) {
      this.#updatePoints();
      this.food = getNewFoodAtRandomPosition();
    }
    if (willHitWallAt(this.snake.head)) {
      this.#endGame();
    }
    renderGrid(this.canvas, this.snake, this.food);
  }

  #updatePoints() {
    this.totalPoints += this.food.points;
    this.delegate.onPointsUpdated(this.totalPoints);
  }

  #endGame() {
    this.#removeTicker();
    this.delegate.onGameEnded();
  }

  #removeTicker() {
    if (this.ticker) {
      clearInterval(this.ticker);
    }
  }
}
