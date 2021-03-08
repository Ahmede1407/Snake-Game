import {
  snakeSpeed,
  update as updateSnake,
  draw as drawSnake,
  snakeHead,
  snakeIntersections,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";
import { outGameBoard } from "./position.js";

let lastRenderTime = 0;
let gameOver = false;
let gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("Game Over!. Press OK to restart the game.")) {
      window.location = "/";
    }
    return;
  }
  window.requestAnimationFrame(main);
  let secondsSinceLastRendered = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRendered < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();

  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  lose();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function lose() {
  gameOver = outGameBoard(snakeHead()) || snakeIntersections();
}
