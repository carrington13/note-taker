const fs = require('fs');
const path = require('path');
const notes = require('../../db/db.json');
const {createNewNote, validateNote, deleteNoteById} = require('../../lib/notes');
const router = require('express').Router();
// Random Id generator
const { nanoid } = require('nanoid');

// ----------
// API Routes 
// ----------

// (GET) Send Notes from {notes} back to client
router.get('/notes', (req, res) => {
  const results = notes;

  //if (results === notesArr) {
    res.json(results);
});


// (POST) Save notes to {notes}
router.post('/notes', (req, res) => {

  // set incoming note id to what the next index of the array will be
  req.body.id = nanoid(10);

  // Validate incoming data
  if (!validateNote(req.body)) {
    // if bad, send error code
    res.status(400).send('The note is not properly formatted');
  } else {
    // otherwise create new note
    const result = createNewNote(req.body, notes);
    // and send it back
    res.json(result);
  }  
});


// (DELETE) Delete Note from {notes}
router.delete('/notes/:id', (req, res) => { 
  const newNotesArr = deleteNoteById(req.params.id, notes);
  
  res.json(newNotesArr);
});


module.exports = router;