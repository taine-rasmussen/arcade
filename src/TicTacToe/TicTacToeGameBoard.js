import { useState, useEffect, useCa } from 'react'
import './TicTacToe.scss'


const TicTacToeGameBoard = () => {
  const [
    gameboard,
    setGameboard
  ] = useState([
    { value: '', id: 0, winner: false },
    { value: '', id: 1, winner: false },
    { value: '', id: 2, winner: false },
    { value: '', id: 3, winner: false },
    { value: '', id: 4, winner: false },
    { value: '', id: 5, winner: false },
    { value: '', id: 6, winner: false },
    { value: '', id: 7, winner: false },
    { value: '', id: 8, winner: false },
  ])
  const [moveCounter, setMoveCounter] = useState(0)

  const handleCellClick = (i) => {
    if (gameboard[i].value != '') return;
    setMoveCounter(moveCounter + 1)
    setGameboard([...gameboard], gameboard[i].value = moveCounter % 2 == 0 ? '0' : 'X')
  }

  if (!gameboard) return;

  return (
    <div className='tictactoe_container'>
      <div className='tictactoe_game_container'>
        {gameboard.map((cell, i) => {
          const { value, winner } = cell
          return (
            <div
              className='tictactoe_cell'
              key={i}
              onClick={() => { handleCellClick(i) }}
              style={{
                background: winner ? '#000' : '#fff',
                color: winner ? '#fff' : '#000'
              }}
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
