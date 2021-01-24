class CourseListView {
  constructor() {
    this.app = this.getElement("#root");
    this.title = this.createElement("h1", "courses-header");
    this.title.textContent = "Courses";
    this.courseList = this.createElement("ul", "course-list");
    this.app.append(this.title, this.courseList);
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

  displayCourses(courses) {
    while (this.courseList.firstChild) {
      this.courseList.removeChild(this.courseList.firstChild);
    }
    if (courses.length === 0) {
      const p = this.createElement("p");
      p.textContent = "No courses in the list";
      this.courseList.append(p);
    } else {
      courses.forEach((course) => {
        const li = this.createElement("li");
        li.id = course.id;
        li.classList.add("course");
        const span = this.createElement("span");
        span.textContent = course.title;
        li.append(span);
        this.courseList.append(li);
      });
    }
  }

  addHandlerShowCourse(subscriber) {
    const courses = this.courseList.querySelectorAll(".course");
    courses.forEach((course) => {
      course.addEventListener("click", (e) => {
        subscriber(course.id);
      });
    });
  }
}

export default CourseListView;
