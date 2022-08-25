import { useState, useCallback, useMemo } from 'react'

import Footer from './Footer'
import Board from './Board'
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
  const [winState, setWinState] = useState(false)
  const [twoPlayerScore, setTwoPlayerScore] = useState({ Player1: 0, Tie: 0, Player2: 0 })
  const [singlePlayerScore, setSinglePlayerScore] = useState({ Player1: 0, Tie: 0, GickyAI: 0 })
  const [gameMode, setGameMode] = useState(true)

  const twoPlayerNames = Object.keys(twoPlayerScore)
  const singlePlayerNames = Object.keys(singlePlayerScore)

  const playerTurn = useMemo(
    () => {
      return moveCounter % 2 === 0
    }, [moveCounter]
  )

  const handlePlayerMove = (i) => {
    if (gameboard[i].value !== '') return;
    if (winState) return;
    setMoveCounter(moveCounter + 1)
    setGameboard([...gameboard], gameboard[i].value = playerTurn ? '0' : 'X')
  }

  const updateTwoPlayerScorbard = () => {
    return playerTurn ? twoPlayerScore.Player1++ : twoPlayerScore.Player2++
  }

  const updateSinglePlayerScorbard = () => {
    return playerTurn ? singlePlayerScore.Player1++ : singlePlayerScore.GickyAI++
  }

  const checkForWin = useCallback(
    () => {
      if (moveCounter >= 8 && !winState) return twoPlayerScore.Tie++
      gameboard.map((cell) => {
        const { value, id } = cell
        if (value === '') return;
        if (winState) return;

        // Horizontal win conditions
        if (gameboard.indexOf(cell) === 0 && gameboard[1].value === value && gameboard[2].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[1].winner = true, gameboard[2].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard(),
            gameMode ? updateTwoPlayerScorbard() : updateSinglePlayerScorbard()
        }
        if (gameboard.indexOf(cell) === 3 && gameboard[4].value === value && gameboard[5].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[4].winner = true, gameboard[5].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard(),
            gameMode ? updateTwoPlayerScorbard() : updateSinglePlayerScorbard()
        }
        if (gameboard.indexOf(cell) === 6 && gameboard[7].value === value && gameboard[8].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[7].winner = true, gameboard[8].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard(),
            gameMode ? updateTwoPlayerScorbard() : updateSinglePlayerScorbard()
        }

        // Vertical win conditions
        if (gameboard.indexOf(cell) === 0 && gameboard[3].value === value && gameboard[6].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[3].winner = true, gameboard[6].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard(),
            gameMode ? updateTwoPlayerScorbard() : updateSinglePlayerScorbard()
        }
        if (gameboard.indexOf(cell) === 1 && gameboard[4].value === value && gameboard[7].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[4].winner = true, gameboard[7].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard(),
            gameMode ? updateTwoPlayerScorbard() : updateSinglePlayerScorbard()
        }
        if (gameboard.indexOf(cell) === 2 && gameboard[5].value === value && gameboard[8].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[5].winner = true, gameboard[8].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard(),
            gameMode ? updateTwoPlayerScorbard() : updateSinglePlayerScorbard()
        }

        // Diagonal win conditions
        if (gameboard.indexOf(cell) === 0 && gameboard[4].value === value && gameboard[8].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[4].winner = true, gameboard[8].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard()
        }
        if (gameboard.indexOf(cell) === 2 && gameboard[4].value === value && gameboard[6].value === value) {
          return setGameboard([...gameboard], gameboard[id].winner = true, gameboard[4].winner = true, gameboard[6].winner = true),
            setWinState(true),
            updateTwoPlayerScorbard()
        }
      })
    }, [moveCounter, gameboard, handlePlayerMove])

  const gickyAISuperBot = () => {
    const availableCells = gameboard.filter(cell => cell.value === '')
    const randomPosition = Math.floor(Math.random() * availableCells.length)
    const selectedCellValue = availableCells[randomPosition].value
    console.log(availableCells)
    selectedCellValue === '' ? setGameboard([...gameboard], gameboard[randomPosition].value = 'X') : gickyAISuperBot()
  }

  const handleCellClick = (i) => {
    console.log(playerTurn)
    handlePlayerMove(i)
    checkForWin()

    if (playerTurn) {
      gickyAISuperBot()
      setMoveCounter(prevMoveCounter => prevMoveCounter + 1)
    }
  }

  const resetGame = () => {
    setGameboard([
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
    setMoveCounter(0)
    setWinState(false)
  }

  if (!gameboard) return;

  return (
    <div className='tictactoe_container'>
      <Board
        gameboard={gameboard}
        handleCellClick={handleCellClick}
      />
      <Footer
        singlePlayerScore={singlePlayerScore}
        singlePlayerNames={singlePlayerNames}
        twoPlayerScore={twoPlayerScore}
        twoPlayerNames={twoPlayerNames}
        setGameMode={setGameMode}
        resetGame={resetGame}
        gameMode={gameMode}
      />
    </div>
  )
}

export default TicTacToeGameBoard
