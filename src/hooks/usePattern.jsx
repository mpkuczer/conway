import { useReducer } from 'react';
import drawPattern from '../utils/drawPattern';
import nextPattern from '../utils/nextPattern';
import { PATTERNS } from '../patterns/index';

const BOARD_SIZE = 75;
const INITIAL_PATTERN = drawPattern(PATTERNS['gosper_glider_gun'], BOARD_SIZE);

function reducer(state, action) {
  switch (action.type) {

    // { type: 'toggleCell', payload: {i: 14, j: 23} }
    case 'toggleCell': {
      return state.map((row, i) => {
        return row.map((isAlive, j) => {
          if (i === action.payload.i && j === action.payload.j) {
            return !isAlive
          } else
            return isAlive
          })
        })
    }

    case 'nextPattern': {
      return nextPattern(state)
    }

    // { type: setPattern, payload: { data: [[1, 2], [2, 2], [3, 2]], defaultAlign: 'center' } }
    case 'setPattern': {
      return drawPattern(action.payload, BOARD_SIZE)
    }

    case 'clear': {
      return state.map((row) => {
        return row.map((cell) => {
          return false
        })
      })
    }
    case 'random': {
      return state.map((row) => {
        return row.map((cell) => {
          return Math.random() > 0.7
        })
      })
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default function usePattern() {
   const [state, dispatch] = useReducer(
    reducer,
    INITIAL_PATTERN
   )
  return [state, dispatch];
}