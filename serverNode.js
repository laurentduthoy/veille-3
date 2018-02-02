const http = require("http"); 
http.createServer((request, response) =>
{ 
 	console.log('branchement sur le port 3000')
	
	response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
	
	const fs = require("fs");
	let data = fs.readFileSync('province.json');
	let obj = JSON.parse(data);

 	let html = "";

 	 html+="<table>"
 		html +="<p>"
 			obj
 		html +="</p>"
 	html +="</table>"
 	response.write(html); 
 	response.end(); 
}).listen(3000);