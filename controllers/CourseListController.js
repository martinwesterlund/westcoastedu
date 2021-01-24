class CourseListController {
  constructor(model, view, courseView) {
    this.model = model;
    this.view = view;
    this.courseView = courseView;
    this.displayCourses(this.model.courses);
    this.view.addHandlerShowCourse(this.handleShowCourse);
    this.courseView.addHandlerSignUp(this.signUp);
  }

  displayCourses = (courses) => {
    this.view.displayCourses(courses);
  };

  handleShowCourse = (id) => {
    let course = this.model.courses.find((c) => c.id == id);
    this.courseView.displayCourse(course);
    this.courseView.toggleCourseModal();
  };

  signUp = (id, student) => {
    let course = this.model.courses.find((c) => c.id == id);

    course.students.push(student);
  };
}

export default CourseListController;
