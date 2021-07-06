const express = require('express')
const router = express.Router()

// Chess functions, move to another file later
let getBoard = function(boardId) {
  return 'board ' + boardId
}
let playMove = function(move, board) {
  return 'board ' + (board + 1)
}
let checkLegal = function(board) {
  return true
}

router.post('/ready-for-game', (res, req, next) => {
  // add user to list of available players


  res.send(`<p>You are now available for a game</p>`)
})

router.post('/start-game', (req, res, next) => {
  let msg = 'Checking if game is available'
  // check if another player is available



  res.send(`<p>${msg}</p>`)
})

router.post('/play-move', (req, res, next) => {
  let move = req.body.move

  // get board of current game
  let board = getBoard(req.body.boardId)



  // check if move is legal
  let newBoard = playMove(move, board)
  if(checkLegal(newBoard)) {
    // save new board
    // let newBoard = db.save(board)

    // send confirmation
    res.json({ movePlayed: true, board: newBoard })
  } else {
    // send illegal move
    res.json({ movePlayed: false, board: board })
  }



})

module.exports = router
