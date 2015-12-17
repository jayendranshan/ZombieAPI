var http = require('http');
var fs = require('fs');
var url = require('url');

var logger = require('./js/logger');
var markdownTrans = require('./js/markdownTransformer');
var transZombie = require('./js/Translator').Zombify;
var transUnZombie = require('./js/Translator').UnZombify;

var handleMarkdown = function(filename, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  var file = fs.createReadStream(filename);
  file.pipe(markdownTrans()).pipe(response);
};


var handleRequest = function(request, response){

  var purl = url.parse(request.url, true);
  console.log(purl.query.english);

  if(purl.query.inputtext.length > 1000)
  {
    response.writeHead(414);
      response.end("414-Inputlengthbiggerthan1000");
  }
  if(request.url === '/'){
    handleMarkdown('Home.md',response);
  } 
  else if (purl.pathname === '/zombify'){
    if(purl.query.inputtext === '')
    {
      response.writeHead(414);
      response.end("414-InputnotPassed");
    }
    var zombiedText = transZombie(purl.query.inputtext);
    response.writeHead( zombiedText.status , {'Content-Type':'text/html'} );

       if ( zombiedText.text ) {
           response.end( purl.query.inputtext + ':'  + zombiedText.text + '' );
       } else {
           response.end( zombiedText.message + '' );
       }
  }
  else if (purl.pathname === '/unzombify'){
    if(purl.query.inputtext === '')
    {
      response.writeHead(414);
      response.end("414-InputnotPassed");
    }
    var unzombiedText = transUnZombie(purl.query.inputtext);
    response.writeHead( unzombiedText.status , {'Content-Type':'text/html'} );

       if ( unzombiedText.text ) {
           response.end(purl.query.inputtext + ':' + unzombiedText.text + '' );
       } else {
           response.end( unzombiedText.message + '' );
       }
  }
  else{
    response.writeHead(404);
    response.end("404 Not Found");
  }


  logger(request, response);

}

var server = http.createServer( handleRequest );

server.listen(7000, function(){
    console.log("listening on 7000");
});


