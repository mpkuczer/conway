// const ENDPOINT = 'http://conwaylife.com/patterns/'
// const url = (name) => `${ENDPOINT}${name}.rle`

// async function fetchRle(name){
//   const res = await fetch(url(name))
//   return res.text()
// }
export const ACORN = [
  [0, 1],
  [1, 3],
  [2, 0],
  [2, 1],
  [2, 4],
  [2, 5],
  [2, 6],
]

export const PULSAR = [
  [2, 4], [2, 5], [2, 6], [2, 10], [2, 11], [2, 12],
  [4, 2], [4, 7], [4, 9], [4, 14],
  [5, 2], [5, 7], [5, 9], [5, 14],
  [6, 2], [6, 7], [6, 9], [6, 14],
  [7, 4], [7, 5], [7, 6], [7, 10], [7, 11], [7, 12],
  [9, 4], [9, 5], [9, 6], [9, 10], [9, 11], [9, 12],
  [10, 2], [10, 7], [10, 9], [10, 14],
  [11, 2], [11, 7], [11, 9], [11, 14],
  [12, 2], [12, 7], [12, 9], [12, 14],
  [14, 4], [14, 5], [14, 6], [14, 10], [14, 11], [14, 12]
]

export const GLIDER = [[0,1], [1,2], [2,0], [2,1], [2,2]]

export const PENTADECATHLON = [[0, 1], [0, 2], [0, 3], [1, 1], [1, 3], [2, 1], [2, 2], [2, 3], [3, 1], [3, 2], [3, 3], [4, 1], [4, 3], [5, 1], [5, 2], [5, 3]]

export const LWSS = [[0, 1], [0, 4], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 5], [3, 0], [3, 4]]
export const MWSS = [[0, 2], [0, 3], [0, 6], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [2, 8], [3, 0], [3, 4], [3, 5], [3, 8], [4, 5], [4, 6], [4, 7], [5, 4], [5, 5]]
export const HWSS = [
  [0, 1], [0, 2],
  [1, 0], [1, 1], [1, 3], [1, 4], [1, 5], [1, 6],
  [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
  [3, 2], [3, 3], [3, 4], [3, 5]
]

export const R_PENTOMINO = [[0, 1], [0, 2], [1, 0], [1, 1], [2, 1]]
export const DIEHARD = [[0, 6], [1, 0], [1, 1], [2, 1], [2, 5], [2, 6], [2, 7]]
export const GOSPER_GLIDER_GUN = [[1, 24], [2, 22], [2, 24], [3, 12], [3, 13], [3, 20], [3, 21], [3, 34], [3, 35], [4, 11], [4, 15], [4, 20], [4, 21], [4, 34], [4, 35], [5, 0], [5, 1], [5, 10], [5, 16], [5, 20], [5, 21], [6, 0], [6, 1], [6, 10], [6, 14], [6, 16], [6, 17], [6, 22], [6, 24], [7, 10], [7, 16], [7, 24], [8, 11], [8, 15], [9, 12], [9, 13]]



export function centerPattern(pattern, boardSize) {
  const [offsetX, offsetY] = measurePatternSize(pattern).map((n) => Math.floor((boardSize - n) / 2))
  return pattern.map(([i, j]) => {
    return [i + offsetX, j + offsetY]
  })
}

function measurePatternSize(pattern) {
  return pattern.reduce((acc, [i, j]) => {
    return [Math.max(acc[0], i), Math.max(acc[1], j)]
  }, [0, 0])
}