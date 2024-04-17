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

export function getNewFoodAtRandomPosition(validator) {
  let position = getRandomPosition();
  while (!validator(position)) {
    position = getRandomPosition();
  }
  return new Food(position.x, position.y);
}
