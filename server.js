
var http = require("http");

http.createServer(getServerData).listen(8888);

function getServerData(request, response){
	console.log("On Server Data");
	response.writeHead(200, {"Content-type":"text/plain"});
	console.log("after head");
	response.write("Hi hi");
	console.log("after msg response.write");
	response.end;
	console.log("after end");
}

console.log("when this gonna call??");