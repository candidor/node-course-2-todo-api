const {MongoClient, ObjectId}  = require ('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo Db server');
  }
  console.log('Connected to Mongo DB server on 27017');

  db.collection('Users').findOneAndUpdate(
    {id: new ObjectId('5a5bc8e9770da82a6cbc3a5c')},
    {$inc :{age: 2}},
    {returnOriginal : true})
      .then((result) => {
    console.log(result);
  }
  // , (err) => {
  //   console.log('Unable to update todos', err);
  // }
);

  // db.close();
});
