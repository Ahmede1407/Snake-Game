import {
  snakeSpeed,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";

import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
let gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  let secondsSinceLastRendered = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRendered < 1 / snakeSpeed) return;

  console.log("tested");
  lastRenderTime = currentTime;

  update();

  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
