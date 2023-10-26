var maxMoves = function(grid) {
    const m = grid.length; 
    const n = grid[0].length; 
  
    const memo = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  
    const findMaxMoves = (row, col) => {
      if (row < 0 || row >= m || col < 0 || col >= n) {
        return 0;
      }
  
      if (memo[row][col] === -1) {
        let max = 0;
        const currentValue = grid[row][col];
  
        for (let newRow = row - 1; newRow <= row + 1; newRow++) {
          if (newRow >= 0 && newRow < m && grid[newRow][col + 1] > currentValue) {
            const moves = 1 + findMaxMoves(newRow, col + 1);
            max = Math.max(max, moves);
          }
        }
  
        memo[row][col] = max;
      }
  
      return memo[row][col];
    };
  
    let maxMoves = 0;
    for (let startRow = 0; startRow < m; startRow++) {
      maxMoves = Math.max(maxMoves, findMaxMoves(startRow, 0));
    }
  
    return maxMoves;
  };
  
  const grid1 = [[2,4,3,5],[5,4,9,3],[3,4,2,11],[10,9,13,15]];
  const grid2 = [[3,2,4],[2,1,9],[1,1,7]];
  
  console.log(maxMoves(grid1)); 
  console.log(maxMoves(grid2));