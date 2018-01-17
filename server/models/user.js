var mongoose = require('mongoose');

var User = mongoose.model('User', {
  name:{
    type: String,
    required : true
  },
  email: {
    type: String,
    required: true,
    trim :true,
    minlength : 10
  },
  age :{
    type: Number,
    min: 10,
    max: 120
  }
});

module.export = {User};
