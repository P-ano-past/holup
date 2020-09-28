const express = require('express');
// const favicon = require('express-favicon');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
const mongoose = require('mongoose');
const routes = require('./server/routes/index');
const bodyParser = require('body-parser');

// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://root:toor@holupcluster0.qlsfi.mongodb.net/Queue?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(()=> console.log('Connected to MongoDB Atlas on ' + PORT))
.catch(err => console.log(err));

app.use(routes);

//renders home page
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


// add to start script in package.json
    // "start": "node server.js",
    // "start": "react-scripts start",
    // took out 'build' lin 14



