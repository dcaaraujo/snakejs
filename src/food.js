import { getRandomPosition } from "./map";

export class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  atPosition({ x, y }) {
    return this.x === x && this.y === y;
  }

  get points() {
    return 1;
  }
}

export function getNewFoodAtRandomPosition() {
  const { x, y } = getRandomPosition();
  return new Food(x, y);
}
