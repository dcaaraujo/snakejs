import { describe, expect, it } from "vitest";
import { NUM_COLUMNS, NUM_ROWS, willHitWallAt } from "./map";

describe("map", () => {
  it("will not hit wall", () => {
    const pos = { x: 1, y: 1 };
    expect(willHitWallAt(pos)).to.be.false;
  });

  it("will hit north wall", () => {
    const pos = { x: 1, y: -1 };
    expect(willHitWallAt(pos)).to.be.true;
  });

  it("will hit south wall", () => {
    const pos = { x: 1, y: NUM_ROWS };
    expect(willHitWallAt(pos)).to.be.true;
  });

  it("will hit west wall", () => {
    const pos = { x: -1, y: 3 };
    expect(willHitWallAt(pos)).to.be.true;
  });

  it("will hit east wall", () => {
    const pos = { x: NUM_COLUMNS, y: 3 };
    expect(willHitWallAt(pos)).to.be.true;
  });
});
