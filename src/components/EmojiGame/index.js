import React, {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    shuffledEmojisList: this.props.emojisList,
    score: 0,
    topScore: 0,
    clickedEmojiIds: [],
    gameStatus: '',
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const shuffledList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({shuffledEmojisList: shuffledList})
  }

  handleClickEvent = id => {
    this.setState(prevState => ({
      clickedEmojiIds: [...prevState.clickedEmojiIds, id],
    }))

    const {clickedEmojiIds, score} = this.state
    if (clickedEmojiIds.includes(id)) {
      this.setState({clickedEmojiIds: [], gameStatus: 'lost'})
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        topScore:
          prevState.score + 1 > prevState.topScore
            ? prevState.score + 1
            : prevState.topScore,
      }))
    }

    if (score === this.state.shuffledEmojisList.length - 1) {
      this.setState({gameStatus: 'won'})
    }
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojiIds: [],
      gameStatus: '',
    })
    this.shuffledEmojisList()
  }

  render() {
    const {shuffledEmojisList, score, topScore, gameStatus} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          {gameStatus === 'lost' && (
            <WinOrLoseCard
              matchDetails={gameStatus}
              onResetGame={this.resetGame}
              score={score}
            />
          )}
          {gameStatus === 'won' && (
            <WinOrLoseCard
              matchDetails={gameStatus}
              onResetGame={this.resetGame}
              score={score}
            />
          )}

          {gameStatus !== 'won' && gameStatus !== 'lost' && (
            <div>
              <NavBar scores={{score, topScore}} />
              <ul className="card-container">
                {shuffledEmojisList.map(eachItem => (
                  <EmojiCard
                    key={eachItem.id}
                    emoji={eachItem}
                    shuffledEmojisList={this.shuffledEmojisList}
                    handleClickEvent={this.handleClickEvent}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
