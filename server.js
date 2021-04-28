const express = require('express');
const path = require('path');
const fs = require('fs');
const { parse } = require('path');
const generateUniqueId = require('generate-unique-id');


const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static('./public'));
app.use(express.static('./data'));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes for HTML Views
require('./routes/viewRoutes/viewRoutes')(app);

// Routes for API Data
// Getting the API data from db.json file
app.get('/api/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '/data/noteData.json'));
})

// Posting new notes to the API via the db.json file
app.post('/api/notes', function(req, res) {
    let newNote = req.body;
    const myID = generateUniqueId({
        length: 5,
        useLetters: false
      });
    newNote.id = myID;
    console.log(newNote);
    var data = fs.readFileSync('./data/noteData.json');
    var myObj = JSON.parse(data);
    myObj.push(newNote)  
    newNote = JSON.stringify(myObj);
    fs.writeFile('./data/noteData.json', newNote, err => {
        if (err) throw err;
        console.log('NEW NOTE ADDED!');
    }); 
    res.json(newNote);
})


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });