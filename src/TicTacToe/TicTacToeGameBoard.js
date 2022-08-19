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

  useEffect(
    () => {
      gameboard.map((cell) => {
        const { value } = cell
        if (value == '') return;
        if (moveCounter < 5 || moveCounter > 9) return;

        // Horizontal win conditions
        if (gameboard.indexOf(cell) == 0 && gameboard[1].value == value && gameboard[2].value == value) {
          console.log('top row winner')
        }
        if (gameboard.indexOf(cell) == 3 && gameboard[4].value == value && gameboard[5].value == value) {
          console.log('middle row winner')
        }
        if (gameboard.indexOf(cell) == 6 && gameboard[7].value == value && gameboard[8].value == value) {
          console.log('bottom row winner')
        }

        // // Vertical win conditions
        if (gameboard.indexOf(cell) == 0 && gameboard[3].value == value && gameboard[6].value == value) {
          console.log('left column winner')
        }
        if (gameboard.indexOf(cell) == 1 && gameboard[4].value == value && gameboard[7].value == value) {
          console.log('middle column winner')
        }
        if (gameboard.indexOf(cell) == 2 && gameboard[5].value == value && gameboard[8].value == value) {
          console.log('right column winner')
        }

        // // Diagonal win conditions
        if (gameboard.indexOf(cell) == 0 && gameboard[4].value == value && gameboard[8].value == value) {
          console.log('left Diagonal winner')
        }
        if (gameboard.indexOf(cell) == 2 && gameboard[4].value == value && gameboard[6].value == value) {
          console.log('right Diagonal winner')
        }
      })
    }, [gameboard]
  )

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
