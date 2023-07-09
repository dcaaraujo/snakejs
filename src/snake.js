import {
  DIR_UP,
  DIR_DOWN,
  DIR_LEFT,
  DIR_RIGHT
} from "./constants";
import { generateSnakeStartPosition } from "./helpers";

export default class Snake {
  constructor() {
    const { x, y, dir } = generateSnakeStartPosition();
    this.posX = x;
    this.posY = y;
    this.dir = dir;
  }

  get currentPos() {
    const { posX, posY } = this;
    return { x: posX, y: posY };
  }

  move() {
    let { x, y } = this.currentPos;
    switch (this.dir) {
      case DIR_LEFT:
        x -= 1;
        break;
      case DIR_LEFT:
        x += 1;
        break;
      case DIR_UP:
        y -= 1;
        break;
      case DIR_DOWN:
        y += 1;
        break;
    }
    this.posX = x;
    this.posY = y;
  }

  changeDir(dir) {
    if (this._canChangeDir(dir)) {
      this.dir = dir;
    }
  }

  _canChangeDir(newDir) {
    if (this.dir === DIR_LEFT && newDir === DIR_RIGHT) {
      return false;
    }
    if (this.dir === DIR_RIGHT && newDir === DIR_LEFT) {
      return false;
    }
    if (this.dir === DIR_UP && newDir === DIR_DOWN) {
      return false;
    }
    if (this.dir === DIR_DOWN && newDir === DIR_UP) {
      return false;
    }
    return true;
  }
}
