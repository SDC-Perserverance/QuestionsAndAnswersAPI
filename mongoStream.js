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

  let dbo = db.db('SDC');

  let parser = parse({
    delimiter: ',',
    trim: true,
    skip_empty_lines: true,
    skip_lines_with_error: true
  })

  let transformer = transform((data)=> {
    let obj = {
      id: parseInt(data[0]),
      answerId: parseInt(data[1]),
      url: data[2]
    }
    return obj
  })


  const stream1 = fs.createReadStream('./data/answers_photos.csv').pipe(parser).pipe(transformer);
  // This version of the stream reads from answers_photos and updates the Answers collection with images
  stream1
    .on('data', (chunk) => {
      let answerId = chunk.answerId;
      dbo.collection('Answers').findOneAndUpdate({ id: answerId }, { '$push' : { images: chunk }});
    })
    .on('end', ()=>{
      console.log('Data has been loaded!')
    });
})



