const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

const PORT = process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"Sample server working"
    })
});

app.listen(3000,()=>{console.log("Server listening on port",PORT)})