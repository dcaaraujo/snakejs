import { describe, expect, it } from "vitest";
import { Food } from "./food";

describe("food", () => {
  it("position", () => {
    const food = new Food(1, 2);
    const atPosition = food.atPosition({ x: 1, y: 2 });
    expect(atPosition).to.be.true;
  });
});
