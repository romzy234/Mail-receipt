var express = require('express');
const path = require('path');
const Datastore = require('nedb');
const cors = require('cors');
// const bodyparser = require('body-parser');
// const path = require('path');

// Create a new Express application.
const app = express()

const users = new Datastore('./database/users.db');

users.loadDatabase();

//app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname+'/test.html'));
})

app.listen(3000, ()=>{
    console.log("running on port 3000")
});

const cyril = {
  "labels": ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  "data": [43, 27, 45, 45, 30, 40, 30, 25, 39],
  "spanGaps": false
}
app.get('/data1', cors() ,(req,res) => {
      res.send(cyril)
})

app.post('/data',(req,res) => {
  const cyril = req.body;
  console.log(cyril);
  res.end()
})
