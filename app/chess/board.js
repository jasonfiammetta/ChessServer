const { fromFEN } = require('./fen.js')

class Board {
  constructor(fen) {
    // this.fen = fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1' // move to config file later
    // this.id = this.IDS++
    this.whitesTurn = true
    if(fen) {
      this.board = fromFEN(fen)
    } else {
      this.board = [['r'],['p', 'p'],[],[],[],[],['P',,'P'],['R', 'N', 'B', , , 'Q']] // declare double array?
    }
  }

  playMove(move) {
    // this.fen += ' ' + move
    this.board[4][5] = 'M'
  }

  toString() {
    let str = `Board #${this.id}: ${this.whitesTurn ? 'White' : 'Black'} to move`
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
