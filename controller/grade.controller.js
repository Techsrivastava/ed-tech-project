const GradeServices = require('../services/grade.services');

exports.put = async (req, res, next) => {
  try {
    const { grade } = req.body;
    const duplicate = await GradeServices.getGradeByGrade(grade);
    if (duplicate) {
      throw new Error(`Grade ${grade} already exists.`);
    }
    const response = await GradeServices.putGrade(grade);
    res.json({ status: true, success: 'Grade put successful.' });
  } catch (err) {
    next(err);
  }
};

exports.getAllGrades = async (req, res, next) => {
  try {
    const grades = await GradeServices.getAllGrades();
    res.status(200).json({ success: true, data: grades });
  } catch (error) {
    next(error);
  }
};

exports.updateGrade = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const { grade } = req.body;

    const updatedGrade = await GradeServices.updateGrade(_id, grade);

    if (!updatedGrade) {
      return res.status(404).json({ success: false, message: "Grade not found" });
    }

    return res.json({ success: true, message: "Grade updated successfully", data: updatedGrade });
  } catch (error) {
    console.error("Error updating grade:", error);
    next(error);
  }
};



  exports.deleteGrade = async (req, res, next) => {
    try {
      const { _id } = req.params;
      console.log("Deleting grade with _id:", _id);
      const deletedGrade = await GradeServices.deleteGrade(_id);
      console.log("Deleted grade:", deletedGrade);
  
      if (!deletedGrade) {
        return res.status(404).json({ success: false, message: "Grade not found" });
      }
  
      return res.json({ success: true, message: "Grade deleted successfully", data: deletedGrade });
    } catch (error) {
      console.error("Error deleting grade:", error);
      next(error);
    }
  };
  
  
  
  