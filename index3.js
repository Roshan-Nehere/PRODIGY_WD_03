// const cells = document.querySelectorAll('[data-cell]');
// const resetButton = document.getElementById('reset');
// const message = document.getElementById('message');
// let currentPlayer = 'X';
// const board = Array(9).fill(null);

// const winningCombinations = [
//   [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
//   [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
//   [0, 4, 8], [2, 4, 6]             // diagonals
// ];

// function checkWin() {
//   return winningCombinations.find(combination => {
//     return combination.every(index => board[index] === currentPlayer);
//   });
// }

// function handleClick(e) {
//   const cell = e.target;
//   const index = Array.from(cells).indexOf(cell);

//   if (!board[index]) {
//     board[index] = currentPlayer;
//     cell.textContent = currentPlayer;
//     cell.classList.add('taken');

//     const winningCombination = checkWin();
//     if (winningCombination) {
//       // Highlight winning cells
//       winningCombination.forEach(index => {
//         cells[index].classList.add('winning');
//       });
//       message.textContent = `${currentPlayer} Is Winner!`;
//       cells.forEach(cell => cell.removeEventListener('click', handleClick)); // Disable further clicks
//       return;
//     }

//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//   }
// }

// function resetGame() {
//   board.fill(null);
//   cells.forEach(cell => {
//     cell.textContent = '';
//     cell.classList.remove('taken', 'winning'); // Remove styles
//     cell.addEventListener('click', handleClick); // Re-enable clicks
//   });
//   currentPlayer = 'X';
//   message.textContent = ''; // Clear the message
// }

// cells.forEach(cell => cell.addEventListener('click', handleClick));
// resetButton.addEventListener('click', resetGame);
const cells = document.querySelectorAll('[data-cell]');
const resetButton = document.getElementById('reset');
const message = document.getElementById('message');
let currentPlayer = 'X';
const board = Array(9).fill(null);

const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6]             // diagonals
];

function checkWin() {
  return winningCombinations.find(combination => {
    return combination.every(index => board[index] === currentPlayer);
  });
}

function checkDraw() {
  return board.every(cell => cell !== null); // Returns true if all cells are filled
}

function handleClick(e) {
  const cell = e.target;
  const index = Array.from(cells).indexOf(cell);

  if (!board[index]) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');

    const winningCombination = checkWin();
    if (winningCombination) {
      // Highlight winning cells
      winningCombination.forEach(index => {
        cells[index].classList.add('winning');
      });
      message.textContent = `${currentPlayer} Is Winner!`;
      cells.forEach(cell => cell.removeEventListener('click', handleClick)); // Disable further clicks
      return;
    }

    if (checkDraw()) {
      message.textContent = "Game is Draw!";
      cells.forEach(cell => cell.removeEventListener('click', handleClick)); // Disable further clicks
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function resetGame() {
  board.fill(null);
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('taken', 'winning'); // Remove styles
    cell.addEventListener('click', handleClick); // Re-enable clicks
  });
  currentPlayer = 'X';
  message.textContent = ''; // Clear the message
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
