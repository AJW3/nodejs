
var http = require("http");
var fs = require("fs");
var myData;
var currDate = new Date();

http.createServer(function(request, response){
	//response.writeHead(200, {"Content-type":"text/plain"});
	//response.write("Write Something<br />");
	
	fs.readFile("data.txt", "utf8", function (err, data){
		//response.writeHead(200, {"Content-type":"text/plain"});
		if(err){
			return console.log(err);
		}
		myData = data;
		console.log("inside-"+ data);
	});
	
	if(myData == undefined){
		myData = 5;
	}
	
	response.write("From file - " + myData);
	
	
	//myData = parseInt(myData) +1;  
	
	console.log("out-" + myData);
	
	fs.writeFile("data.txt", currDate.getSeconds());
	
	currDate = new Date();
	
	/*
	fs.readFile('data.txt', 'utf8', function (err,data) {
	  if (err) {
		return console.log(err);
	  }
	  console.log(data);
	});
	*/
	
	response.end();
}).listen(8080);