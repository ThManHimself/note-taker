const path = require('path');
const router = require('express').Router();
const notes = require("../../db/db");

// GET /api/notes should read the db.json file and return all saved notes as JSON

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note 

module.exports = router;