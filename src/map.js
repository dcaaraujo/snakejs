import { getRandomInt } from "./utils";

export const TILE_SIZE = 25;
export const NUM_COLUMNS = 20;
export const NUM_ROWS = 15;

export function getRandomPosition() {
  const x = getRandomInt(0, NUM_COLUMNS);
  const y = getRandomInt(0, NUM_ROWS);
  return { x, y };
}

export function willHitWallAt({ x, y }) {
  const hitNorthWall = y < 0;
  const hitSouthWall = y >= NUM_ROWS;
  const hitEastWall = x < 0;
  const hitWestWall = x >= NUM_COLUMNS;
  return hitNorthWall || hitSouthWall || hitEastWall || hitWestWall;
}
