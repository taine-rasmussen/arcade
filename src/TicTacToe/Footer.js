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
        onClick={changeGameMode}
      >
        <span>{gameMode ? <BsFillPeopleFill /> : <BsPersonFill />}</span>
      </div>
    </div>
  )
}

export default Footer
