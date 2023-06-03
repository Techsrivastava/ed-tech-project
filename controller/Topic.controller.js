const TopicServices = require("../services/Topic.services");


exports.put = async (req, res, next) => {
    try {
        const { topic } = req.body;
        const duplicate = await TopicServices.getTopicbyTopic(topic);
        if(duplicate){
            throw new Error (`Topic ${topic} Already exists.`);
        }
        const response = await TopicServices.putTopic(topic);
        res.json({status: true, success: 'Topic Put Succesfull,'})
    } catch (error) {
        next(error);
    }
};

exports.getAllTopics = async (req, res , next ) =>  {
    try {
        const topics = await TopicServices.getAllTopics();
        res.status(200).json({status:true, data: topics})
    } catch (error) {
        next(error);
    }
};

exports.updateTopic = async (req, res, next) => {
    try {
      const { _id } = req.params;
      const { topic } = req.body;
  
      const updatedTopic = await TopicServices.updateTopic(_id, topic);
  
      if (!updatedTopic) {
        return res.status(404).json({ success: false, message: "Topic not found" });
      }
  
      return res.json({ success: true, message: "Topic updated successfully", data: updatedTopic });
    } catch (error) {
      console.error("Error updating Topic:", error);
      next(error);
    }
  };
  
  
  
    exports.deleteTopic = async (req, res, next) => {
      try {
        const { _id } = req.params;
        console.log("Deleting Topic with _id:", _id);
        const deletedTopic = await TopicServices.deleteTopic(_id);
        console.log("Deleted Topic:", deletedTopic);
    
        if (!deletedTopic) {
          return res.status(404).json({ success: false, message: "Topic not found" });
        }
    
        return res.json({ success: true, message: "Topic deleted successfully", data: deletedTopic });
      } catch (error) {
        console.error("Error deleting Topic:", error);
        next(error);
      }
    };