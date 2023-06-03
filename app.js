const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./router/user.router');
const adminRoutes = require('./router/route');
const gradeRoute = require('./router/grade.route');
const boardRoute = require('./router/board.route');
const subjectRoute = require('./router/Subject.route');
const topicRoute = require('./router/Topic.route');
const noteRouter = require("./router/note.router");
const assignmentRoutes = require("./router/assignmentRoutes");
const lessonsRoutes = require("./router/lessonsRoutes");
const planRoutes = require("./router/plan.routes");
const settingsRoute = require("./router/settings.route");


const fs = require('fs');
const path = require('path');

const app = express();
const uploadDir = 'storage';

// ADD THIS
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'storage' folder
app.use('/storage', express.static(path.join(__dirname, 'storage')));



if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.use('/', userRouter);
app.use('/api/settings', settingsRoute);
app.use('/api', adminRoutes);
app.use("/api/grade", gradeRoute);
app.use("/api/board", boardRoute);
app.use("/api/subject", subjectRoute);
app.use("/api/topic", topicRoute);
app.use("/api/note", noteRouter);
app.use('/api/assignment', assignmentRoutes);
app.use('/api/lessons', lessonsRoutes);
app.use('/api/plan', planRoutes);

module.exports = app;
