const express = require('express');
// const favicon = require('express-favicon');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const routes = require('./server/routes/index');
const bodyParser = require('body-parser');

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:3001'}));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.use(routes);


//Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://root:toor@holupcluster0.qlsfi.mongodb.net/Queue?retryWrites=true&w=majority', { useNewUrlParser: true })
.then(()=> console.log('Connected to MongoDB Atlas on ' + PORT))
.catch(err => console.log(err));


//renders home page
app.get('/*', cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


// add to start script in package.json
    // "start": "node server.js",
    // "start": "react-scripts start",
    // took out 'build' lin 14




