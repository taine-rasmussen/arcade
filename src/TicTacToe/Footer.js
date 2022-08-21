import { BsPersonFill, BsFillPeopleFill } from 'react-icons/bs'
import { GrPowerReset } from 'react-icons/gr'

const Footer = (props) => {
  const {
    singlePlayerNames,
    singlePlayerScore,
    twoPlayerNames,
    twoPlayerScore,
    setGameMode,
    resetGame,
    gameMode
  } = props;

  const changeGameMode = () => {
    resetGame()
    setGameMode(!gameMode)
  }

  const gameModeCopy = gameMode ? '2 P' : '1 P'

  return (
    <div className='tictactoe_footer'>
      <div className='tictactoe_footer_names'>
        {gameMode ? (
          twoPlayerNames.map((player, i) => (
            <div className='tictactie_name_cell' key={i}>
              <div>
                {player}
              </div>
              <div>
                {twoPlayerScore[player]}
              </div>
            </div>
          ))
        ) : (
          singlePlayerNames.map((player, i) => (
            <div className='tictactie_name_cell' key={i}>
              <div>
                {player}
              </div>
              <div>
                {singlePlayerScore[player]}
              </div>
            </div>
          ))
        )}
      </div>
      <div
        className='tictactoe_player_select'
      >
        <span
          onClick={changeGameMode}
        >{gameMode ? <BsFillPeopleFill /> : <BsPersonFill />}</span>
        <h4>{gameModeCopy}</h4>
        <span
          onClick={resetGame}
          className='tictactoe_game_reset'
        >
          <GrPowerReset />
        </span>
      </div>
    </div>
  )
}

export default Footer
