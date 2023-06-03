// services/NoteService.js
const Note = require('../model/note.model');

class NoteService {
  async getAllNotes() {
    return await Note.find();
  }

  async createNote(subject, topic, note, file) {
    const newNote = new Note({
      subject,
      topic,
      note,
      file,
    });
    return await newNote.save();
  }

  async deleteNote(noteId) {
    return await Note.findByIdAndDelete(noteId);
  }
}

module.exports = new NoteService();
