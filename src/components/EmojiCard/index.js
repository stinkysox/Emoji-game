import './index.css'

const EmojiCard = props => {
  const {emoji, shuffledEmojisList, handleClickEvent} = props
  const {id, emojiName, emojiUrl} = emoji
  const onEmojiClick = () => {
    shuffledEmojisList()
    handleClickEvent(id)
  }
  return (
    <li className="card-el">
      <button type="button" className="emoji-btn" onClick={onEmojiClick}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
