const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const { notes } = require("../../db/db.json");


// GET notes from '/api/notes' (./db/db.json)

router.get('/notes', (req, res)=>{
    let results = notes;

    res.json(results);
});

// POST/CREATE-NEW-ENTRY in '/api/notes' (./db/db.json)

router.post('/notes', (req, res)=>{
    req.body.id = uuidv4();

    const newNote = req.body;
    notes.push(newNote);
    
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    
    res.json(notes);
});

// 

router.delete('/notes/:id', (req, res)=>{
    const delNote = req.params.id;

    const itemToRemoveIndex = notes.findIndex(function(item) {
        return item.id === delNote;
    });

    // proceed to remove an item only if it exists.
    if (itemToRemoveIndex !== -1) {
        notes.splice(itemToRemoveIndex, 1);
    }

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    
    res.json(notes);
});


// router.post('/notes', (req, res) =>{ 
//     const newNote = req.body;
//     notes.push(newNote);
//     res.json(notes);
// });

module.exports = router;