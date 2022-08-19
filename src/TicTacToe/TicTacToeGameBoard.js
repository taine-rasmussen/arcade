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


  const handlePlayerMove = (i) => {
    if (gameboard[i].value != '') return;
    setMoveCounter(moveCounter + 1)
    setGameboard([...gameboard], gameboard[i].value = moveCounter % 2 == 0 ? '0' : 'X')
  }

  const handleCellClick = (i) => {
    handlePlayerMove(i)
  }

  if (!gameboard) return;

  return (
    <div className='tictactoe_container'>
      <div className='tictactoe_game_container'>
        {gameboard.map((cell, i) => {
          const { value, winner } = cell
          return (
            <div
              className={`tictactoe_cell_${winner ? 'winner' : 'normal'}`}
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
