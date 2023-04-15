const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('A Simple Node.js Server is Up and Running.......')
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});