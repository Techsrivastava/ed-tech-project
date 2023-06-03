const lessonService = require('../services/lessonService');

class LessonsController {
  async getAllLessons(req, res) {
    try {
      const lessons = await lessonService.getAllLessons();
      res.status(200).json(lessons);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createLesson(req, res) {
    try {
      const { subject, topic, videoType, video } = req.body;
  
      // Check if the required fields are provided
      if (!subject || !topic || !videoType || !video) {
        console.log('Missing required fields:', { subject, topic, videoType, video });
        return res.status(400).json({ error: 'Missing required fields' });
      }
  
      console.log('Received lesson data:', { subject, topic, videoType, video });
  
      const newLesson = await lessonService.createLesson(subject, topic, videoType, video);
      console.log('New lesson created:', newLesson);
  
      res.status(201).json(newLesson);
    } catch (error) {
      console.error('Error creating lesson:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  

  async updateLesson(req, res) {
    const lessonId = req.params.id;
    const { subject, topic, videoType, video } = req.body;

    try {
      const updatedLesson = await lessonService.updateLesson(lessonId, subject, topic, videoType, video);
      res.status(200).json(updatedLesson);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteLesson(req, res) {
    const lessonId = req.params.id;

    try {
      await lessonService.deleteLesson(lessonId);
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new LessonsController();
