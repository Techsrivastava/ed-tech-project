const { Board } = require('../model/Boards.models');

class BoardServices {
  static async putBoard(board) {
    try {
      const createBoard = await Board.create({ board });
      return createBoard;
    } catch (error) {
      throw error;
    }
  }

  static async getBoardByBoard(board) {
    try {
      return await Board.findOne({ board });
    } catch (error) {
      throw error;
    }
  }

  static async getAllBoards() {
    try {
      const boards = await Board.find({});
      return boards;
    } catch (error) {
      throw error;
    }
  }
  static async updateBoard(id, updateBoard) {
    try {
      const updated = await Board.findByIdAndUpdate(id, {board: updateBoard}, {new: true});
      return updated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteBoard(id) {
    try {
      console.log("Deleting Board with _id:", id);
      const deletedBoard = await Board.findByIdAndDelete(id);
      console.log("Deleted grade:", deletedBoard);
      return deletedBoard;
    } catch (error) {
      console.error("Error deleting Board:", error);
      throw error;
    }
  }
}

module.exports = BoardServices;
