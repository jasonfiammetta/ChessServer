// const Board = require('./board.js')

let toFEN = function(board) {
  let fen = 'fennn'

  return fen
}

let fromFEN = function(fen) {
  const { fenBoard, fenTurn, fenCastle, fenPawn, fenCounter, fenHalfCounter } = fen.split(' ')
  // let board = new Board()
  let board = [[],[],[],[],[],[],[],[]]
  let rows = fenBoard.split('/')
  for(let i = 0; i < 8; i++) {
    for(let j = 0; j < 8; j++) {
      if(/\d/.test(rows[i][j])) { // check if regular expression works
        j += rows[i][j] - 1 // check if this works
      } else {
        board[i][j] = rows[i][j]
      }
    }
  }
  // for(let r in rows) {
  //
  //   for(let i = 0; i < r.length; i++) {
  //
  //   }
  // }
  return board
}

module.exports = {
  toFEN,
  fromFEN,
}
