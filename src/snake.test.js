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
    expect(snake.facingUp).is.true;
    expect(snake.facingDown).is.false;
    expect(snake.facingLeft).is.false;
    expect(snake.facingRight).is.false;
  });

  it("facing down", () => {
    const snake = new Snake(1, 3);
    snake.faceDown();
    expect(snake.facingUp).is.false;
    expect(snake.facingDown).is.true;
    expect(snake.facingLeft).is.false;
    expect(snake.facingRight).is.false;
  });

  it("facing left", () => {
    const snake = new Snake(1, 3);
    snake.faceLeft();
    expect(snake.facingUp).is.false;
    expect(snake.facingDown).is.false;
    expect(snake.facingLeft).is.true;
    expect(snake.facingRight).is.false;
  });

  it("facing left", () => {
    const snake = new Snake(1, 3);
    snake.faceRight();
    expect(snake.facingUp).is.false;
    expect(snake.facingDown).is.false;
    expect(snake.facingLeft).is.false;
    expect(snake.facingRight).is.true;
  });

  it("moves up", () => {
    const snake = new Snake(1, 3);
    snake.faceUp();
    snake.move();
    const atPosition = snake.atPosition({ x: 1, y: 2 });
    expect(atPosition).to.be.true;
  });

  it("moves down", () => {
    const snake = new Snake(1, 3);
    snake.faceDown();
    snake.move();
    const atPosition = snake.atPosition({ x: 1, y: 4 });
    expect(atPosition).to.be.true;
  });

  it("moves left", () => {
    const snake = new Snake(1, 3);
    snake.faceLeft();
    snake.move();
    const atPosition = snake.atPosition({ x: 0, y: 3 });
    expect(atPosition).to.be.true;
  });

  it("moves right", () => {
    const snake = new Snake(1, 3);
    snake.faceRight();
    snake.move();
    const atPosition = snake.atPosition({ x: 2, y: 3 });
    expect(atPosition).to.be.true;
  });
});
