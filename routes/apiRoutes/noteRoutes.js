const fs = require('fs');
const path = require('path');
const notes = require('../../db/db.json');
const {validateNote, addNote, deleteNote} = require('../../lib/notes');
const router = require('express').Router();

// (GET) Send Notes from {notes} back to client
router.get('/notes', (req, res) => {
  // notes are already in json format
  const results = notes;
  console.log(results);
  // so send them.
  res.send(results);
});

// (POST) Save notes to {notes}
router.post('/notes', (req, res) => {
  console.log(req.body);

  // set incoming note id to what the next index of the array will be
  req.body.id = notes.length.toString();

  console.log(req.body.id);
  // // Validate incoming data
  // if (!validateNote(req.body)) {
  //   // if bad, send error code
  //   res.status(400).send('The note is not properly formatted');
  // } else {
  //   // otherwise create new note
  //   const note = createNewNote(req.body, notes);
  //   // and send it back
  //   res.json(note);
  // }
  

});

// (DELETE) Delete Note from {notes}
router.delete('/notes/:id', (req, res) => {
  console.log(req.params.id); 
  // const result = DeleteById(req.params.id, zookeepers);
    // if (result) {
    //   res.json(result);
    // } else {
    //   res.send(404);
    // }
});
module.exports = router;