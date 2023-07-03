const ACORN = {
  data: [
    [0, 1],
    [1, 3],
    [2, 0],
    [2, 1],
    [2, 4],
    [2, 5],
    [2, 6],
  ],
  defaultAlign: 'center',
  assetPath: '/../assets/Acorn.png',
  humanName: 'Acorn',
}

const PULSAR = {
  data: [
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
  ],
  defaultAlign: 'center',
  assetPath: '/../assets/Pulsar.png',
  humanName: 'Pulsar',
}

const GLIDER = {
  data: [[0,1], [1,2], [2,0], [2,1], [2,2]],
  defaultAlign: 'top-left',
  assetPath: '../assets/Glider.png',
  humanName: 'Glider',
}

const PENTADECATHLON = {
  data: [[1, 2], [1, 7], [2, 0], [2, 1], [2, 3], [2, 4], [2, 5], [2, 6], [2, 8], [2, 9], [3, 2], [3, 7]],
  defaultAlign: 'center',
  assetPath: '../assets/Pentadecathlon.png',
  humanName: 'Pentadecathlon',
}

const LWSS = {
  data: [[1, 1], [1, 4], [2, 0], [3, 0], [3, 4], [4, 0], [4, 1], [4, 2], [4, 3]],
  defaultAlign: 'center-right',
  assetPath: '../assets/Lwss.png',
  humanName: 'Light weight spaceship',
}
const MWSS = {
  data: [[1, 3], [2, 1], [2, 5], [3, 0], [4, 0], [4, 5], [5, 0], [5, 1], [5, 2], [5, 3], [5, 4]],
  defaultAlign: 'center-right',
  assetPath: '../assets/Mwss.png',
  humanName: 'Middle weight spaceship',
}
const HWSS = {
  data: [
    [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 3], [1, 4], [1, 5], [1, 6],
    [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
    [3, 2], [3, 3], [3, 4], [3, 5]
  ],
  defaultAlign: 'center-right',
  assetPath: '../assets/Hwss.png',
  humanName: 'Heavy weight spaceship',
}

const R_PENTOMINO = {
  data: [[0, 1], [0, 2], [1, 0], [1, 1], [2, 1]],
  defaultAlign: 'center',
  assetPath: '../assets/Rpentomino.png',
  humanName: 'R-pentomino',
}
const DIEHARD = {
  data: [[0, 6], [1, 0], [1, 1], [2, 1], [2, 5], [2, 6], [2, 7]],
  defaultAlign: 'center',
  assetPath: '../assets/Diehard.png',
  humanName: 'Diehard',
}
const GOSPER_GLIDER_GUN = {
  data: [[1, 24], [2, 22], [2, 24], [3, 12], [3, 13], [3, 20], [3, 21], [3, 34], [3, 35], [4, 11], [4, 15], [4, 20], [4, 21], [4, 34], [4, 35], [5, 0], [5, 1], [5, 10], [5, 16], [5, 20], [5, 21], [6, 0], [6, 1], [6, 10], [6, 14], [6, 16], [6, 17], [6, 22], [6, 24], [7, 10], [7, 16], [7, 24], [8, 11], [8, 15], [9, 12], [9, 13]],
  defaultAlign: 'top-left',
  assetPath: '../assets/Gosperglidergun.png',
  humanName: 'Gosper glider gun',
}




export const PATTERNS = {
  'acorn': ACORN,
  'pulsar': PULSAR,
  'glider': GLIDER,
  'pentadecathlon': PENTADECATHLON,
  'lwss': LWSS,
  'mwss': MWSS,
  'hwss': HWSS,
  'r_pentomino': R_PENTOMINO,
  'diehard': DIEHARD,
  'gosper_glider_gun': GOSPER_GLIDER_GUN,
}
