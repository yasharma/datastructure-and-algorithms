function dfs(grid, i, j) {
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return 0;
    }
    grid[i][j] = '0';
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
    return 1;
}
function numIslands(grid) {
    if(grid.length === 0 || grid === null) return 0;
    let result = 0
    
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
                result += dfs(grid, i, j);
            }
        }
    }
    return result;
};

