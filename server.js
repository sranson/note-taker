const express = require('express');
const path = require('path');
const fs = require('fs');
const { parse } = require('path');

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;
app.use(express.static('./public'));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rendering the home page to user
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Rendering the notes/html page to user
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})

// Getting the API data from db.json file
app.get('/api/notes', function(req, res) {
    res.sendFile(path.join(__dirname, './db/db.json'));
})

// Posting new notes to the API via the db.json file
app.post('/api/notes', function(req, res) {
    let newNote = req.body;
    var data = fs.readFileSync('./db/db.json');
    var myObj = JSON.parse(data);
    myObj.push(newNote)  
    newNote = JSON.stringify(myObj);
    fs.writeFile('./db/db.json', newNote, err => {
        if (err) throw err;
        console.log('NEW NOTE ADDED!');
    }); 
    res.json(newNote);
})





// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });