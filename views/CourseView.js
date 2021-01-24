class CourseView {
  constructor() {
    this.app = this.getElement("#root");
    this.overlay = this.createElement("div", "overlay");
    this.modal = this.createElement("div", "modal");
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
    this.closeBtn = this.createElement("button", "close-btn");
    this.closeBtn.textContent = "X";
    this.closeBtn.onclick = () => {
      this.toggleCourseModal();
    };
    this.id = this.createElement("h2");
    this.title = this.createElement("h1");
    this.description = this.createElement("p");
    this.duration = this.createElement("h2");
    this.students = this.createElement("p");
    this.signUpForm = this.createElement("div");
    this.signUpLabel = this.createElement("h3");
    this.signUpLabel.textContent = "Sign up for course:";
    this.signUpInput = this.createElement("input");
    this.signUpInput.placeholder = "Your name";
    this.signUpBtn = this.createElement("button");
    this.signUpBtn.textContent = "Sign up";
    this.signUpForm.append(this.signUpLabel, this.signUpInput, this.signUpBtn);
    this.modal.append(
      this.closeBtn,
      this.id,
      this.title,
      this.description,
      this.duration,
      this.students,
      this.signUpForm
    );
    this.app.append(this.overlay, this.modal);
  }

  toggleCourseModal() {
    this.overlay.classList.toggle("hidden");
    this.modal.classList.toggle("hidden");
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

  displayCourse(course) {
    this.id.textContent = `${course.id}`;
    this.title.textContent = course.title;
    this.description.textContent = course.description;
    this.duration.textContent = `Duration: ${course.duration} hours`;
    this.students.textContent =
      course.students.length > 0
        ? `Registered students: ${course.students}`
        : "No registered students yet";
  }

  addHandlerSignUp(subscriber) {
    this.signUpBtn.addEventListener("click", () => {
      subscriber(this.id.textContent, this.signUpInput.value);
      this.toggleCourseModal();
      this.signUpInput.value = "";
    });
  }
}

export default CourseView;
