import { useState } from 'react'
import { BsPersonFill, BsFillPeopleFill } from 'react-icons/bs'


const Footer = (props) => {
  const {
    playersNames,
    scoreboard
  } = props;

  const [gameMode, setGameMode] = useState(true)

  const changeGameMode = () => {
    setGameMode(!gameMode)
  }

  const gameModeCopy = gameMode ? '2 P' : '1 P'

  return (
    <div className='tictactoe_footer'>
      <div className='tictactoe_footer_names'>
        {playersNames.map((player, i) => (
          <div className='tictactie_name_cell' key={i}>
            <div>
              {player}
            </div>
            <div>
              {scoreboard[player]}
            </div>
          </div>
        ))}
      </div>
      <div
        className='tictactoe_player_select'
      >
        <span
          onClick={changeGameMode}
        >{gameMode ? <BsFillPeopleFill /> : <BsPersonFill />}</span>
        <h4>{gameModeCopy}</h4>
      </div>
    </div>
  )
}

export default Footer
