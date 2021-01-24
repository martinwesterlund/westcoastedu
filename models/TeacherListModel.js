import TeacherModel from "./TeacherModel.js";

class TeacherListModel {
  constructor() {
    this.teachers = [
      new TeacherModel(12, "ulf.bilting@hotmail.com", "xyz", "Ulf", "Bilting", [
        "Java",
        "C++",
        "C",
      ]),
      new TeacherModel(
        34,
        "michael.gustavsson@gmail.com",
        "qwerty",
        "Michael",
        "Gustavsson",
        ["C++", "JavaScript", "TypeScript", "Angular", "React", "MSSQL"]
      ),
      new TeacherModel(
        56,
        "mikael.zetterstrom@hotmail.com",
        "password1",
        "Mikael",
        "Zetterström",
        ["C", "C++"]
      ),
      new TeacherModel(
        78,
        "ulf.malmstrom@hotmail.com",
        "losenord",
        "Ulf",
        "Malmström",
        ["Visual Basic", "Access", "Excel"]
      ),
    ];
  }
}

export default TeacherListModel;
