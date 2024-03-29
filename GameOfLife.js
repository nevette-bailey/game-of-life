class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    // Creates and returns a 2D Array
    // with `this.height` as rows and `this.width` as columns

    return Array(this.height).fill(Array(this.width).fill(0));
  }

  /**
   * Returns the cell value for a given row, col
   */

  getCell(row, col) {
    if (this.board[row][col] !== undefined) return this.board[row][col];
    else return 0;
  }

  /**
   * Sets a new value for a cell in the given coordinates
   */

  setCell(value, row, col) {
    if (this.board[row][col] !== undefined) {
      this.board[row][col] = value;
    }
  }

  /**
   * Toggle cell value
   */

  toggleCell(row, col) {
    if (this.board[row][col] !== undefined) {
      this.board[row][col]
        ? (this.board[row][col] = 0)
        : (this.board[row][col] = 1);
    }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
    let numLivingNeighbors = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (!this.board[i][j] || (i === row && j === col)) {
          continue;
        } else {
          numLivingNeighbors++;
        }
      }
    }

    return numLivingNeighbors;
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
