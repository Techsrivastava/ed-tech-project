const SubjectServices = require("../services/Subject.servic");

exports.put = async (req, res, next) => {
  try {
    const { subject } = req.body;
    const duplicate = await SubjectServices.getSubjectbySubject(subject);
    if (duplicate) {
      throw new Error(`Subject ${subject} already exists.`);
    }
    const response = await SubjectServices.putSubject(subject);
    res.json({ status: true, success: 'Subject put successful.' });
  } catch (error) {
    next(error);
  }
};


exports.updateSubject = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const { subject } = req.body;

    const updatedSubject= await SubjectServices.updateSubject(_id, subject);

    if (!updatedSubject) {
      return res.status(404).json({ success: false, message: "Subject not found" });
    }

    return res.json({ success: true, message: "Subject updated successfully", data: updatedSubject });
  } catch (error) {
    console.error("Error updating Subject:", error);
    next(error);
  }
};

exports.getAllSubjects = async (req, res, next) => {
  try {
    const subjects = await SubjectServices.getAllSubjects();
    res.status(200).json({ status: true, data: subjects });
  } catch (error) {
    next(error);
  }
};



exports.deleteSubject = async (req, res, next) => {
  try {
    const { _id } = req.params;
    console.log("Deleting Subject with _id:", _id);
    const deletedSubject = await SubjectServices.deleteSubject(_id);
    console.log("Deleted Subject:", deletedSubject);

    if (!deletedSubject) {
      return res.status(404).json({ success: false, message: "Subject not found" });
    }

    return res.json({ success: true, message: "Subject deleted successfully", data: deletedSubject });
  } catch (error) {
    console.error("Error deleting Subject:", error);
    next(error);
  }
};

