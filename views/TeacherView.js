class TeacherView {
  constructor() {
    this.app = this.getElement("#root");
    this.overlay = this.createElement("div", "overlay");
    this.modal = this.createElement("div", "modal");
    this.modal.classList.add("hidden");
    this.overlay.classList.add("hidden");
    this.closeBtn = this.createElement("button", "close-btn");
    this.closeBtn.textContent = "X";
    this.closeBtn.onclick = () => {
      this.toggleTeacherModal();
    };
    this.id = this.createElement("h2");
    this.name = this.createElement("h1");
    this.email = this.createElement("p");
    this.competences = this.createElement("p");
    this.modal.append(
      this.closeBtn,
      this.id,
      this.name,
      this.email,
      this.competences
    );
    this.app.append(this.overlay, this.modal);
  }

  toggleTeacherModal() {
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

  displayTeacher(teacher) {
    this.id.textContent = `${teacher.id}`;
    this.email.textContent = teacher.email;
    this.name.textContent = teacher.firstName + " " + teacher.lastName;
    this.competences.textContent =
      teacher.competences.length > 0
        ? `Competences: ${teacher.competences}`
        : "No competences";
  }
}

export default TeacherView;
