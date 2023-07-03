import { useState } from 'react'
import './App.css'

import Game from './components/Game'

export default function App() {
  return (
    <div className="main">
      <h1>Game <br/> of <br/> Life</h1>
      <Game/>
    </div>
  )
}