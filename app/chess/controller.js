const Board = require('./board.js')

const games = []
const status = { PLAYING: 'PLAYING', ADJOURNED: 'ADJOURNED', OVER: 'OVER', WHITE_WON: 'WHITE_WON', BLACK_WON: 'BLACK_WON' }

// bundle boards with players and moves
function newGame(whitePlayer, blackPlayer, startingFEN) {
  // let board = startingFEN ? Chess.fromFEN(startingFEN) : Chess.newBoard()
  games.push({
    id: games.length, // perhaps come up with a more elegant id system later
    white: whitePlayer,
    black: blackPlayer,
    board: board,
    KQkq: [true, true, true, true],
    lastPawn: null,
    counter: 0,
    halfCounter: 1,
    status: status.PLAYING,
    result: null
  })
}

resignGame(resigningPlayer, gameId) {
  let game = games[gameId]
  // more player specific stuff later, track wins, notify players, etc.
  if(game.white === resigningPlayer) {
    // white wins
    game.status = status.BLACK_WON
  } else if(game.black === resigningPlayer) {
    // black wins
    game.status = status.WHITE_WON
  }
}

function getBoard(gameId) {
  return this.games[gameId].board
}

// validate moves
playMove(player, move, gameId) {
  // ensure player is playing correct game

  //
  Chess.validateMove(games[gameId])
}

module.exports = {
  newGame,
  getBoard,
  playMove,
}
