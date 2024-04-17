import { getNewSnakeAtRandomPosition } from "./snake";
import { clearGrid, renderGrid } from "./render";
import { getNewFoodAtRandomPosition } from "./food";
import { willHitWallAt } from "./map";

const TICK_INTERVAL = 400;

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
    this.#spawnFood();
  }

  reset() {
    this.#removeTicker();
    this.start();
  }

  moveUp() {
    if (this.snake.isFacingLeft || this.snake.isFacingRight) {
      this.snake.faceUp();
    }
  }

  moveDown() {
    if (this.snake.isFacingLeft || this.snake.isFacingRight) {
      this.snake.faceDown();
    }
  }

  moveLeft() {
    if (this.snake.isFacingUp || this.snake.isFacingDown) {
      this.snake.faceLeft();
    }
  }

  moveRight() {
    if (this.snake.isFacingUp || this.snake.isFacingDown) {
      this.snake.faceRight();
    }
  }

  #tick() {
    this.snake.move();
    if (this.snake.headAtPosition(this.food)) {
      this.#updatePoints();
      this.snake.stretch();
      this.#spawnFood();
    }
    if (willHitWallAt(this.snake.head) || this.snake.isEatingItself) {
      this.#endGame();
    }
    renderGrid(this.canvas, this.snake, this.food);
  }

  #spawnFood() {
    this.food = getNewFoodAtRandomPosition((p) => !this.snake.hasPartAt(p));
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
