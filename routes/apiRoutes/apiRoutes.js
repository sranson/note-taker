const path = require('path');


module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.sendFile(path.join(process.cwd(), '/data/db.json')));


    
    app.post('/api/notes', function(req, res) {
        let newNote = req.body;
        var data = fs.readFileSync(process.cwd(), '/data/db.json');
        var myObj = JSON.parse(data);
        myObj.push(newNote)  
        newNote = JSON.stringify(myObj);
        fs.writeFile('./data/db.json', newNote, err => {
            if (err) throw err;
            console.log('NEW NOTE ADDED!');
        }); 
        res.json(newNote);
    })

}







