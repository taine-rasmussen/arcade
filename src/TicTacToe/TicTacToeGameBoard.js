import { useState, useEffect } from 'react'
import './TicTacToe.scss'


const TicTacToeGameBoard = () => {
  const [gameboard, setGameboard] = useState()
  const gameCells = new Array(9).fill({ value: '' })

  useEffect(
    () => {
      setGameboard([gameCells])
    }, [])

  const handleCellClick = (i) => {
    console.log(i)
  }

  if (!gameboard) return;

  return (
    <div className='tictactoe_container'>
      <div className='tictactoe_game_container'>
        {gameboard[0].map((cell, i) => {
          const { value } = cell
          return (
            <div
              className='tictactoe_cell'
              key={i}
              onClick={() => { handleCellClick(i) }}
            >
              {value}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TicTacToeGameBoard
