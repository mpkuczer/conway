import { useState, useEffect, useRef } from "react";
import useInterval from '../hooks/useInterval';
import Board from './Board'
import Controls from './Controls'
import Drawer from './Drawer'
import {
  ACORN,
  PULSAR,
  GLIDER,
  PENTADECATHLON,
  LWSS,
  MWSS,
  HWSS,
  R_PENTOMINO,
  DIEHARD,
  GOSPER_GLIDER_GUN,
  centerPattern, 
} from '../patterns/index'
import '../stylesheets/Game.css'

export default function Game() {
  const BOARD_SIZE = 75;
  const INTERVAL = 50;
  const INITIAL_PATTERN = GOSPER_GLIDER_GUN;

  const [state, setState] = useState(
    Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(false)).map((row, i) => {
      return row.map((cell, j) => {
        return centerPattern(INITIAL_PATTERN, BOARD_SIZE).reduce((acc, [_i, _j]) => {
          return acc || (i == _i && j == _j)
        }, false)
      })
    })
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  useInterval(handleNextButtonClick, isPlaying ? INTERVAL : null)

  // const aliveCellIndices = state.map((row, i) => {
  //   return row.map((cell, j) => {
  //     return cell ? [i, j] : []
  //   })
  // }).flat();

  // const eligibleCellIndices = aliveCellIndices.reduce((acc, indices) => {
  //   return [...acc, ...neighborIndices(...indices)]
  // }, [])

  // function neighborIndices(i, j) {
  //   return [
  //     [i-1, j-1],
  //     [i-1, j],
  //     [i-1, j+1],
  //     [i, j-1],
  //     [i, j+1],
  //     [i+1, j-1],
  //     [i+1, j],
  //     [i+1, j+1]
  //   ].filter((_i, _j ) => {
  //     _i >= 0 && _j >= 0 && _i < BOARD_SIZE && _j < BOARD_SIZE
  //   })
  // }

  function handleCellClick(i, j) {
    setState(
      state.map((row, _i) => {
        return row.map((isAlive, _j) => {
          if (_i === i && _j === j) {
            return !isAlive
          } else
            return isAlive
          })
        })
    )
  }

  ///

  function handleNextButtonClick() {
    // eligibleCellIndices.forEach(([i, j]) => {
    //   setState((state) => {
    //     state.map((row, _i) => {
    //       return row.map((cell, j) => {
    //         if (!state[i][j] && neighbourCount(i, j) === 3) {
    //           return true
    //         } else if (state[i][j] && neighbourCount(i, j) < 2 || neighbourCount(i, j) > 3) {
    //           return false
    //         } else {
    //           return cell
    //         }
    //       })
    //     })
    //   })
    // })
    setState(state.map((row, i) => {
        return row.map((cell, j) => {
          if (!state[i][j] && neighbourCount(i, j) === 3) {
            return true
          } else if (state[i][j] && neighbourCount(i, j) < 2 || neighbourCount(i, j) > 3) {
            return false
          } else {
            return cell
          }
        })
      })
    )
  }

  function handlePlayButtonClick() {
    setIsPlaying(!isPlaying)
  }

  function handleClearButtonClick() {
    setIsPlaying(false);
    setState(state.map((row) => {
      return row.map((cell) => {
        return false
      })
    }))
  }

  function handleRandomButtonClick() {
    setIsPlaying(false);
    setState(state.map((row) => {
      return row.map((cell) => {
        return Math.random() > 0.7
      })
    }))
  }

  function handleExploreButtonClick() {
    setDrawerIsOpen(!drawerIsOpen)
  }

  function neighbourCount(i, j) {
    if (i === 0 || j === 0 || i === BOARD_SIZE - 1 || j === BOARD_SIZE - 1) { 
      return 0
    }

    return [
      state[i-1][j-1],
      state[i-1][j],
      state[i-1][j+1],
      state[i][j-1],
      state[i][j+1],
      state[i+1][j-1],
      state[i+1][j],
      state[i+1][j+1]
    ].reduce((acc, isAlive) => {
      return isAlive ? acc + 1 : acc
    }, 0)
  }



  return (
    <div id="board-with-controls">
      <Drawer isOpen={drawerIsOpen}/>
      <Controls
        isPlaying={isPlaying}
        handleNextButtonClick={handleNextButtonClick}
        handlePlayButtonClick={handlePlayButtonClick}
        handleClearButtonClick={handleClearButtonClick}
        handleExploreButtonClick={handleExploreButtonClick}
        handleRandomButtonClick={handleRandomButtonClick}
      />
      <Board state={state} handleCellClick={handleCellClick}/>
   </div>
  )
  }

  