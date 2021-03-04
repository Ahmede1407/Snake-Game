import { onSnake, expandSnake } from "./snake.js";
import { randomPosition } from "./position.js";

let food = randomFoodPosition();
let rateOfExpantion = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(rateOfExpantion);
    food = randomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");

  gameBoard.appendChild(foodElement);
}

function randomFoodPosition() {
  let newFoodPosition;

  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomPosition();
  }

  return newFoodPosition;
}
