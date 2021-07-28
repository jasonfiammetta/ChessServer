// const Chess = require('../chess/chessrules.js')
const Fen = require('../chess/fen.js')
const Board = require('../chess/board.js')

module.exports = function() {
  console.log('testing')
  let board = new Board()

  console.log('board.toString', board.toString())
  board.playMove('e2e4')
  console.log('e2e4', board.toString())
  board.playMove('e7e5')
  console.log('e7e5', board.toString())
  board.playMove('g1f3')
  console.log('g1f3', board.toString())

  // console.log('toFEN', Fen.toFEN(board))
  // console.log('fromFEN', Fen.fromFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))

  console.log('finished testing')
}
