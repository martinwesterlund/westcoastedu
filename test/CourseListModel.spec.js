import chai from "chai";
import CourseListModel from "../models/CourseListModel.js";

describe("CourseListModel.js", () => {
  let model = new CourseListModel();

  describe("Instantiation", () => {
    it("creates an instance of a CourseListModel", () => {
      chai.expect(model).to.exist;
    });

    it("includes a property courses", () => {
      chai.expect(model).to.have.a.property("courses");
    });

    it("includes courses that is an array", () => {
      chai.expect(model).to.have.a.property("courses").that.is.an("array");
    });
  });
});
