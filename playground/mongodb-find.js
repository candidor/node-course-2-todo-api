const {MongoClient, ObjectId}  = require ('mongodb');

var obj = new ObjectId();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to Mongo Db server');
  }
  console.log('Connected to Mongo DB server on 27017');

  // Syntax using the callback function
  db.collection('Todos').find().count((err, count)=> {
    if (err) {
    return console.log('Unable to fetch todos', err);
    }
    console.log(`There are <${count}> documents in the Todos collection`);
  })

  // Syntax using the callback function
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`There are <${count}> documents in the Todos collection`);
  // }
  // , (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({location: 'Brussels'}).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }
  , (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
