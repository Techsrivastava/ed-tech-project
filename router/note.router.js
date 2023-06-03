// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controller/note.controller');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage');
  },
  filename: function (req, file, cb) {
    const originalExtension = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + Date.now() + '.' + originalExtension);
  },
});
const upload = multer({ storage });


router.post('/notes', upload.single('file'), noteController.createNote);
router.get('/notes', noteController.getNotes);
router.delete('/notes/:noteId', noteController.deleteNote);

module.exports = router;
