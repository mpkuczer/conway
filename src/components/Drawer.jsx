import { useEffect } from 'react'
import { PATTERNS } from '../patterns/index'
import '../stylesheets/Drawer.css'

export default function Drawer({isOpen, setPattern}) {

  useEffect(()=>{
    console.log(Object.entries(PATTERNS))
  },[])

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      {Object.entries(PATTERNS).map(([name, pattern]) => {
        return (
          <div className="drawer__item" key={name}>
            <button
              onClick={() => setPattern(pattern)}
            >
              {pattern.humanName}
            </button>
          </div>
        )
      })}
    </div>


  )
}