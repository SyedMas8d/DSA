function uniquePath(m, n) {
    //   const board = Array.from({ length: m + 1 }, () => Array(n + 1)).fill(0);
    let board = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                board[i][j] = 1;
            } else {
                board[i][j] = board[i][j - 1] + board[i - 1][j];
            }
        }
    }

    console.log(board[m - 1][n - 1]);
}

uniquePath(3, 7);
