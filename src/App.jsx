import { Game } from './components/index'
import './App.css'

export default function App() {
  return (
    <div className="main">
      <h1>
        Game
        <br/>
        of
        <br/>
        Life
      </h1>
      <Game/>
    </div>
  )
}