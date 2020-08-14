const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors');
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.use(favicon(__dirname + '../holup/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
app.listen(port);
app.use(routes)

//mongoose DB Atlas 
mongoose.connect("mongodb+srv://root:toor@holupcluster0.qlsfi.mongodb.net/holup?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB Atlas on ' + port))
.catch(err => console.log(err))

