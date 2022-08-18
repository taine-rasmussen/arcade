import { useState, useEffect, useCa } from 'react'
import './TicTacToe.scss'


const TicTacToeGameBoard = () => {
  const [
    gameboard,
    setGameboard
  ] = useState([
    { value: '', id: 0 },
    { value: '', id: 1 },
    { value: '', id: 2 },
    { value: '', id: 3 },
    { value: '', id: 4 },
    { value: '', id: 5 },
    { value: '', id: 6 },
    { value: '', id: 7 },
    { value: '', id: 8 },
  ])
  const [moveCounter, setMoveCounter] = useState(0)

  const handleCellClick = (i) => {
    setMoveCounter(moveCounter + 1)
    setGameboard([...gameboard], gameboard[i].value = moveCounter % 2 == 0 ? '0' : 'X')
  }

  if (!gameboard) return;

  return (
    <div className='tictactoe_container'>
      <div className='tictactoe_game_container'>
        {gameboard.map((cell, i) => {
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
