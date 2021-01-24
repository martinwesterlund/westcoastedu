import CourseListController from "./controllers/CourseListController.js";
import CourseListModel from "./models/CourseListModel.js";
import CourseListView from "./views/CourseListView.js";
import CourseView from "./views/CourseView.js";
import TeacherListController from "./controllers/TeacherListController.js";
import TeacherListModel from "./models/TeacherListModel.js";
import TeacherListView from "./views/TeacherListView.js";
import TeacherView from "./views/TeacherView.js";

new CourseListController(
  new CourseListModel(),
  new CourseListView(),
  new CourseView()
);
new TeacherListController(
  new TeacherListModel(),
  new TeacherListView(),
  new TeacherView()
);
