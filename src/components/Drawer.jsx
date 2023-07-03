import { PATTERNS } from '../patterns/index'
import '../stylesheets/Drawer.css'

export default function Drawer({isOpen, handlePatternClick}) {
  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      {Object.entries(PATTERNS).map(([name, pattern]) => {
        return (
          <div className="drawer__item" key={name}>
            <button
              onClick={() => handlePatternClick(pattern)}
            >
              {pattern.humanName}
            </button>
          </div>
        )
      })}
    </div>
  )
}