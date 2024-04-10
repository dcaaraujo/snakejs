import { expect, test } from "vitest";
import { Snake } from "./snake";

test("Snake has head", () => {
  const head = new Snake(1, 3).head;
  expect(head).toBeDefined;
});

test("Snake head created at start position", () => {
  const head = new Snake(1, 3).head;
  expect(head.x).toBe(1);
  expect(head.y).toBe(3);
});

test("Snake is at position", () => {
  const snake = new Snake(1, 3);
  expect(snake.atPosition(1, 3)).toBeTruthy;
});

test("Snake moves up", () => {
  const snake = new Snake(1, 3);
  snake.moveUp();
  expect(snake.atPosition(0, 3)).toBeTruthy;
});

test("Snake moves down", () => {
  const snake = new Snake(1, 3);
  snake.moveDown();
  expect(snake.atPosition(2, 3)).toBeTruthy;
});

test("Snake moves down", () => {
  const snake = new Snake(1, 3);
  snake.moveLeft();
  expect(snake.atPosition(1, 2)).toBeTruthy;
});

test("Snake moves down", () => {
  const snake = new Snake(1, 3);
  snake.moveRight();
  expect(snake.atPosition(1, 4)).toBeTruthy;
});
