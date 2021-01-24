class TeacherListController {
  constructor(model, view, teacherView) {
    this.model = model;
    this.view = view;
    this.teacherView = teacherView;
    this.displayTeachers(this.model.teachers);
    this.view.addHandlerShowTeacher(this.handleShowTeacher);
  }

  displayTeachers = (teachers) => {
    this.view.displayTeachers(teachers);
  };

  handleShowTeacher = (id) => {
    let teacher = this.model.teachers.find((c) => c.id == id);
    this.teacherView.displayTeacher(teacher);
    this.teacherView.toggleTeacherModal();
  };

  signUp = (id, student) => {
    let teacher = this.model.teachers.find((c) => c.id == id);

    teacher.students.push(student);
  };
}

export default TeacherListController;
