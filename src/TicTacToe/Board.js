const Board = (props) => {
  const {
    gameMode,
    gameboard,
    handleTwoPlayerCellClick
  } = props

  return (
    <div className='tictactoe_game_container'>
      {gameboard.map((cell, i) => {
        const { value, winner } = cell
        return (
          <div
            className={`tictactoe_cell_${winner ? 'winner' : 'normal'}`}
            key={i}
            onClick={gameMode ? () => { handleTwoPlayerCellClick(i) } : console.log('the other handle click')}
          >
            {value}
          </div>
        )
      })}
    </div>
  )
}

export default Board
