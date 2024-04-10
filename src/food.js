import { getRandomPosition } from "./map";

class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  atPosition(x, y) {
    return this.x === x && this.y === y;
  }

  get points() {
    return 1;
  }
}

function getFoodAtRandomPosition() {
  const { x, y } = getRandomPosition();
  return new Food(x, y);
}

export { Food, getFoodAtRandomPosition };
