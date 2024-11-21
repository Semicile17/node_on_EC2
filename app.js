const express = require("express");
const morgan = require("morgan");
const path = require('path');
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static('/home/ubuntu/myapp/build'));

const PORT = process.env.PORT || 80


app.get('*',(req,res)=>{
    res.sendFile(path.join('/home/ubuntu/myapp/build','index.html'));
    });

app.listen(PORT,'0.0.0.0',()=>{console.log("Server listening on port",PORT)})
