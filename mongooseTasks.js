const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Replika');

const Fanf = mongoose.model('Fanf', { name: String });
const fanf = new Fanf({ name: 'Кефер' });

fanf.save().then(() =>  console.log('Приветики :)'))
