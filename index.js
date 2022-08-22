const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser');
//const cors = require('cors');

//app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/convertfile.html'));
  });


  app.post('/add', function(req, res) {
      console.log(req.body.name)
      console.log(req.body.w3review)
      const value1 = req.body.w3review
      console.log(typeof(value1))

      const splitlines = str => str.split(/\r?\n/);
    //const splitlines = str => str.split(' ');
      const pasting = splitlines(value1)

      for(let i = 0 ; i < pasting.length; i++){
    
        const numConversion = Number(pasting[i])
       //console.log(numConversion)
       console.log(typeof(numConversion))
       
       
       
      
       
    }
    

    res.redirect(301, '/')

  })

  

app.use(express.json)
const port = process.env.PORT || 7500

app.listen(port, () => console.log('Server started on port ' + port))