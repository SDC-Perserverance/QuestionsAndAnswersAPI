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

  let dbo = db.db('SDCdb');

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

  stream1
    .on('data', (chunk) => {
      let answerId = chunk.answerId;
      dbo.collection('Answers').update({ id: answerId }, { '$push' : {images: chunk}});
      console.log('Image inserted: ', chunk);
    })
    .on('end', ()=>{
      console.log('Data has been loaded!')
    });
})

/*
Image inserted:  {
  id: 1466790,
  answerId: 4894447,
  url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
}
*/