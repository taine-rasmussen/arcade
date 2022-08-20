const Board = (props) => {
  const {
    gameboard,
    handleCellClick
  } = props

  return (
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
  )
}

export default Board
