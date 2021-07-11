const Chess = require('../chess/chessrules.js')
const Fen = require('../chess/fen.js')

module.exports = function() {
  console.log('testing')
  let chess = new Chess()
  let board = chess.newBoard()

  // console.log('boardToString', chess.boardToString(0))
  console.log('board.toString', board.toString())

  console.log('toFEN', Fen.toFEN(board))
  console.log('fromFEN', Fen.fromFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))

  console.log('finished testing')
}
