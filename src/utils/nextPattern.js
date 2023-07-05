function neighbourCount(s, i, j) {
  const boardSize = s.length;
  if (i === 0 || j === 0 || i === boardSize - 1 || j === boardSize - 1) { 
    return 0
  }

  return [
    s[i-1][j-1],
    s[i-1][j],
    s[i-1][j+1],
    s[i][j-1],
    s[i][j+1],
    s[i+1][j-1],
    s[i+1][j],
    s[i+1][j+1]
  ].reduce((acc, isAlive) => {
    return isAlive ? acc + 1 : acc
  }, 0)
}

export default function nextPattern(s) {
  return s.map((row, i) => {
    return row.map((cell, j) => {
      if (!cell && neighbourCount(s, i, j) === 3) {
        return true
      } else if (cell && neighbourCount(s, i, j) < 2 || neighbourCount(s, i, j) > 3) {
        return false
      } else {
        return cell
      }
    })
  })
}