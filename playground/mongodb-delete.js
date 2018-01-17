const {MongoClient, ObjectId}  = require ('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo Db server');
  }
  console.log('Connected to Mongo DB server on 27017');

  db.collection('Todos').findOneAndDelete({_id : new ObjectId('5a5be044e9809754f88e07c5')}).then((result)=>{
    console.log(result);
  });


  // deleteMany
  // deleteOne
  // findOneAndDelete


  // db.close();
});
