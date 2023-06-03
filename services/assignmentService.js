const Assignment = require('../model/assignmentModel');

class AssignmentService {
  async getAllAssignments() {
    try {
      const assignments = await Assignment.find();
      return assignments;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createAssignment(name, topic, file) {
    try {
      const newAssignment = new Assignment({
        name,
        topic,
        file: file.filename
      });

      const savedAssignment = await newAssignment.save();
      return savedAssignment;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteAssignment(id) {
    try {
      await Assignment.findByIdAndDelete(id);
      console.log(id);
    } catch (error) {
        throw error;
      throw new Error(error.message);
    }
  }

  async updateAssignment(id, name, topic, file) {
    try {
      let updatedAssignment;

      if (file) {
        updatedAssignment = {
          name,
          topic,
          file: file.filename
        };
      } else {
        updatedAssignment = {
          name,
          topic
        };
      }

      const assignment = await Assignment.findByIdAndUpdate(id, updatedAssignment, { new: true });
      return assignment;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = AssignmentService;
