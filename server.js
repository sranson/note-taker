const express = require('express');
const path = require('path');

// Tells node that we are creating an "express" server
const app = express();


// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;
app.use(express.static('./public'));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// res.send("Welcome to the Star Wars Page!")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, './public/notes.html'));
    console.log('Successfully getting the notes.html page');
})



// LISTENER
// The below code effectively "starts" our server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });