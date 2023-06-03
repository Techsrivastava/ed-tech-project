const noteService = require('../services/note.servic');
const multer = require('multer');


exports.getNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.createNote = async (req, res) => {
  try {

    
    const { subject, topic, note } = req.body;
    const file = req.file ? req.file.filename : null;
    const newNote = await noteService.createNote(subject, topic, note, file);
    console.log('notes data: ', newNote);
    res.json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const { noteId } = req.params;
    await noteService.deleteNote(noteId);
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
