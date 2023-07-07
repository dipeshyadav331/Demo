const mongoose = require('mongoose');

const mongouri = 'mongodb+srv://yadavdipesh331:Dipesh123@cluster0.tw9sgao.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongouri, {})
  .then(() => {
    console.log('db connected');
  })
  .catch((error) => {
    console.error('db connection error:', error);
  });
