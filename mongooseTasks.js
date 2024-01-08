const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Replika');

var schema = mongoose.Schema({name:String});
schema.methods.talk = function(){
    console.log(this.get("name") + " сказал приветик")
    }
const Fanf = mongoose.model('Fanf', schema);
const fanf = new Fanf({ name: 'Кефер' });

fanf.save().then(() => fanf.talk())
