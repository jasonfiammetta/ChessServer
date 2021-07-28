const { fromFEN } = require('./fen.js')

class Board {
  static file = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g:6, h: 7 }

  constructor(fen) {
    // this.fen = fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' // move to config file later
    // if (fen) { return fromFEN(fen) }
    this.board = [
      ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
      ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
      [],
      [],
      [],
      [],
      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ] // move to config later
    this.turn = 'w'
    this.castle = [true, true, true, true]
    this.pawn = null
    this.counter = 0
    this.halfCounter = 1
  }

  playMove(move) {

    const fromSquare = move.slice(0, 2)
    const toSquare = move.slice(2, 4)
    const promotion = move[4] ? move[4] : null

    const piece = this.getSquare(fromSquare)
    console.log(`moving ${piece} from ${fromSquare} to ${toSquare}`)
    // check if promotion maintains piece color
    this.setSquare(toSquare, promotion || piece)
    // this.board[toSquare[0]][toSquare[1]] = promotion || piece
    this.setSquare(fromSquare, undefined)
    // this.board[fromSquare[0]][fromSquare[1]] = undefined

    // castle
    // move king and rook

    // en passant
    // remove taken pawn

    // promotion (might be handled properly above)

    // Updates
    this.turn = this.turn === 'w' ? 'b' : 'w' // figure out end later
    // this.castle
    this.counter++ // is this only supposed to go up after black's move?
    // this.halfCounter++

  }

  // consider moving to lib file
  static algebraicSquare(square) {
    if(square.length !== 2) {
      throw 'Invalid square. Squares are two characters.'
    }
    const fileHelp = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g:6, h: 7 }
    const file = fileHelp[square[0]]
    const rank = 8 - square[1]

    if (!file || rank < 0 || rank > 7) {
      throw 'Invalid square. Square files are a-h, square ranks are 1-8.'
    }
    return { file, rank }
  }
  getSquare(square) {
    const { file, rank } = Board.algebraicSquare(square)
    return this.board[rank][file]
  }
  setSquare(square, piece) {
    const { file, rank } = Board.algebraicSquare(square)
    this.board[rank][file] = piece
  }

  toString() {
    let str = `${this.turn === 'w' ? 'White' : 'Black'} to move`
    for(let i = 0; i < 8; i++) {
      str += '\n'
      for(let j = 0; j < 8; j++) {
        str += this.board[i][j] ? this.board[i][j] + ' ' : '  '
      }
    }
    return str
  }

}

module.exports = Board
// export default Board
