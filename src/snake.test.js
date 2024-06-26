import { describe, expect, it } from "vitest";
import { Snake } from "./snake";

describe("snake", () => {
  it("has head", () => {
    const head = new Snake(1, 3).head;
    expect(head).is.not.undefined;
  });

  it("head at start position", () => {
    const { x, y } = new Snake(1, 3).head;
    expect(x).to.equal(1);
    expect(y).to.equal(3);
  });

  it("facing up", () => {
    const snake = new Snake(1, 3);
    snake.faceUp();
    expect(snake.isFacingUp).is.true;
    expect(snake.isFacingDown).is.false;
    expect(snake.isFacingLeft).is.false;
    expect(snake.isFacingRight).is.false;
  });

  it("facing down", () => {
    const snake = new Snake(1, 3);
    snake.faceDown();
    expect(snake.isFacingUp).is.false;
    expect(snake.isFacingDown).is.true;
    expect(snake.isFacingLeft).is.false;
    expect(snake.isFacingRight).is.false;
  });

  it("facing left", () => {
    const snake = new Snake(1, 3);
    snake.faceLeft();
    expect(snake.isFacingUp).is.false;
    expect(snake.isFacingDown).is.false;
    expect(snake.isFacingLeft).is.true;
    expect(snake.isFacingRight).is.false;
  });

  it("facing left", () => {
    const snake = new Snake(1, 3);
    snake.faceRight();
    expect(snake.isFacingUp).is.false;
    expect(snake.isFacingDown).is.false;
    expect(snake.isFacingLeft).is.false;
    expect(snake.isFacingRight).is.true;
  });

  it("moves up", () => {
    const snake = new Snake(1, 3);
    snake.faceUp();
    snake.move();
    const atPosition = snake.headAtPosition({ x: 1, y: 2 });
    expect(atPosition).to.be.true;
  });

  it("moves down", () => {
    const snake = new Snake(1, 3);
    snake.faceDown();
    snake.move();
    const atPosition = snake.headAtPosition({ x: 1, y: 4 });
    expect(atPosition).to.be.true;
  });

  it("moves left", () => {
    const snake = new Snake(1, 3);
    snake.faceLeft();
    snake.move();
    const atPosition = snake.headAtPosition({ x: 0, y: 3 });
    expect(atPosition).to.be.true;
  });

  it("moves right", () => {
    const snake = new Snake(1, 3);
    snake.faceRight();
    snake.move();
    const atPosition = snake.headAtPosition({ x: 2, y: 3 });
    expect(atPosition).to.be.true;
  });

  it("eats itself", () => {
    const snake = new Snake(1, 3);
    snake.faceUp();
    for (let i = 0; i < 5; i++) {
      snake.stretch();
    }
    snake.move();
    snake.faceRight();
    snake.move();
    snake.faceDown();
    snake.move();
    snake.faceLeft();
    snake.move();
    expect(snake.isEatingItself).to.be.true;
  });
});
