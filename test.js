const fs = require("fs");
const value = fs.readFileSync('./test2.json','utf8',(err,data) =>{
    if(!err){
        return data;
    }else{
        return err;
    }
})

//----------------------------

const express = require("express");
const app = express()

app.get('/', function (req, res){
    res.send(value)
});
app.get('/:id', function(req, res){
    const id = req.params.id
    const prod = JSON.parse(value).find(prod => prod.age == id)
    if(prod){
        res.send(`Name:${prod.ad} <br> Age: ${prod.age}`)
    }else{
        res.send("Hey!")
    }
})

app.listen(3000, function () {
console.log(value);
}) 