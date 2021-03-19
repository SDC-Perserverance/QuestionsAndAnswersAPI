const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const fs = require('fs');
const parse = require('csv-parse');
const transform = require('stream-transform');
// Connect to db


const url = 'mongodb://localhost:27017/';
MongoClient.connect(url, (err, db) => {
  if(err) {
    throw err
  }

  let dbo = db.db('SDCTester');

  let parser = parse({
    delimiter: ',',
    trim: true,
    skip_empty_lines: true,
    skip_lines_with_error: true
  })

  let transformer = transform((data)=> {
    let obj = {
      id: data[0],
      productId: data[1],
      body: data[2],
      date: data[3],
      asker: data[4],
      askerEmail: data[5],
      reports: data[6],
      helpful:data[7],
      answers: {
        answers: [],
        images: []
      }
    }
    return obj
  })


  const stream1 = fs.createReadStream('./data/questions.csv').pipe(parser).pipe(transformer);

  stream1
    .on('data', (chunk)=>{
      console.log('Single Chonk:', chunk);
      dbo.collection('Questions').insertOne(chunk);
    });

})







