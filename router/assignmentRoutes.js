const express = require('express');
const router = express.Router();
const multer = require('multer');
const AssignmentController = require('../controller/assignmentController');

const assignmentController = new AssignmentController();

// Set up multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// File filter for multer
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('application/pdf')) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed'), false);
  }
};

// Set up multer upload configuration
const upload = multer({ storage, fileFilter });

// Routes
router.get('/assignments', assignmentController.getAllAssignments);
router.post('/assignments', upload.single('file'), assignmentController.createAssignment);
router.delete('/assignments/:id', assignmentController.deleteAssignment);
router.put('/assignments/:id', upload.single('file'), assignmentController.updateAssignment);

module.exports = router;
