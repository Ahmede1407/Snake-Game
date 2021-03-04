let gridTemplateBoard = 21;

export function randomPosition() {
  return {
    x: Math.floor(Math.random() * gridTemplateBoard) + 1,
    y: Math.floor(Math.random() * gridTemplateBoard) + 1,
  };
}

// export function outGameBoard(position) {
//   return (
//     position.x < 1 ||
//     position.x > gridTemplateBoard ||
//     position.y < 1 ||
//     position.y > gridTemplateBoard
//   );
// }

export function outGameBoard(position) {
  return (
    position.x < 1 ||
    position.x > gridTemplateBoard ||
    position.y < 1 ||
    position.y > gridTemplateBoard
  );
}
