const express = require('express');
const lessonsController = require('../controller/lessonsController');

const router = express.Router();

// Route for getting all lessons
router.get('/lessons', lessonsController.getAllLessons);

// Route for creating a lesson
router.post('/lessons', lessonsController.createLesson);

// Route for updating a lesson
router.put('/lessons/:id', lessonsController.updateLesson);

// Route for deleting a lesson
router.delete('/lessons/:id', lessonsController.deleteLesson);

module.exports = router;
