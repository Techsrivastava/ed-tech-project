const router = require('express').Router();
const SubjectController = require('../controller/Subject.controller');


router.post("/Subjects", SubjectController.put);
router.get("/Subjects", SubjectController.getAllSubjects);
router.put("/update/:_id", SubjectController.updateSubject);
router.delete("/delete/:_id", SubjectController.deleteSubject);


module.exports = router;
