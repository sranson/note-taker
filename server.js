const express = require('express');
const path = require('path');
const fs = require('fs');


// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;
app.use(express.static('./public'));


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes to HTML Views
require('./routes/viewRoutes/viewRoutes')(app);

// Routes to API Data
require('./routes/apiRoutes/apiRoutes')(app);


app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });