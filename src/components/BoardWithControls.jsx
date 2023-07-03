import { useState, useEffect } from "react";
import Board from './Board'
import Controls from './Controls'

export default function BoardWithControls() {
  const BOARD_SIZE = 50;
  const [ state, setState ] = useState(Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(false)))

  const aliveCells = state.filter((row, i) => {
    return row.filter((isAlive) => {
      return isAlive
    }).length > 0
  })

  const aliveCellIndices =

  -BOARDSIZE-1 -BOARDSIZE -BOARDSIZE+1
  -1 +1 
  +BOARDSIZE-1 +BOARDSIZE +BOARDSIZE+1

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
    setState(
      state.map((row, i) => {
        return row.map((isAlive, j) => {
          if (isAlive && (neighbourCount(i, j) < 2 || neighbourCount(i, j) > 3)) {
            return false
          } else if (!isAlive && neighbourCount(i, j) === 3) {
            return true
          } else {
            return isAlive
          }
        })
      })
    )
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
    <>
    <Controls handleNextButtonClick={handleNextButtonClick}/>
    <Board state={state} handleCellClick={handleCellClick}/>
   </>
  )
  }

  