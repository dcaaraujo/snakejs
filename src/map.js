import { getRandomInt } from "./utils";

const TILE_SIZE = 25;
const NUM_COLUMNS = 30;
const NUM_ROWS = 25;

function getRandomPosition() {
  const x = getRandomInt(0, NUM_COLUMNS);
  const y = getRandomInt(0, NUM_ROWS);
  return { x, y };
}

export { TILE_SIZE, NUM_COLUMNS, NUM_ROWS, getRandomPosition };
