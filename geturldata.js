
var http = require("http");
var url = require("url");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-type":"text/plain"});
	response.write("Test");
	
	var _url = url.parse(request.url, true).query;
	
	response.write(_url["data"]);
	console.log("url write");
	
	response.end;
}).listen(8080);