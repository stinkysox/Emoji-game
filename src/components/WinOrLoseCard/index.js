import './index.css'
const WinOrLoseCard = props => {
  const {matchDetails, onResetGame, score} = props
  const resetButton = () => {
    onResetGame()
  }

  if (matchDetails === 'won') {
    return (
      <div className="lose-container">
        <nav className="nav-bar-lose">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="result-image"
          />
        </nav>

        <div className="result-container">
          <div className="lose-text-container">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p className="result-score">12/12</p>
            <button type="button" onClick={resetButton} className="result-btn">
              Play Again
            </button>
          </div>
          <div className="lose-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
            />
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="lose-container">
        <nav className="nav-bar-lose">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="result-image"
            alt="emoji logo"
          />
        </nav>

        <div className="result-container">
          <div className="lose-text-container">
            <h1>You Lose</h1>
            <p>Score</p>
            <p className="result-score">{`${score} / 12`}</p>
            <button type="button" onClick={resetButton} className="result-btn">
              Play Again
            </button>
          </div>
          <div className="lose-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
