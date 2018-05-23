var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 
app.get('/', function(req, res){

res.send([
     {
        "firstname": "lena",
        "lastname": "beqai",
        "ID": "1",
        "option": ""
    },
    {
        "firstname": "rola",
        "lastname": "tawalbeh",
        "ID": "4",
        "option": ""
        
    },
    {
        "firstname": "sara",
        "lastname": "alawneh",
        "ID": "2",
        "option": ""
        
    },
    {
        "firstname": "shoroq",
        "lastname": "jaradat",
        "ID": "3",
        "option":""
        
    },
    {
        "firstname": "ahmad",
        "lastname": "abu alheija",
        "ID": "5",
        "option": ""
        
    }
    ] );
});


app.post('/users', function(req, res){
  
  
  res.end( JSON.stringify(req.body));
  
      
});

app.listen(3000);