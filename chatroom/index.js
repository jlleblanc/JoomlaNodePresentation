var joomla = require('joomla'), 
  connect = require('connect'),
  io = require('socket.io');

joomla('/Users/josephleblanc/Sites/projects/joomla_node_30');

var app = connect().use(connect.static('public')).listen(8000);
var chat_room = io.listen(app);

chat_room.sockets.on('connection', function (socket) {

  var cookies = connect.utils.parseCookie(socket.handshake.headers.cookie);

  joomla.auth_cookies(cookies, function  (j_user) {
    if (!j_user || j_user.username === "") {
      socket.emit('error', {message: 'Please log in to join the chat'});
    } else {
      chat_room.sockets.emit('entrance', {message: j_user.username + ' has entered the chat.'});

      socket.on('chat', function  (data) {
        chat_room.sockets.emit('chat', {message:  j_user.username + ' says: ' + data.message});
      });

      socket.on('disconnect', function  () {
        chat_room.sockets.emit('disconnect', {message: j_user.username + ' has disconnected'});
      });
    }
  });

});