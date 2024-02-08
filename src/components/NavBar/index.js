import React from 'react'
import './index.css'

const NavBar = props => {
  const {scores} = props
  const {score, topScore} = scores
  console.log(score, topScore)
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      <div className="score-section">
        <p className="score">Score: {score}</p>
        <p className="score">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default NavBar
