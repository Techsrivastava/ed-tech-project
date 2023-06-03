const AssignmentService = require('../services/assignmentService');

const assignmentService = new AssignmentService();

class AssignmentController {
  async getAllAssignments(req, res) {
    try {
      const assignments = await assignmentService.getAllAssignments();
      res.json(assignments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createAssignment(req, res) {
    const { name, topic } = req.body;
    const file = req.file;

    if (!name || !topic || !file) {
      return res.status(400).json({ message: 'Name, topic, and file are required' });
    }

    try {
      const savedAssignment = await assignmentService.createAssignment(name, topic, file);
      res.status(201).json(savedAssignment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteAssignment(req, res) {
    const id = req.params.id;

    try {
      await assignmentService.deleteAssignment(id);
      console.log(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateAssignment(req, res) {
    const id = req.params.id;
    const { name, topic } = req.body;
    const file = req.file;

    if (!name || !topic) {
      return res.status(400).json({ message: 'Name and topic are required' });
    }

    try {
      const updatedAssignment = await assignmentService.updateAssignment(id, name, topic, file);
      console.log(updatedAssignment);
      res.json(updatedAssignment);
    } catch (error) {
        throw error;
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = AssignmentController;
