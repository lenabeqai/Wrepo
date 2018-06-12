const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
const app = express();

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

*/
const users=[
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
    

]

app.route('/users').get((req, res) => {
  res.send( users

  	
   
  	
      

  );
});


app.listen(3000);