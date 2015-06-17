var net = require('net');
var jsonSocket = require('json-socket');

var port = 4501;
var host = 'localhost';
var socket = new jsonSocket(new net.Socket());

socket.connect(port, host);
socket.on('connect', function() {

	socket.sendMessage({name: 'sauna', temperature: 70.6, time: 12});
	socket.on('message', function(message) {
		console.log('The result is: '+message.result);
	});
});
