const path = require('path');
const noteData = require("../../data/noteData")


module.exports = (app) => {
    // app.get('/api/notes', (req, res) => res.sendFile(path.join(process.cwd(), '/data/db.json')));
    app.get('/api/notes', (req, res) => res.json(noteData));

   app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        noteData.push(newNote);
        res.send('Successfully added note!');
   })

}







