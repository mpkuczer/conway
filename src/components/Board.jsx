import Cell from './Cell'
import '../stylesheets/Board.css'

export default function Board({ state, cell, handleCellClick}) {
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