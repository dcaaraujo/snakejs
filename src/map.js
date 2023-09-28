const TILE_SIZE = 25;
const NUM_COLUMNS = 30;
const NUM_ROWS = 25;

class Map {
  constructor() {}

  hasWallAt(position) {
    const { x, y } = position;
    return x < 0 || y < 0 || x == NUM_COLUMNS || y == NUM_ROWS;
  }
}

export { TILE_SIZE, NUM_COLUMNS, NUM_ROWS, Map };
