const router = require('express').Router();
const GradeController = require('../controller/grade.controller');

router.post("/grades", GradeController.put);
router.get("/grades", GradeController.getAllGrades);
router.put("/update/:_id", GradeController.updateGrade);
router.delete("/delete/:_id", GradeController.deleteGrade);

module.exports = router;
