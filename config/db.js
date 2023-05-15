const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;



const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/ed-tech').on('open', ()=>{
    useUnifiedTopology: true
    useNewUrlParser: true
    console.log('Db conected');
    
}).on('error', ()=>{
    console.log('error');
});


module.exports = connection;