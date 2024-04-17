import { SnakeGame } from "./src/game";
import { getCanvasSize } from "./src/render";

const canvas = document.getElementById("snake");
const resetButton = document.getElementById("reset");

const { width, height } = getCanvasSize();
canvas.width = width;
canvas.height = height;

if (!canvas.getContext) {
  throw new Error("Cannot get canvas context");
}

const context = canvas.getContext("2d");
const game = new SnakeGame(context, {
  onPointsUpdated(points) {
    document.getElementById("points").innerText = `Points: ${points}`;
  },
  onGameEnded() {
    alert("Game Over!");
  }
});
resetButton.onclick = () => game.reset();
window.addEventListener("keydown", (e) => game.onKeyPressed(e));
game.start();
