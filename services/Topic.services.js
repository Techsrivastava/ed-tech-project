const { Topic } = require('../model/Topics.model');

class TopicServices {
  static async putTopic(topic) {
    try {
      const createTopic = await Topic.create({ topic });
      return createTopic;
    } catch (error) {
      throw error;
    }
  }

  static async getTopicbyTopic(topic) {
    try {
      return await Topic.findOne({ topic });
    } catch (error) {
      throw error;
    }
  }

  static async getAllTopics() {
    try {
      const topics = await Topic.find({});
      return topics;
    } catch (error) {
      throw error;
    }
  }

  static async updateTopic(id, updatedTopic) {
    try {
      const updated = await Topic.findByIdAndUpdate(id, { topic: updatedTopic }, { new: true });
      return updated;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTopic(id) {
    try {
      console.log("Deleting Topic with _id:", id);
      const deletedTopic = await Topic.findByIdAndDelete(id);
      console.log("Deleted Topic:", deletedTopic);
      return deletedTopic;
    } catch (error) {
      console.error("Error deleting Topic:", error);
      throw error;
    }
  }
}

module.exports = TopicServices;
