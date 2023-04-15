const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    res.json({
        message:'Hello world'
    })
})
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});