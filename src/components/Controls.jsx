import { Slider } from '@mantine/core'
import { ReactComponent as TurnSpeedIcon } from '../assets/speed.svg'
import { ReactComponent as PlayIcon } from '../assets/play.svg'
import { ReactComponent as PauseIcon } from '../assets/pause.svg'
import '../stylesheets/Controls.css'


export default function Controls({
    isPlaying,
    turns,
    turnInterval,
    setTurnInterval,
    handleNextButtonClick,
    handlePlayButtonClick,
    handleClearButtonClick,
    handleRandomButtonClick,
    handleExploreButtonClick
  }) {
  return (
    <div className="controls">
      <button onClick={handlePlayButtonClick} className="controls__play">{isPlaying ? <PauseIcon/>: <PlayIcon/>} </button>
      <div className="controls__speed">
        <Slider
        label={null}
        value={1000/turnInterval}
        onChange={(t) => setTurnInterval(1000/t)}
        min={1}
        max={20}
        />
      </div>
      <div className="controls__turns">Turns: {turns}</div>
      
      <button onClick={handleNextButtonClick} className="controls__next">Next</button>
      <button onClick={handleClearButtonClick} className="controls__clear">Clear</button>
      <button onClick={handleRandomButtonClick} className="controls__random">Random</button>
      <button onClick={handleExploreButtonClick} className="controls__explore">Explore</button>

    </div>


  )
}