const router = require('express').Router();
const BoardController = require('../controller/Board.controller');


router.post("/boards", BoardController.put);
router.get("/boards", BoardController.getAllBoards);
router.put("/update/:_id", BoardController.updateBoard);
router.delete("/delete/:_id", BoardController.deleteBoard);


module.exports = router;
