// Write your code here.

import './index.css'

const NavBar = props => {
  const {checkedEmojisList, isGameInProgress, topScore} = props
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-container">
          <p className="score">Score: {checkedEmojisList}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
