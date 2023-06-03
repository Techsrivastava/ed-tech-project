const { Subject } = require('../model/Subjects.nodel');

class SubjectServices {
  static async putSubject(subject) {
    try {
      const createSubject = await Subject.create({ subject });
      return createSubject;
    } catch (error) {
      throw error;
    }
  }

  static async getSubjectbySubject(subject) {
    try {
      return await Subject.findOne({ subject });
    } catch (error) {
      throw error;
    }
  }

  static async getAllSubjects() {
    try {
      const Subjects = await Subject.find({});
      return Subjects;
    } catch (error) {
      throw error;
    }
  }



  static async updateSubject(id, updatedSubject) {
    try {
      const updated = await Subject.findByIdAndUpdate(id, { subject: updatedSubject }, { new: true });
      return updated;
    } catch (error) {
      throw error;
    }
  }


  static async deleteSubject(id) {
    try {
      console.log("Deleting Subject with _id:", id);
      const deletedSubject = await Subject.findByIdAndDelete(id);
      console.log("Deleted Subject:", deletedSubject);
      return deletedSubject;
    } catch (error) {
      console.error("Error deleting Subject:", error);
      throw error;
    }
  }
}

module.exports = SubjectServices;
