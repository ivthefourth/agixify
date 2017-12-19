var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
   socket.on('chat message', function(msg){
      var success = !!Math.round(Math.random());
      console.log(success);
      if(success)
         socket.broadcast.emit('chat message', msg);
      else
         socket.emit('chat error', msg);
   });
});
    

http.listen(8000, function(){
  console.log('listening on *:8000');
});