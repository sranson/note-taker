const express = require('express');



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
require('./routes/apiRoutes')(app);



app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });