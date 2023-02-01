var http = require('http');
var url = require('url');
var querystring = require('querystring');


function start(router){

    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var query = url.parse(request.url).query;
        console.log("Request for " + pathname + " received.");
        console.log("params:", query);
        
        if(query){
            var foo = querystring.parse(query)['foo'];
            console.log("foo:", foo);
        }

        router(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World.");
        response.end();        
    }
    
    http.createServer(onRequest).listen(3000);
    console.log("Server has started.");
}


exports.start = start;