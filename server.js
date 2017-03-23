const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require('mongoose');
const config = require('./config/database')

//Connect to database
mongoose.connect(config.database);

//on Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

//on Error
mongoose.connection.on('error', (err) => {
    console.log('Database error '+err);
});

const app = express();

const employees = require('./routes/employees');

//PortNumber
const port = 3000;

app.use(cors());

//connecting the backend port and frontend port

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/employees', employees);

//TemporaryRouting
app.get('/', (req,res)=>{
    res.send('Invalid EndPoint');
})

//Start Server
app.listen(port, () => {
    console.log('Server started on port '+port+'...');
});