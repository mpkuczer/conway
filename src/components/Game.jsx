import { useState } from "react";
import { Board, Controls, Drawer } from './index'
import { useInterval, usePattern, useDrawer } from '../hooks/index'
import { PATTERNS } from '../patterns/index'

export default function Game() {
  const BOARD_SIZE = 75;
  const INITIAL_INTERVAL = 100;
  const INITIAL_PATTERN = PATTERNS['gosper_glider_gun'];

  const [state, setState, setNextState, setStateFromCells] = usePattern(INITIAL_PATTERN, BOARD_SIZE)
  const [turnInterval, setTurnInterval] = useState(INITIAL_INTERVAL);
  const [turns, setTurns] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [drawerIsOpen, setDrawerIsOpen] = useDrawer();

  useInterval(handleNextButtonClick, isPlaying ? turnInterval : null)

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
    setTurns(turns + 1)
    setNextState(state)
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

  function handlePatternClick(pattern) {
    setTurns(0);
    setIsPlaying(false);
    setStateFromCells(pattern)
  }

  return (
    <div id="game">
      <Drawer
        isOpen={drawerIsOpen}
        handlePatternClick={handlePatternClick}/>
      <Controls
        turns={turns}
        turnInterval={turnInterval}
        setTurnInterval={setTurnInterval}
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

  