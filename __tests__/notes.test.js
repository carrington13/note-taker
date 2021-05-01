const fs = require('fs');
const {createNewNote, validateNote, deleteNoteById} = require('../lib/notes');

jest.mock('fs');

test("creates new notes", () => {
    const notes = [];
    const note = createNewNote({title: "Test one", text: "test one text", id: "fe56fapef"}, notes);

    expect(note.title).toBe("Test one");
    expect(note.text).toBe("test one text");
    expect(note.id).toBe("fe56fapef");
})


test("validates note values", () => {
  const note = {title: "Test one", text: "test one text", id: "fe56fapef"};
  const invalidIdNote = {title: "Test one", text: "test one text"};
  const invalidTextNote = {title: "Test one", id: "fe56fapef"};
  const invalidTitleNote = {text: "test one text", id: "fe56fapef"};

  const result1 = validateNote(note);
  const result2 = validateNote(invalidIdNote);
  const result3 = validateNote(invalidTextNote);
  const result4 = validateNote(invalidTitleNote);

  expect(result1).toBe(true);  
  expect(result2).toBe(false);  
  expect(result3).toBe(false);  
  expect(result4).toBe(false);  

})


test("deletes note by id", () => {
  const noteArr = [
    {
      "title": "Test Title",
      "text": "Test text",
      "id": "0"
    },
    {
      "title": "Finish note-taker ",
      "text": "Add finishing touches for note-taker's server",
      "id": "-CtSiDtQrt"
    },
    {
      "title": "Note - taker QA",
      "text": "Test all features for QA",
      "id": "2N2ifaVFpk"
    },
    {
      "title": "Test Delete",
      "text": "Please delete me?",
      "id": "k0Lbzgrukr"
    }
  ]

  const result = deleteNoteById("k0Lbzgrukr", noteArr)

  expect(result).not.toContain(  {
    "title": "Test Delete",
    "text": "Please delete me?",
    "id": "k0Lbzgrukr"
  });
})