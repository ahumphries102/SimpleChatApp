const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000

app.get('/', (request, response)=>{
	response.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
	console.log('a user connected')
  socket.on('chat message', function(msg){
  	io.emit('chat message', msg)
    console.log('message: ' + msg);
  });
});

http.listen(port, ()=>{
	console.log("I hear you on port *:3000")
})