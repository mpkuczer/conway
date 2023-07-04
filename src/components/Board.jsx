import { Cell } from './index'
import '../stylesheets/Board.css'

export default function Board({ state, handleCellClick}) {
  return (
    <div className="board">
      {state.map((row, rowIndex) => {
        return (
          <div
            className="row"
            key={rowIndex}> 
            {row.map((cell, cellIndex) => {
              return (
                <Cell
                  i={rowIndex}
                  j={cellIndex}
                  isAlive={cell}
                  handleCellClick={handleCellClick}
                  key={`${rowIndex}-${cellIndex}`}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}