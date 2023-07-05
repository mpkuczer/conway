import { Slider } from '@mantine/core'
import { ReactComponent as PlayIcon } from '../assets/play.svg'
import { ReactComponent as PauseIcon } from '../assets/pause.svg'
import '../stylesheets/Controls.css'

const MIN_TPS = 1
const MAX_TPS = 50

function SpeedSlider({turnInterval, setTurnInterval, minTPS, maxTPS}) {
  return (
    <Slider
    label={null}
    value={1000/turnInterval}
    onChange={(t) => setTurnInterval(1000/t)}
    min={minTPS}
    max={maxTPS}
    />
  )
}

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
        <SpeedSlider
          turnInterval={turnInterval}
          setTurnInterval={setTurnInterval}
          minTPS={MIN_TPS}
          maxTPS={MAX_TPS}/>
        </div>
      <div className="controls__turns">Turns: {turns}</div>
      <button onClick={handleNextButtonClick} className="controls__next">Next</button>
      <button onClick={handleClearButtonClick} className="controls__clear">Clear</button>
      <button onClick={handleRandomButtonClick} className="controls__random">Random</button>
      <button onClick={handleExploreButtonClick} className="controls__explore">Explore</button>
    </div>
  )
}