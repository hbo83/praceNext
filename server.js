const express = require('express')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/prace"
var cors = require('cors')
var cookieParser = require('cookie-parser')

//var signinRoute = require('./routes/signin');

const app = express()

//app.use(cookieParser())
app.use(cors())//povoli cors requesty

var bodyParser = require('body-parser')
app.use(bodyParser.json());
//app.use(express.static(__dirname + '/public'))
app.use( express.static( `${__dirname}/out` ) );

app.get('/a', (req, res)=>{
  res.sendFile(path.join(__dirname, '/out/index.html'));
})

app.post('/signin', (req, res)=>{

  let login = req.body.login
  let pass = req.body.pass
  let passAgain = req.body.passAgain

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

app.post('/login', (req, res) => {

  let login = req.body.login
  //let pass = req.body.pass

  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw (err)
    }
    let dbo = db.db("prace")
    dbo.collection('users').find( { login: login} ).limit(50).toArray( ( err, result ) => {
      if (err) {
        throw (err)
      }

    console.log(result);
    res.json(result)
    })
    console.log("stat updated")
    db.close();
  });

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');


})

app.post('/update', function (req, res) {
  console.log(req.body)

  MongoClient.connect(url, (err, db) => {
    if (err) {
      throw (err)
    }
    let dbo = db.db("prace")

    let myquery = { login: "aaa" }
    let v = { $set: {town: "town"}}
    let newvalues = { $set: {

      town: req.body.town,
      time: req.body.time,
      activity: req.body.activity,
      phone: req.body.phone,
      mail: req.body.mail
    } };
    dbo.collection('users').updateOne( myquery, v, function (err, res) {

      if (err) {
        throw (err)
        console.log("stat updated")
        db.close();
    }


    })
  });

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  //res.json(name)
})



app.listen(3001, () => console.log( 'port 3001'))
