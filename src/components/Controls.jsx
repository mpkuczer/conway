import '../stylesheets/Controls.css'

export default function Controls({
    turns,
    isPlaying,
    handleNextButtonClick,
    handlePlayButtonClick,
    handleClearButtonClick,
    handleRandomButtonClick,
    handleExploreButtonClick
  }) {
  return (
    <div className="controls">
      <button onClick={handlePlayButtonClick} className="controls__play">{isPlaying ? 'Pause': 'Play'} </button>
      <div className="controls__turns">Turns: {turns}</div>
      <button onClick={handleNextButtonClick} className="controls__next">Next</button>
      <button onClick={handleClearButtonClick} className="controls__clear">Clear</button>
      <button onClick={handleRandomButtonClick} className="controls__random">Random</button>
      <button onClick={handleExploreButtonClick} className="controls__explore">Explore</button>

    </div>


  )
}