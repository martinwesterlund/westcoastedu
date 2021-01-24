class TeacherListView {
  constructor() {
    this.app = this.getElement("#root");
    this.title = this.createElement("h1", "teachers-header");
    this.title.textContent = "Teachers";
    this.teacherList = this.createElement("ul", "teacher-list");
    this.app.append(this.title, this.teacherList);
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  displayTeachers(teachers) {
    while (this.teacherList.firstChild) {
      this.teacherList.removeChild(this.teacherList.firstChild);
    }

    if (teachers.length === 0) {
      const p = this.createElement("p");
      p.textContent = "No teachers in the list";
      this.teacherList.append(p);
    } else {
      teachers.forEach((teacher) => {
        const li = this.createElement("li");
        li.id = teacher.id;
        li.classList.add("teacher");
        const span = this.createElement("span");
        span.textContent = teacher.firstName + " " + teacher.lastName;

        li.append(span);
        this.teacherList.append(li);
      });
    }
  }

  addHandlerShowTeacher(subscriber) {
    const teachers = this.teacherList.querySelectorAll(".teacher");
    teachers.forEach((teacher) => {
      teacher.addEventListener("click", (e) => {
        subscriber(teacher.id);
      });
    });
  }
}

export default TeacherListView;
