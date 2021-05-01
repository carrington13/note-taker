// -----------------------------------
// Functions for /apiRoutes/noteRoutes
// -----------------------------------
const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    // Push it to the array
    notesArray.push(note);
    // Rewrite db.json with new array
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify(notesArray, null, 2)
    );

    return note;    
}

function validateNote(note) {
    if (!note.title || typeof note.title !== "string") {
        return false;
    }
    if (!note.text || typeof note.text !== "string") {
        return false;
    }
    if (!note.id || typeof note.id !== "string") {
        return false;
    }
    return true;
}

function deleteNoteById(noteId, notesArray) {

    // Filter notesArray by not including note with id === noteId
    const deletedNoteIndex = notesArray.findIndex(note => note.id === noteId)
    notesArray.splice(deletedNoteIndex, 1);
    //let newNotesArr = notesArray.filter(note => note.id !== noteId);
    
    // RewriteFile using updated arr
    fs.writeFileSync(path.join(__dirname, "../db/db.json"),
    JSON.stringify(notesArray, null, 2) 
    )

    //return newNotesArr
    return notesArray;
}



module.exports = {createNewNote, validateNote, deleteNoteById};