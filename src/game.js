import Snake from "./snake";
import {
  EVENT_LEFT_PRESSED,
  EVENT_RIGHT_PRESSED,
  EVENT_UP_PRESSED,
  EVENT_DOWN_PRESSED,
  EVENT_TICK,
  NUM_COLUMNS,
  NUM_ROWS,
  TILE_SIZE,
  DIR_UP,
  DIR_DOWN,
  DIR_LEFT,
  DIR_RIGHT,
} from "./constants";
import { renderGrid, renderSnake } from "./helpers";

class Game {
  constructor() {
    this.running = true;
    this.snake = new Snake();
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
        this.snake.move();
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
    setInterval(() => {
      game.sendEvent(EVENT_TICK);
    }, 800);
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
