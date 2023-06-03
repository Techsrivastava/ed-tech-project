const BoardServices = require("../services/Boards.services");

exports.put = async (req, res, next) => {
  try {
    const { board } = req.body;
    const duplicate = await BoardServices.getBoardByBoard(board);
    if (duplicate) {
      throw new Error(`Board ${board} already exists.`);
    }
    const response = await BoardServices.putBoard(board);
    res.json({ status: true, success: 'Board put successful.' });
  } catch (error) {
    next(error);
  }
};

exports.getAllBoards = async (req, res, next) => {
  try {
    const boards = await BoardServices.getAllBoards();
    res.status(200).json({ status: true, data: boards });
  } catch (error) {
    next(error);
  }
};

exports.updateBoard = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const { board } = req.body;
    const updatedBoard = await BoardServices.updateBoard( _id,board);
    if(!updatedBoard){
      return res.status(404).json({success:false, message: "Board not found "});
    }

    return res.json({success: true, message: "Board updated successfully ", data: updatedBoard});
  } catch (error) {
    console.error("Error updating Board:", error);
    next(error);
  }
};

exports.deleteBoard = async (req, res, next) => {
  try {
    const { _id } = req.params;
    console.log("Deleting Board with _id:", _id);
    const deleteBoard = await BoardServices.deleteBoard(_id);
    console.log("Deleted grade:", deleteBoard);

    if(!deleteBoard){
      return res.status(404).json({ success: false, message: "Board not Found"});;
    }
    res.json({ success: true, message: "Board Deleted Successfully", data: deleteBoard });
  } catch (error) {
    console.log("Error Deleting Board: ", error);
    next(error);
  }
};
