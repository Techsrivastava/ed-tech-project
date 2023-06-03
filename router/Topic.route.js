const router = require('express').Router();
const TopicController = require('../controller/Topic.controller');


router.post("/topics", TopicController.put);
router.get("/topics", TopicController.getAllTopics);
router.put("/update/:_id", TopicController.updateTopic);
router.delete("/delete/:_id", TopicController.deleteTopic);


module.exports = router;
