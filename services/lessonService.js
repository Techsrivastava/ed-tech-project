const Lesson = require('../model/lesson');

class LessonService {
  getAllLessons() {
    return Lesson.find({});
  }

  createLesson(subject, topic, videoType, video) {
    const newLesson = new Lesson({
      subject,
      topic,
      videoType,
      video,
    });

    return newLesson.save();
  }

  updateLesson(lessonId, subject, topic, videoType, video) {
    return Lesson.findByIdAndUpdate(
      lessonId,
      {
        subject,
        topic,
        videoType,
        video,
      },
      { new: true }
    );
  }

  deleteLesson(lessonId) {
    return Lesson.findByIdAndRemove(lessonId);
  }
}

module.exports = new LessonService();
