 const http = require('http');
http.createServer((request,response)=>{
response.writeHead(200,{ 'Content-Type':'text/plain'});
response.write('Hello,World!\n');

response.end();

 }).listen(3000,()=>{
    console.log("server is running");
 });