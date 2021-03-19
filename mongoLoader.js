// Modules
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  let dbo = db.db('SDCTester');

  dbo.createCollection('Questions', (err, res)=>{
    if (err) throw err
    console.log('Collection created!');
  })

  

  db.close();
});