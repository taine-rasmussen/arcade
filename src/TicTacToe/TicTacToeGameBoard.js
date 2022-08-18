import { useState } from 'react'
import './TicTacToe.scss'


const TicTacToeGameBoard = () => {
  const [gameboard, setGameboard] = useState([])

  const gameCells = new Array(9).fill({})

  return (
    <div className='tictactoe_container'>
      <div className='tictactoe_game_container'>
        {gameCells.map((cell, i) => {
          return (
            <div className='tictactoe_cell' key={i}>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TicTacToeGameBoard
