import { useState } from 'react'
import './App.css'

import BoardWithControls from './components/BoardWithControls'

export default function App() {
  return (
    <>
    <h1>Conway's Game of Life</h1>
    <BoardWithControls>
    </BoardWithControls>
    </>
  )
}