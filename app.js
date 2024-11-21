const express = require("express");
const morgan = require("morgan");
const path = require('path');
const fs = require('fs');
const http = require('http');
const app = express()
const privateKey = fs.readFileSync('/home/ubuntu/ssl-certs/server.key', 'utf8');
const certificate = fs.readFileSync('/home/ubuntu/ssl-certs/server.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate }
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static('/home/ubuntu/node_on_EC2/client/build'));

const PORT = process.env.PORT || 80


app.get('*',(req,res)=>{
    res.sendFile(path.join('/home/ubuntu/node_on_EC2/client/build','index.html'));
    });

http.createServer( app).listen(PORT, () => {
  console.log(`HTTPS Server running on https://localhost:${PORT}`);
});
