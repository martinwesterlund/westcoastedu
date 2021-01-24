import chai from "chai";
import TeacherListModel from "../models/TeacherListModel.js";

describe("TeacherListModel.js", () => {
  let model = new TeacherListModel();

  describe("Instantiation", () => {
    it("creates an instance of a TeacherListModel", () => {
      chai.expect(model).to.exist;
    });

    it("includes a property teachers", () => {
      chai.expect(model).to.have.a.property("teachers");
    });

    it("includes teachers that is an array", () => {
      chai.expect(model).to.have.a.property("teachers").that.is.an("array");
    });
  });
});
