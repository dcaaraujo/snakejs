import { getRandomInt } from "./utils";

export const TILE_SIZE = 25;
export const NUM_COLUMNS = 30;
export const NUM_ROWS = 25;

export function getRandomPosition() {
  const x = getRandomInt(0, NUM_COLUMNS);
  const y = getRandomInt(0, NUM_ROWS);
  return { x, y };
}
