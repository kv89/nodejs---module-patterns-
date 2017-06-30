// http://www.programwitherik.com/getting-started-with-socket-io-node-js-and-express/

var express = require("express"),
    app = express();

var httpServer = require("http").createServer( app );
var socIo = require("socket.io")( httpServer );
// var brain = require("node-brain");

// We are setting the static folder to '/node_modules' since we are using npm to server up jQuery and we want to be able to reference it in our html.
app.use(express.static(__dirname + '/node_modules'));
app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/index.html');
});

httpServer.listen(4000, function(){
    console.log("listening to 4000 ");
});

socIo.on("connection", function( client ){
    console.log("A client connected ! ");
    client.on("join", function( data ){
        console.log("clien joined, says : ", data);
        socIo.emit("message", "Welcome to the World !");
    });
});
