const mongoose = require ('mongoose');




const connection = mongoose.createConnection('mongodb+srv://adarsh00761:8TPPhxhZD9sHLDC3@cluster0.i7f8uc5.mongodb.net/?retryWrites=true&w=majority').on('open', ()=>{
    console.log('Db conected');
}).on('error', ()=>{
    console.log('error');
});


module.exports = connection;