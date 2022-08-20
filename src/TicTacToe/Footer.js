import React from 'react'

const Footer = (props) => {
  const {
    playersNames,
    scoreboard
  } = props;

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
    </div>
  )
}

export default Footer
