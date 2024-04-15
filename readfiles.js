//The Node.js file system module allows you to work with the file system on your computer.
const http = require("http");
const fs = require("fs");
http.createServer(function(req,res){
    fs.readFile("signup.html",function(err,data){
        res.write(data);
        return res.end();
    });
}).listen(8000);