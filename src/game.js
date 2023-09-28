import { Snake, renderSnake } from "./snake";
import { DIR_UP, DIR_DOWN, DIR_LEFT, DIR_RIGHT } from "./directions";
import { NUM_COLUMNS, NUM_ROWS, TILE_SIZE, Map } from "./map";

const EVENT_LEFT_PRESSED = "left_pressed";
const EVENT_RIGHT_PRESSED = "right_pressed";
const EVENT_UP_PRESSED = "up_pressed";
const EVENT_DOWN_PRESSED = "down_pressed";
const EVENT_TICK = "tick";
const EVENT_SNAKE_HIT_WALL = "hit_wall";

class Game {
  constructor() {
    this.running = true;
    this.snake = new Snake();
    this.map = new Map();
  }

  sendEvent(event) {
    switch (event) {
      case EVENT_UP_PRESSED:
        this.snake.changeDir(DIR_UP);
        break;
      case EVENT_DOWN_PRESSED:
        this.snake.changeDir(DIR_DOWN);
        break;
      case EVENT_LEFT_PRESSED:
        this.snake.changeDir(DIR_LEFT);
        break;
      case EVENT_RIGHT_PRESSED:
        this.snake.changeDir(DIR_RIGHT);
        break;
      case EVENT_TICK:
        if (this.map.hasWallAt(this.snake.currentPosition)) {
          this.sendEvent(EVENT_SNAKE_HIT_WALL);
        } else {
          this.snake.move();
        }
        break;
      case EVENT_SNAKE_HIT_WALL:
        this.snake.die();
        break;
    }
  }
}

export default function runGame(p5) {
  const game = new Game();

  p5.setup = function () {
    const canvasWidth = TILE_SIZE * NUM_COLUMNS;
    const canvasHeight = TILE_SIZE * NUM_ROWS;
    p5.createCanvas(canvasWidth, canvasHeight);
    setInterval(() => game.sendEvent(EVENT_TICK), 800);
  };

  p5.draw = function () {
    p5.clear();
    p5.background("#f1f1f1");
    renderGrid(p5);
    renderSnake(p5, game.snake);
  };

  p5.keyPressed = function () {
    switch (p5.keyCode) {
      case p5.LEFT_ARROW:
        game.sendEvent(EVENT_LEFT_PRESSED);
        break;
      case p5.RIGHT_ARROW:
        game.sendEvent(EVENT_RIGHT_PRESSED);
        break;
      case p5.UP_ARROW:
        game.sendEvent(EVENT_UP_PRESSED);
        break;
      case p5.DOWN_ARROW:
        game.sendEvent(EVENT_DOWN_PRESSED);
        break;
    }
  };
}

function renderGrid(p5) {
  p5.noFill();
  for (let x = 0; x < NUM_COLUMNS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      p5.rect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}
