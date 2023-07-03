import { useState, useEffect, useRef } from "react";
import useInterval from '../hooks/useInterval';
import Board from './Board'
import Controls from './Controls'
import Drawer from './Drawer'
import {
  PATTERNS,
  alignPattern, 
} from '../patterns/index'
import '../stylesheets/Game.css'

export default function Game() {
  const BOARD_SIZE = 75;
  const INTERVAL = 50;
  const INITIAL_PATTERN = PATTERNS['gosper_glider_gun'];

  const [state, setState] = useState(Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(false)))
  const [turns, setTurns] = useState(0)

  useEffect(() => {
    setPattern(INITIAL_PATTERN)
  }, [])
  const [isPlaying, setIsPlaying] = useState(false)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (
        !document.querySelector(".drawer").contains(e.target) &&
        !document.querySelector(".controls__explore").contains(e.target))  {
        setDrawerIsOpen(false);
      }
    });
  })

  useInterval(handleNextButtonClick, isPlaying ? INTERVAL : null)

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

  function handleNextButtonClick() {
    setTurns(turns+1)
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
    setTurns(0);
    setState(state.map((row) => {
      return row.map((cell) => {
        return false
      })
    }))
  }

  function handleRandomButtonClick() {
    setTurns(0);
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

  function setPattern(pattern) {
    setTurns(0)
    setIsPlaying(false);
    setState(state.map((row, i) => {
      return row.map((cell, j) => {
        return alignPattern(pattern.data, pattern.defaultAlign, BOARD_SIZE).reduce((acc, [_i, _j]) => {
          return acc || (i == _i && j == _j)
        }, false)
      })
    }))
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
      <Drawer
        isOpen={drawerIsOpen}
        setPattern={setPattern}/>
      <Controls
        turns={turns}
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

  