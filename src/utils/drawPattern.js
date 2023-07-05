function getPatternSize(pattern) {
  return pattern.reduce((acc, [i, j]) => {
    return [Math.max(acc[0], i), Math.max(acc[1], j)]
  }, [0, 0])
}

function alignPattern(data, defaultAlign, boardSize) {
  const MARGIN = 3;
  function getOffsets() {
    switch (defaultAlign) {
      case 'top-left':
        return [MARGIN, MARGIN]
      case 'top-center':
        return [MARGIN, Math.floor((boardSize - getPatternSize(data)[1]) / 2)]
      case 'top-right':
        return [MARGIN, boardSize - getPatternSize(data)[1] - MARGIN]
      case 'center-left':
        return [Math.floor((boardSize - getPatternSize(data)[0]) / 2), MARGIN]
      case 'center': 
        return getPatternSize(data).map((n) => Math.floor((boardSize - n) / 2))
      case 'center-right':
        return [Math.floor((boardSize - getPatternSize(data)[0]) / 2), boardSize - getPatternSize(data)[1] - MARGIN]
      case 'bottom-left':
        return [boardSize - getPatternSize(data)[0] - MARGIN, MARGIN]
      case 'bottom-center':
        return [boardSize - getPatternSize(data)[0] - MARGIN, Math.floor((boardSize - getPatternSize(data)[1]) / 2)]
      case 'bottom-right':
        return [boardSize - getPatternSize(data)[0] - MARGIN, boardSize - getPatternSize(data)[1] - MARGIN]
      default:
        return getPatternSize(data).map((n) => Math.floor((boardSize - n) / 2))
    }
  }
  const [offsetX, offsetY] = getOffsets();
  return data.map(([i, j]) => {
    return [i + offsetX, j + offsetY]
  })
}

export default function drawPattern(pattern, boardSize) { //ts
  const emptyBoard = Array(boardSize).fill(Array(boardSize).fill(false))
  return emptyBoard.map((row, i) => {
    return row.map((cell, j) => {
      return alignPattern(pattern.data, pattern.defaultAlign, boardSize).reduce((acc, [_i, _j]) => {
        return acc || (i == _i && j == _j)
      }, false)
    })
  })
}