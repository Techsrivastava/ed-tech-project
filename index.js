const app = require('./app');
const db = require('./config/db');



const port = 27017;

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.listen(port, ()=>{
    console.log(`Server listening on http://localhost:${port} `);
});
