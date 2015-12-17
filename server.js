var http = require('http');
var fs = require('fs');
var url = require('url');

var logger = require('./js/logger');
var markdownTrans = require('./js/markdownTransformer');
//var translator = require('./js/Translator');

var handleMarkdown = function(filename, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  var file = fs.createReadStream(filename);
  file.pipe(markdownTrans()).pipe(response);
};


var handleRequest = function(request, response){

  var purl = url.parse(request.url, true);

  if(request.url === '/'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    var file = fs.createReadStream('Home.md');
    file.pipe(markdownTrans()).pipe(response);
    file.on("finished", function(){
      response.end();
    });
  } 
  else {
    response.writeHead(404);
    response.end("404 Not Found");
  }


  logger(request, response);

}

var server = http.createServer( handleRequest );

server.listen(7000, function(){
    console.log("listening on 7000");
});


