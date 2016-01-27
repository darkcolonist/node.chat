var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + "/public"))

io.on('connection', function(socket){
  console.log('someone connected')

  socket.on('disconnect', function(){
    console.log("someone just left")
  })

  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
  })
})

http.listen(3000, function(){
  console.log('listening on localhost:3000')
})