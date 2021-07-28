const Board = require('./board.js')

// static class? All static methods?
class ChessRules {

  isLegal(move, board) {
    const fromSquare = Board.algebraicSquare(move.slice(0, 2))
    const toSquare = Board.algebraicSquare(move.slice(2, 4))
    const piece = board.getSquare(fromSquare)

    switch(piece) {
      case 'R':
      case 'r':
        return isRookLegal(fromSquare, toSquare, board)
      case 'N':
      case 'n':
        return isKnightLegal(fromSquare, toSquare, board)
      case 'B':
      case 'b':
        return isBishopLegal(fromSquare, toSquare, board)
      case 'Q':
      case 'q':
        return isQueenLegal(fromSquare, toSquare, board)
      case 'K':
      case 'k':
        return isKingLegal(fromSquare, toSquare, board)
      case 'P':
      case 'p':
        return isPawnLegal(fromSquare, toSquare, board)
      default:
        // Not a piece, not a legal move
        return false
    }
  }

  isRookLegal(from, to, board) {
    if (from.rank === to.rank) {
      if (from.file < to.file) {
        
      }
    }
  }

  isKnightLegal(from, to, board) {
    return (Math.abs(from.rank - to.rank) === 2 && Math.abs(from.file - to.file) === 1) || (Math.abs(from.rank - to.rank) === 1 && Math.abs(from.file - to.file) === 2)
  }

  gameOver(board) {
    return false
  }



  // boardToString(id) {
  //   return this.getBoard(id).toString()
  // }

}



module.exports = ChessRules
