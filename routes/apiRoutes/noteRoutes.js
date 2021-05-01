const { notes } = require('../../db/db.json');
const {addfunctionsfromlibnotes} = require('../../lib/notes');
const router = require('express').Router();

// (GET) Send Notes from {notes} back to client
router.get('/api/notes', (req, res) => {
  const results = notes;

  res.json(results);
});

// (POST) Save notes to {notes}
router.post('/api/notes', (req, res) => {
  const newNote = req.body.json
});

// (DELETE) Delete Note from {notes}
router.delete('/api/notes/:id', (req, res) => {
  console.log(req.params.id); 
  // const result = DeleteById(req.params.id, zookeepers);
    // if (result) {
    //   res.json(result);
    // } else {
    //   res.send(404);
    // }
});
module.exports = router;