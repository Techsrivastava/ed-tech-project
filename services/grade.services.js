const { response } = require("express");
const { Grade } = require("../model/grade.model");

class GradeServices {
  static async putGrade(grade) {
    try {
      const createGrade = await Grade.create({ grade });
      return createGrade;
    } catch (error) {
      throw error;
    }
  }

  static async getGradeByGrade(grade) {
    try {
      return await Grade.findOne({ grade });
    } catch (error) {
      throw error;
    }
  }

  static async getAllGrades() {
    try {
      const grades = await Grade.find({});
      return grades;
    } catch (error) {
      throw error;
    }
  }

  static async updateGrade(id, updatedGrade) {
    try {
      const updated = await Grade.findByIdAndUpdate(id, { grade: updatedGrade }, { new: true });
      return updated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteGrade(id) {
    try {
      console.log("Deleting grade with _id:", id);
      const deletedGrade = await Grade.findByIdAndDelete(id);
      console.log("Deleted grade:", deletedGrade);
      return deletedGrade;
    } catch (error) {
      console.error("Error deleting grade:", error);
      throw error;
    }
  }
  
  
}

module.exports = GradeServices;
