// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, clickEmoji, shuffle} = props
  const {id, emojiName, emojiUrl} = emoji

  const onClickEmoji = () => {
    clickEmoji(id)
    shuffle()
  }

  return (
    <li className="emoji-background">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
