import { useState } from "react";
import { Board, Controls, Drawer } from './index'
import { useInterval, usePattern, useDrawer } from '../hooks/index'

export default function Game() {
  const [state, dispatch] = usePattern();
  const [turnInterval, setTurnInterval] = useState(100);
  const [turns, setTurns] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [drawerIsOpen, setDrawerIsOpen] = useDrawer();

  useInterval(nextPattern, isPlaying ? turnInterval : null)

  function toggleCell(i, j) {
    dispatch({
      type: 'toggleCell',
      payload: { i, j }
    })
  }

  function play() {
    setIsPlaying(!isPlaying)
  }

  function nextPattern() {
    setTurns(turns + 1)
    dispatch({
      type: 'nextPattern',
    })
  }

  function clear() {
    setIsPlaying(false);
    setTurns(0);
    dispatch({
      type: 'clear',
    })
  }

  function random() {
    setIsPlaying(false);
    setTurns(0);
    dispatch({
      type: 'random'
    })
  }

  function explore() {
    setDrawerIsOpen(!drawerIsOpen)
  }

  function setPattern(pattern) {
    setIsPlaying(false);
    setTurns(0);
    dispatch({
      type: 'setPattern',
      payload: pattern
    })
  }

  return (
    <div id="game">
      <Drawer
        isOpen={drawerIsOpen}
        handlePatternClick={setPattern}/>
      <Controls
        turns={turns}
        turnInterval={turnInterval}
        setTurnInterval={setTurnInterval}
        isPlaying={isPlaying}
        handleNextButtonClick={nextPattern}
        handlePlayButtonClick={play}
        handleClearButtonClick={clear}
        handleExploreButtonClick={explore}
        handleRandomButtonClick={random}/>
      <Board state={state} handleCellClick={toggleCell}/>
   </div>
  )
  }

  