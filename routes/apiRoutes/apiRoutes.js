const path = require('path');
const noteData = require("../../data/noteData")


module.exports = (app) => {
    // app.get('/api/notes', (req, res) => res.sendFile(path.join(process.cwd(), '/data/db.json')));
    app.get('/api/notes', (req, res) => res.json(noteData));


    
    // app.post('/api/notes', function(req, res) {
    //     let newNote = req.body;
    //     var data = fs.readFileSync(process.cwd(), '/data/noteData.js');
    //     var myObj = JSON.parse(data);
    //     myObj.push(newNote)  
    //     newNote = JSON.stringify(myObj);
    //     fs.writeFile('./data/db.json', newNote, err => {
    //         if (err) throw err;
    //         console.log('NEW NOTE ADDED!');
    //     }); 
    //     res.json(newNote);
    // })

}







