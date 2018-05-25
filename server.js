const express = require('express')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/prace"

//var signinRoute = require('./routes/signin');

const app = express()


//app.use(express.static(__dirname + '/public'))
app.use( express.static( `${__dirname}/out` ) );

app.get('/a', (req, res)=>{
  res.sendFile(path.join(__dirname, '/out/index.html'));
})

app.get('/signin', (req, res)=>{

  let login = req.query.login
  let pass = req.query.pass
  let passAgain = req.query.passAgain

  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw (err)
    }
    let dbo = db.db("prace")
    dbo.collection('users').insertOne( { login: login, password: pass } )
    if (err) {
      throw (err)
    }
    console.log("stat updated")
    db.close()
  });

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  console.log(login + pass + passAgain)
  res.send("ahoj");
})





app.listen(3001, () => console.log( 'port 3001'))
