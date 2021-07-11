const Board = require('./board.js')

class Chess {
  newBoard() {
    let board = new Board()
    // this.boards.push(board)
    return board
  }


  playMove(move, boardId) {
    console.log('play move', move)
    let board = Board.boards[boardId]
    board ? board.playMove(move) : console.log('no board')
    return board
  }
  checkLegal(board) {
    return true
  }



  // boardToString(id) {
  //   return this.getBoard(id).toString()
  // }

}



module.exports = Chess
